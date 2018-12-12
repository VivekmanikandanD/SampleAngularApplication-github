import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'valueSquareroot'})

export class ValueSquarerootPipe implements PipeTransform {
transform(val: number): number {
//let exp = parseFloat(exponent);
return Math.sqrt(val);
}
}