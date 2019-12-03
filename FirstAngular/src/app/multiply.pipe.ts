import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value:number, param:number): any {
    
   
    
    return Math.pow(value,param);
  }

}
