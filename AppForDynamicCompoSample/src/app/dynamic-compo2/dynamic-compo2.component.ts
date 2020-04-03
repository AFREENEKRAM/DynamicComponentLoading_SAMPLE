import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-compo2',
  templateUrl: './dynamic-compo2.component.html',
  styleUrls: ['./dynamic-compo2.component.css']
})
export class DynamicCompo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("dynamiccomp1")
  }

}
