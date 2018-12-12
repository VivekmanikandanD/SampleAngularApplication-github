import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'valuePower'})

export class ValuePowerPipe implements PipeTransform {
transform(val: number, exponent:number): number {
//let exp = parseFloat(exponent);
return Math.pow(val,exponent);
}
}