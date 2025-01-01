import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
@Component({
  selector: 'app-mapsharga',
  templateUrl: './mapsharga.page.html',
  styleUrls: ['./mapsharga.page.scss'],
})
export class MapshargaPage implements OnInit {
  map!: L.Map;
  constructor() { }

  ngOnInit() {
    // this.map= L.map('mapId').setView([-7.9806, 112.6323],13)
    // this.map= L.map('mapId').setView([51.505, -0.09],6)
  //   this.map = L.map('mapId', {
  //     center: [51.505, -0.09],
  //     zoom: 6
  // });



  }

  ionViewDidEnter(){
    this.map = L.map('mapId').setView([-7.9806, 112.6323], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    var myIcon = L.icon({
      iconUrl: 'assets/marker-icon.png',
      iconSize: [38, 55],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: 'assets/marker-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
  });

  // L.marker([50.505, 30.57], {icon: myIcon  }).addTo(map);

    const markPoint = L.marker([-7.9806, 112.6323], {icon: myIcon});
       markPoint .bindPopup('A pretty CSS popup.<br> Easily customizable.')

       const markPoint2 = L.marker([-7.9806, 114.6323], {icon: myIcon});
       markPoint .bindPopup('A pretty CSS popup.<br> Easily customizable.').addTo(this.map)
this.map.addLayer(markPoint)
      }

}

