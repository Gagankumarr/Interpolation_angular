import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appone';
  name="New user";
  array=["new",10];
  obj={
    name:"rishabh",
    age:16,
  }

}
