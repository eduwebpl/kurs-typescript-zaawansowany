// Type inference
const text = 'Adam';
const func = (foo: string) => ({ foo });

// Non-existing values
interface Song {
	title: string;
}
const getTitle = (song?: Song) => song.title;

// Use prettier
const abc = 'test';
