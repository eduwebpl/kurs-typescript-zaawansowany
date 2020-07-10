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

// Use objects as payloads for functions
type SendMail = (type: string, from: string, to: string, subject: string) => Boolean;
type SendMail2 = (type: string, data: { from: string; to: string; subject: string }) => Boolean;
