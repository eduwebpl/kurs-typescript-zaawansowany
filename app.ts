enum Availability {
  Monday,
  Tuesday,
  Wednesday = '123'.length,
  Thursday = 4,
  Friday,
}
const key = 'Monday';
Availability.Monday /*?*/
Availability[key] /*?*/
Availability[5] /*?*/

enum SupportedFileTypes {
  png = 'image/png',
  jpg = 'image/jpeg',
}

SupportedFileTypes.png /*?*/

function foo(bar: SupportedFileTypes) {}
foo(SupportedFileTypes.png)