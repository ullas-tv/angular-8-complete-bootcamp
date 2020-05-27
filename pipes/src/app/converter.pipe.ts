import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: any, targetUnits: string ): any {
    
    if(!value){
      return '';
    }
   switch(targetUnits){
     case 'km': return value * 1.6322;

     case 'm': return value * 1.6322 * 1000;

     default: return 'Conversion unit not supported'
  }
}

}
