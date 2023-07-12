import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private title:Title){
    title.setTitle('Employee Management System')
  }
   
}

