import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  student;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.student = navParams.data.student;
    console.log(this.student);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
