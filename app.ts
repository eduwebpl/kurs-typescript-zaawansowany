class Song {
  constructor(public title: string) {}
}

class Playlist {
  constructor(public name: string) {}
}

function play(media: Song | Playlist) {
  if (media instanceof Song) {
    return media.title;
  }

  return media.name;
}

const bestThemeEver = new Playlist('Game of Thrones Theme');
play(bestThemeEver); /*?*/ 

class Movie {
  constructor(public title: string) {}

  play() {
    return this.title
  }
}

const media = new Movie('Gone in 60 seconds.');

media instanceof Movie /*?*/
media instanceof Object /*?*/
Object.getPrototypeOf(media) === Movie.prototype /*?*/
media.constructor === Movie; /*?*/