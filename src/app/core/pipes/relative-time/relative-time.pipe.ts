import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: any): string {
    const now = new Date().getTime();
    const updatedTime = new Date(value).getTime();
    const difference = now - updatedTime;

    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;

    if (difference < minute) {
      return 'Agora há pouco';
    } else if (difference < hour) {
      return Math.round(difference / minute) + ' minutos atrás';
    } else if (difference < day) {
      return Math.round(difference / hour) + ' horas atrás';
    } else {
      return Math.round(difference / day) + ' dias atrás';
    }
  }
}
