import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../services/getPosts.service';

@Pipe({
  name: 'repeatFilter',
})
export class RepeatFilterPipe implements PipeTransform {
  transform(value: Post[]): number[] {
    let numberArr: number[] = [];
    // Перебираем массив и берем userId каждого поста
    for (let i in value) {
      numberArr.push(value[i].userId);
    }
    // Убираем повторные userId 
    let temp = [...new Set(numberArr)];
    return temp;
  }
}
