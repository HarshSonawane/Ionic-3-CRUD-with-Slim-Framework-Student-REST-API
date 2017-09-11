import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentproviderProvider } from './../../providers/studentprovider/studentprovider';



@IonicPage()
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
  providers: [StudentproviderProvider]
})
export class InsertPage {
  results: Array<any>;
  public student = {
    firstname: "",
    lastname: "",
    matric: "",
    email: ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public studentdata: StudentproviderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }

  // this function will be called
  // from template
  onSubmit() {
    // let's log our findings

    // console.log('Form submission is ', this.student.firstname);
    this.studentdata.InsertStudent(this.student.firstname, this.student.lastname, this.student.matric, this.student.email);

  };
  // this.myData = formData.value;

}
