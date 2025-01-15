import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine'; 
import { ApiService } from '../api.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-mapsbaterai',
  templateUrl: './mapsbaterai.page.html',
  styleUrls: ['./mapsbaterai.page.scss'],
})
export class MapsbateraiPage implements OnInit {
  map!: L.Map;
  userMarker!: L.Marker;
  userLocation: L.LatLng | null = null; 
  routeControl!: L.Routing.Control; 
  destinationMarker: L.Marker | null = null; 
  distance: string = '0.00 km';
  userLocationText: string = '';
  userLocationDistance: string = ''; 
  destinationText: string = 'Select Destination';
  stations: any[] = [];

  myIcon = L.icon({
    iconUrl: 'assets/icon/marker-icon.png',
    iconSize: [38, 55],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'assets/icon/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  myIcon2 = L.icon({
    iconUrl: 'assets/icon/yourlocation.png',
    iconSize: [38, 55],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'assets/icon/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  constructor(private geolocation: Geolocation, private api: ApiService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.9806, 112.6323], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.api.getBatteryStations().subscribe(
      (stations:any) => {
        this.stations = stations;
        this.addMarkersForStations();
        console.log("Stations:", stations);
      },
      (error: any) => {
        console.error('Error fetching battery stations:', error);
      }
    );
    
    
    

    // const myIcon = L.icon({
    //   iconUrl: 'assets/icon/marker-icon.png',
    //   iconSize: [38, 55],
    //   iconAnchor: [22, 94],
    //   popupAnchor: [-3, -76],
    //   shadowUrl: 'assets/icon/marker-shadow.png',
    //   shadowSize: [68, 95],
    //   shadowAnchor: [22, 94],
    // });

    // const myIcon2 = L.icon({
    //   iconUrl: 'assets/icon/yourlocation.png',
    //   iconSize: [38, 55],
    //   iconAnchor: [22, 94],
    //   popupAnchor: [-3, -76],
    //   shadowUrl: 'assets/icon/marker-shadow.png',
    //   shadowSize: [68, 95],
    //   shadowAnchor: [22, 94],
    // });

    // Marker titik tujuan
    // const markPoint1 = L.marker([-7.9900, 112.6400], { icon: this.myIcon });
    // markPoint1.bindPopup('Pos 1: Jl. Mayjend Panjaitan No.75, Penanggungan, Kec. Klojen, Kota Malang').addTo(this.map);
    // markPoint1.on('click', () => this.calculateRoute(markPoint1.getLatLng(), 'Marker 1', 'Jl. Mayjend Panjaitan No.75, Penanggungan, Kec. Klojen, Kota Malang'));

    // const markPoint2 = L.marker([-7.9856, 112.6423], { icon: this.myIcon });
    // markPoint2.bindPopup('Pos 2: Jl. Raya Tlogomas, Malang, Jawa Timur').addTo(this.map);
    // markPoint2.on('click', () => this.calculateRoute(markPoint2.getLatLng(), 'Marker 2', 'Jl. Raya Tlogomas, Malang, Jawa Timur'));

    // const markPoint3 = L.marker([-7.9906, 112.6523], { icon: this.myIcon });
    // markPoint3.bindPopup('Pos 3: Jl. Soekarno Hatta, Malang, Jawa Timur').addTo(this.map);
    // markPoint3.on('click', () => this.calculateRoute(markPoint3.getLatLng(), 'Marker 3', 'Jl. Soekarno Hatta, Malang, Jawa Timur'));

    // Lokasi real-time pengguna
    this.geolocation.watchPosition().subscribe((position) => {
      if (position && 'coords' in position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.userLocation = L.latLng(latitude, longitude);
        console.log('User location: ', this.userLocation)
        this.userLocationText = `You are here: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

        if (this.userMarker) {
          this.map.removeLayer(this.userMarker); // Hapus marker sebelumnya
        }

        this.userMarker = L.marker([latitude, longitude], { icon: this.myIcon2 });
        this.userMarker.bindPopup(this.userLocationText).addTo(this.map);

        this.map.setView([latitude, longitude], 15);
      } else {
        console.error('Geolocation error:', position);
      }
    });
  }

  addMarkersForStations() {
    this.stations.forEach((station: any) => {  // Using any type for station
      const marker = L.marker([station.latitude, station.longitude], { icon: this.myIcon });
      marker.bindPopup(`
        <strong>${station.station_name}</strong><br>
        ${station.station_address}
      `).addTo(this.map);
      marker.on('click', () => this.calculateRoute(marker.getLatLng(), `${station.station_name}`, `${station.station_address}`));
    });
  }

  // Fungsi untuk menghitung rute
  calculateRoute(destination: L.LatLng, markerName: string, markerAddress: string) {
    if (!this.userLocation) {
      alert('User location not available yet.');
      return;
    }

    // Hapus rute sebelumnya
    if (this.routeControl) {
      this.map.removeControl(this.routeControl);
    }

    // Buat rute dari lokasi pengguna ke titik tujuan
    this.routeControl = L.Routing.control({
      waypoints: [this.userLocation, destination],
      routeWhileDragging: true,
      showAlternatives: false,
      addWaypoints: false,
      lineOptions: {
        styles: [{ color: '#0074D9', weight: 5 }],
        extendToWaypoints: true, // Menambahkan properti extendToWaypoints
        missingRouteTolerance: 10, // Menambahkan properti missingRouteTolerance
      },
    }).addTo(this.map);
    

    // Sembunyikan instruksi navigasi
    const routingContainer = document.querySelector('.leaflet-routing-container');
    if (routingContainer) {
      routingContainer.setAttribute('style', 'display: none;');
    }

    // Hitung jarak rute
    this.routeControl.on('routesfound', (event: any) => {
      const distanceInKm = event.routes[0].summary.totalDistance / 1000; // Dalam kilometer
      this.distance = `${distanceInKm.toFixed(2)} km`;

      // Update tampilan informasi jarak
      this.destinationText = `${markerName} (${markerAddress})`;
      this.userLocationDistance = ''; // Set menjadi string kosong

      // Update tampilan lokasi dan jarak
      const distanceElement = document.getElementById('distance');
      if (distanceElement) {
        distanceElement.textContent = this.distance;
      }
    });
  }
}
