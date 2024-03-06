

import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value:boolean):'vuela'|'no vuela'{
    return value? 'vuela': 'no vuela';
    
  }
}
