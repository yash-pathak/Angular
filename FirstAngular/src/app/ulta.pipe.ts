import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ulta'
})
export class UltaPipe implements PipeTransform {

  transform(value: string, param:string): string {
    let revString:string = "";
    for(var i=value.length-1;i>=0;i--){
    revString=revString+value.charAt(i);
    }
    return revString;
  }

}
