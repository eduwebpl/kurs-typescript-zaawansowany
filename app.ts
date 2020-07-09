"use strict"
// Default
function simpleCall() {
  return (this.foo = "global")
}

// simpleCall() /*?*/

// Constructor
function withNew() {
  this /*?*/
}

new withNew()

function outsideTheClass(cb) {
  return cb()
}

// Method call
class newClass {
  method() {
    return outsideTheClass(() => {
      return this
    })
  }
}

const newObj = new newClass()
newObj.method() /*?*/

// custom
function customThis() {
  return this
}

const obj = { x: 1 }

const bounded = customThis.bind(obj)
bounded() /*?*/
customThis.call(obj) /*?*/
customThis.apply(obj, []) /*?*/
