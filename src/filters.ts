const animals = ['cat','dog','cow','cat','apple','cow','cat','dog'];
const animals1 = animals.filter(animals => animals === 'cat');
const animals2 = animals.filter(animals => animals === 'dog');
console.log(animals1);
console.log(animals2);


const names = ['Adamu Salisu', 'Abba Garba', 'Kabiru Musa', 'Farida Salisu Adamu'];
const doubledNumbers = names.map(names=> 'Student Name:' + names );
console.log(doubledNumbers);


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log(sum);


const club = ['manchester','Arsenal','Barcelona','cardiac City'];
club.forEach(club => console.log("Club-Name: " +club ));



const Message = ['lets go to party','lets go to school','kill you', 'lets watch movies','bomb blast','hack account'];
const threat = Message.find(TreatMessage => TreatMessage === 'kill you');
const threat2 = Message.find(TreatMessage => TreatMessage === 'hack account');
console.log('threat Message Found: '+threat);
console.log('threat Message Found:  '+threat2);

