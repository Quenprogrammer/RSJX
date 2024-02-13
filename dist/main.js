"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// Creating a simple Observable that emits numbers
const numberObservable = new rxjs_1.Observable((observer) => {
    // Emitting numbers 1, 2, 3 with a delay
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2000);
    setTimeout(() => observer.next(3), 3000);
    // Complete the Observable
    setTimeout(() => observer.complete(), 4000);
});
// Creating an Observer
const numberObserver = {
    next: (value) => console.log('Got value:', value),
    error: (error) => console.error('Something went wrong:', error),
    complete: () => console.log('Observation complete'),
};
// Subscribing to the Observable
const subscription = numberObservable.subscribe(numberObserver);
// Unsubscribing after 5 seconds
setTimeout(() => {
    subscription.unsubscribe();
    console.log('Unsubscribed!');
}, 5000);
