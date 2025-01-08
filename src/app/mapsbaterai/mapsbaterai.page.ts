import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-mapsbaterai',
  templateUrl: './mapsbaterai.page.html',
  styleUrls: ['./mapsbaterai.page.scss'],
})
export class MapsbateraiPage implements OnInit {
  map!: L.Map;
  userMarker!: L.Marker;
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.map = L.map('mapId').setView([-7.9806, 112.6323], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

  //   var myIcon = L.icon({
  //     iconUrl: 'assets/marker-icon.png',
  //     iconSize: [38, 55],
  //     iconAnchor: [22, 94],
  //     popupAnchor: [-3, -76],
  //     shadowUrl: 'assets/marker-shadow.png',
  //     shadowSize: [68, 95],
  //     shadowAnchor: [22, 94]
  // });
  // Ikon marker khusus
  const myIcon = L.icon({
    iconUrl: 'assets/marker-icon.png',
    iconSize: [38, 55],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  const myIcon2 = L.icon({
    iconUrl: 'assets/icon/yourlocation.png', // Ikon your location
    iconSize: [38, 55],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });
  

  // L.marker([50.505, 30.57], {icon: myIcon  }).addTo(map);

  const markPoint1 = L.marker([-7.9900, 112.6400], { icon: myIcon }); // Lokasi baru
  markPoint1.bindPopup('Marker 1: New location!').addTo(this.map);

  // Menambahkan marker kedua
  const markPoint2 = L.marker([-7.9856, 112.6423], { icon: myIcon });
  markPoint2.bindPopup('Marker 2: A pretty CSS popup.<br> Easily customizable.').addTo(this.map);

  // Menambahkan marker ketiga
  const markPoint3 = L.marker([-7.9906, 112.6523], { icon: myIcon });
  markPoint3.bindPopup('Marker 3: A pretty CSS popup.<br> Easily customizable.').addTo(this.map);

  const markPointBlimbing = L.marker([-7.9910, 112.6280], { icon: myIcon });
  markPointBlimbing.bindPopup('Kecamatan Blimbing').addTo(this.map);

  const markPointKlojen = L.marker([-8.0166, 112.6320], { icon: myIcon });
  markPointKlojen.bindPopup('Kecamatan Klojen').addTo(this.map);

  const markPointLowokwaru = L.marker([-7.9867, 112.6285], { icon: myIcon });
  markPointLowokwaru.bindPopup('Kecamatan Lowokwaru').addTo(this.map);

  const markPointSukun = L.marker([-7.9862, 112.6200], { icon: myIcon });
  markPointSukun.bindPopup('Kecamatan Sukun').addTo(this.map);

  const markPointDau = L.marker([-8.0380, 112.6000], { icon: myIcon });
  markPointDau.bindPopup('Kecamatan Dau').addTo(this.map);

  
//     const markPoint = L.marker([-7.9806, 112.6323], {icon: myIcon});
//        markPoint .bindPopup('A pretty CSS popup.<br> Easily customizable.').addTo(this.map)

//        const markPoint2 = L.marker([-7.9366016859985695, 112.62538238591131], {icon: myIcon});
//        markPoint .bindPopup('A pretty CSS popup.<br> Easily customizable.').addTo(this.map)
// this.map.addLayer(markPoint) 

    // Tambahkan lokasi real-time
    this.geolocation.watchPosition().subscribe((position) => {
      if (position && 'coords' in position) { // Memeriksa apakah position memiliki properti coords
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        const realtimeMarker = L.marker([latitude, longitude], { icon: myIcon2 });
        realtimeMarker
          .bindPopup(`You are here: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`)
          .addTo(this.map);
    
        this.map.setView([latitude, longitude], 15);
      } else {
        console.error('Geolocation error:', position);
      }
    });   

   }

}




