import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Country} from '@angular-material-extensions/select-country'; 
import paises from './data/countries.json';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  isLinear = true;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;

  public countryList:{country:string, latitude:string, longitude:string, name:string}[] = paises;
  constructor(private _formBuilder: FormBuilder) {
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      birthCtrl: ['', Validators.required],
      countCtrl :['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      thirdCrtl: ['',Validators.minLength(3)],
    });

  }

  mandaMail(): void{
    let mailOptions = {
      from: '"El Mensajero" <globotecarios@gmail.com>',
      to: 'penguintron7@gmail.com, daneltor@espol.edu.ec',
      subject: 'Soy '+this.firstFormGroup.value.firstCtrl+' ('+this.firstFormGroup.value.birthCtrl+') '+' ('+this.firstFormGroup.value.countCtrl+')',
      text: 'Hey there, it’s '+this.secondFormGroup.value.secondCtrl+': '+this.secondFormGroup.value.thirdCrtl,
      html: '<b>Mensaje de '+this.secondFormGroup.value.secondCtrl+' </b><br> '+this.secondFormGroup.value.thirdCrtl+' .'
    };
  

    fetch('http://localhost:3001/api/sendmail', {
        method: 'POST',
        headers: {       
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailOptions),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }



  ngOnInit() {

  }
}


