import { Component, OnInit } from '@angular/core';
import {brands} from '../Brands';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  brands = brands;
  constructor() { }

  ngOnInit() {
    
  }

}