import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterx'
})
export class FilterxPipe implements PipeTransform {

  transform(value: any, param:string): any {
    let listitem=[];
  value.forEach(i=> {
  if(i.gender.toLowerCase()==param.toLowerCase())
  {
  listitem.push(i);  
  }
  }); 
  return listitem;
  }

}
