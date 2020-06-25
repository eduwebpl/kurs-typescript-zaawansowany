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