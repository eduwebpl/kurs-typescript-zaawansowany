const user = {
  username: 'Adam',
  pin_number: 1234
}

type userType = typeof user; // object

// const obj: userType = {}

// keyof
interface User {
  username: string;
  pin_number: number;
}

type userKeys = keyof User; 
type userTypes = User[userKeys];

type userName = User['username'];

function propertyType<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = propertyType(user, 'pin_number'); /*?*/