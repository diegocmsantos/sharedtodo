import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup-page',
  templateUrl: 'signup-page.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SignupPage Page');
  }

}
