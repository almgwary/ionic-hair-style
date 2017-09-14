import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  flexImageSize:any=7;
  flexBorderSize:any=3;
  galleryName:any="yourGalleryName";
  galleryDataUri:any="assets/data.json";
  constructor(public navCtrl: NavController) {

  }

  onGalleryViewerChange(e?){

  }

}
