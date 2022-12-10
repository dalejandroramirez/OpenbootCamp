import {Observable} from 'rxjs'

export const getNumber = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next(1);  //Retorna un 1
  }, 1000);

  setTimeout(() => {
    subscriber.next('dos');  //Retorna un 2
  }, 2000);
  
  setTimeout(() => {
    subscriber.next(3);  //Retorna un 2
  }, 3000);
  
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete(); //Finalmente, the observable completes and finishes
  }, 4000)
})
