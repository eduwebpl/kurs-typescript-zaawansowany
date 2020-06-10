interface Length {
  length: number
}

interface Filterable {
  filter: Function
}

function howLong<T extends Length & Filterable>(data: T): number {
  return data.length;
}

howLong([1, 2, 3]) /*?*/
howLong("Abc") /*?*/


class Song {
  constructor(public title: string, public year: number) {}
}

function getInfo<T extends Song>(song: T): string {
  return `${song.title} @ ${song.year}`;
}

const song = new Song("We Will Rock You", 1977);
getInfo(song) /*?*/

const movie = { title: 'Gone In 60 Seconds', year: 2000 }
getInfo(movie) /*?*/