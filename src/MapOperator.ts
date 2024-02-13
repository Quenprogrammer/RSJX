import {combineLatest, filter, fromEvent, interval, merge, of, reduce, switchMap, take} from 'rxjs';
import { map } from 'rxjs/operators';

const tax = of(1000, 2000, 35000);
tax.pipe(
    map(value => ( value) /50)
).subscribe(result => console.log('Tax Payed N'+result +' Successfully '));




const messages = of('message:examination malpractice','message:Read Chemistry','message:lets Not Read','message:examination malpractice', 'message:we have exams');

messages.pipe(
    filter(value1 => value1  === 'message:examination malpractice')
).subscribe(result => console.log("threat found:  "+result));

const source1 = interval(3000).pipe(take(5));
const source2 = interval(3000).pipe(take(10));
merge(source1, source2).subscribe(result => console.log('SOURCE1 => SOURCE2: '+result));


const DATA1 = interval(1000).pipe(take(3));
const DATA2 = interval(500).pipe(take(6));

combineLatest(DATA1, DATA2).subscribe(DATARESULT => console.log(DATARESULT));


