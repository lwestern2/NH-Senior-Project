import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("nav").style.width = "340px";
    document.getElementById("nav").classList.remove("fade");
    document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
    document.getElementById("nav").style.zIndex = "100";

    // let listener = document.getElementsByClassName('main');
    // document.body.addEventListener('click', this.closeNav);
  }

  
  closeNav() {
    document.getElementById("nav").classList.add("fade");
    document.getElementById("nav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    // document.body.addEventListener('click', this.closeNav);
  }

}
