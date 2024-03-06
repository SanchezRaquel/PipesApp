import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';
import internal from 'stream';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelectPipe Configuración
  public name:string='Fernando';
  public gender: 'male'|'female'='male';

  public invitationMap={
    'male':'invitarlo',
    female:'invitarla'
  }

  chanceclient():void{
    this.name='Karen';
    this.gender='female'
  }

  //i18nPlural
public clientes: string[]=['Karen', 'Raquel','Jair','Ricardo','Karla','Natalia','Carlos','Pablo'];
public clientMap={
  '=0': 'No tenemos ningun cliente esperando',
  '=1': 'Tenemos un cliente esperando ',
  'other': 'Tenemos # clientes esperando'
}
deletedClient():void{
this.clientes.shift();
}

//KeyValue PIPE
public person ={
  name:'Karen ',
  age: 23,
  address:'Tampico, Tamaulipas'
};

//Async Pipe
// public myObservable:Observable<number>=interval(2000).pipe(
//   tap(value=>console.log('tap:',value)));

// public promiseValue: Promise<string>=new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('Tenemos data en la promesa')
//   },3500);
// })

}
