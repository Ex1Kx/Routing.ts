import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Products = [
  {
    id: "ABC8441189",
    name: "Tshirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: "DEF6510463347",
    name: "Shoes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    id: "GHI0831819467",
    name: "Handbags",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
