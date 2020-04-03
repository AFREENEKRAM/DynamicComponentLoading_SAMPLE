import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-compo1',
  templateUrl: './dynamic-compo1.component.html',
  styleUrls: ['./dynamic-compo1.component.css']
})
export class DynamicCompo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("dynamiccomp1")
  }

}
