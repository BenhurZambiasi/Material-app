import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My Button"
  i = 0;
  constructor() { }
  spinnerMode = "determinate";
  btnEnable = true;
  ngOnInit(): void {
  }
  save() {
    this.i++;
    this.buttonName = "It was cliked " + this.i + " times"
    console.log(this.i)
  }
  disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000)
  }

}
