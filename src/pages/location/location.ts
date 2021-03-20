import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Coords } from '../../app/types';
import L from 'leaflet';


@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  map: any =  L.map;
  coordinates: Coords;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private Toast: ToastController
  ) {}

  ngOnInit() {
    // Create a map, check if we have the coordinates of the user's position already
    // If not, set up a map center randomly
    this.map = L.map('map', {
      center: [
        this.coordinates ? this.coordinates.lat : 28.644800,
        this.coordinates ? this.coordinates.long : 77.216721
      ],
      zoomControl: false,
      zoom: 16,
      drawControl: true
    });

    // Get user position, set the center to its position
    // and add a marker to display exactly where he is on the map
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        this.coordinates = {
          lat: resp.coords.latitude,
          long: resp.coords.longitude
        }

        this.map.panTo(new L.LatLng(this.coordinates.lat, this.coordinates.long));
        const marker = new L.Marker([this.coordinates.lat, this.coordinates.long]);
        this.map.addLayer(marker);

      }).catch((error) => {
        const toast = this.Toast.create({
          message: "Une erreur est survenue.",
          duration: 2000
        });
        toast.present();

        console.log('Error getting location', error);
      });

    // watch position updates
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data: Geoposition) => {
      this.coordinates = {
        lat: data.coords.latitude,
        long: data.coords.longitude
      };

      // Add new marker + move center when the user moves :)
      this.map.panTo(new L.LatLng(this.coordinates.lat, this.coordinates.long));
      const marker = new L.Marker([this.coordinates.lat, this.coordinates.long]);
      this.map.addLayer(marker);
    });

    // Show map layer
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/dark-v10',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWFyZ290ZHVtb3VsaW4iLCJhIjoiY2tnOTVodHFwMDNyZTMybXNsZXllMWh3cSJ9.MW70WqIbD4CH-hc0XxV7pA'
    }).addTo(this.map);

  }

}
