import { Component, OnInit } from '@angular/core';
import { Color, hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean=false;
  public orderBy?: keyof hero | null;

  public heroes:hero[]=[
      {
        name:'Superman',
        canFly:true,
        color:Color.blue
     },
     {
      name:'Batman',
      canFly:false,
      color:Color.black
   },
    {
      name:'Daredevil',
      canFly:false,
      color:Color.red
  },
  {
    name:'Robim',
    canFly:false,
    color:Color.green
  },
  {
    name:'Linterna verde',
    canFly:true,
    color:Color.green
  },
  ]

  ToggleUpperCase():void{
    this.isUpperCase=!this.isUpperCase;
  }

  changeOrder(value: keyof hero){
    this.orderBy=value;
  }

}
