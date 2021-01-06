import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  names = ["Ana", "Benhur", "Carlos", "Diego",]
  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Canoas", state: "RS"},
    {name: "Recife", state: "PE"},
    {name: "Curitiba", state: "PR"}
  ]

  name: string;
  address: string;
  phone: string;
  city: string;
  age: number;


  clients = [];

  constructor() { }

  ngOnInit(): void {
  }
  save() {
    this.clients.push({
      name: this.name,
      address: this.address,
      phone: this.phone,
      city: this.city,
      age: this.age,
    })
    this.cancel();

  }
  cancel() {
    this.name = "";
    this.address = "";
    this.phone = "";
    this.city = "";
    this.age = 0;
  }

  delete(i: number) {
    this.clients.splice(i, 1)
  }

}
