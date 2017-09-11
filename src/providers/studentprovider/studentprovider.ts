
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';


@Injectable()
export class StudentproviderProvider {

  constructor(public http: Http, public alertCtrl: AlertController) {
    console.log('Hello StudentproviderProvider Provider');
  }

  //get Student
  getStudent() {
    // return this.http.get('http://slimapp/students')
    return this.http.get('http://techouz.com/mazlan/public/index.php/students')
      .map(res => res.json())
    // .map(res => res.results);
  }

  //insert student  
  InsertStudent(firstname, lastname, matric, email) {
    let data = new URLSearchParams();
    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('matric', matric);
    data.append('email', email);



    // this.http.post('http://slimapp/students/add', data)
    this.http.post('http://techouz.com/mazlan/public/index.php/students/add', data)
      .subscribe(data => {

        let alert = this.alertCtrl.create({
          title: 'Added',
          subTitle: firstname + ' ' + lastname + ' added successfully.',
          buttons: ['OK']
        });
        alert.present();

      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }


  //delete student
  deleteStudent(id) {
    // this.http.delete('http://slimapp/students/delete/' + id)
    this.http.delete('http://techouz.com/mazlan/public/index.php/students/delete' + id)
      .subscribe(id => {

        let alert = this.alertCtrl.create({
          title: 'Deleted',
          subTitle: 'Successfully.',
          buttons: ['OK']
        });
        alert.present();

      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }
}
