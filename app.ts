interface Song {
  title: string;
}

interface Playlist {
  name: string;
}

function isSong(media: any): media is Song {
  return media.title !== undefined;
}

function play(media: Song | Playlist) {
  if (isSong(media)) {
    console.log(media.title);
  } else {
    console.log(media.name);
  }
}

play({ title: 'Game of Thrones Theme' });
play({ name: "80's" });