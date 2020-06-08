interface User {
  name: string,
  introduce: () => Function
}

const user = {
  name: 'Adam',
  introduce(this: User) {
    return function(this: typeof user) {
      return `I'm ${this.name}!`
    }
  } 
}

const sayHello = user.introduce();
sayHello() /*?*/