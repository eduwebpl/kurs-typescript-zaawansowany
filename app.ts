function upperAnything(data: string | string[]): string {
  switch(typeof data) {
    case "string": return data.toUpperCase();
    default: return data.map(item => item.toUpperCase()).join('')
  }
}

upperAnything(['a', 'b', 'c']); /*?*/
upperAnything('abc'); /*?*/

class Song {
  constructor(public title: string) {}
}

class Playlist {
  constructor(public name: string) {}
}

function play(media: Song | Playlist) {
  if ('title' in media) {
    return 'Play song!'
  }

  return 'Play playlist.'
}

const bestThemeEver = new Song('Game of Thrones Theme');
play(bestThemeEver); /*?*/