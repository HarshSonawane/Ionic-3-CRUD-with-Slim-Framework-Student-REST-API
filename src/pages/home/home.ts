import { InsertPage } from './../insert/insert';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { DetailPage } from './../detail/detail';
import { StudentproviderProvider } from './../../providers/studentprovider/studentprovider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StudentproviderProvider]
})
export class HomePage {

  public student = new Array();
  private detailPage;

  constructor(public navCtrl: NavController, public studentdata: StudentproviderProvider, public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({ content: 'Loading People' });
    loader.present();

    this.detailPage = DetailPage;
    this.studentdata.getStudent().subscribe(student => {
      console.log('student', student);
      loader.dismiss();
      this.student = student;
    });

  }

  itemSelected(student) {
    console.log(student);
    this.navCtrl.push(this.detailPage, { student: student });
  }

  Insert() {
    this.navCtrl.push(InsertPage);
  }

  RefreshList() {
    let loader = this.loadingCtrl.create({ content: 'Loading People' });

    loader.present();

    this.detailPage = DetailPage;
    this.studentdata.getStudent().subscribe(student => {
      console.log('student', student);
      loader.dismiss();
      this.student = student;
    });

  }

  deleteStudent(id) {

    this.studentdata.deleteStudent(id);

    // this.RefreshList();
  }

}
