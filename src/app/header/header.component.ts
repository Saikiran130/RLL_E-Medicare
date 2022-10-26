import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  Admin(){
    this.router.navigate(["/admin"]);
  }

  User()
  {
    this.router.navigate(["/user"]);
  }

  About()
  {
    this.router.navigate(["/about"]);
  }

  Contact()
  {
    this.router.navigate(["/contact"]);
  }

}
