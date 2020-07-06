function whatever(arg) {
  switch (arg) {
    case 1: console.log('first!'); break;
    case 2: console.log('second!'); break;
  }
}

whatever(1);

class User {
  name: string;
  add() {
    return function(this: User) {
      return this.name;
    };
  }
}

function iWillNever(message: string, total: number): string {
  // Array.from(document.querySelectorAll('span'));
  return message.repeat(total);
}

iWillNever('I will not tell lies', 100);
iWillNever.apply(undefined, ['I will not tell lies', 100]);



type getYear = (date: string | number) => void;

function getCurrentYear(callback: getYear) {
  callback((Math.random() > 0.5) ? '2020' : 2020);
}

// getCurrentYear((date: string) => {
//   console.log(date.charAt(0));
// });

class Song {
  name: string;
}

const song = new Song();
song.name.toLowerCase(); /*?*/