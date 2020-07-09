let upperCase: Object
let literal: {}
let lowerCase: object

upperCase = 123
upperCase = '1234'
upperCase = false
upperCase = undefined
upperCase = null

const text = ''

lowerCase = 123
lowerCase = '1234'
lowerCase = false
lowerCase = undefined
lowerCase = null
lowerCase = []
lowerCase = {}

Object.create({})
Object.create(null)
Object.create(undefined)
Object.create(123)
Object.create('123')

let strict: { [key: string]: string }
strict = { foo: 'bar' }
strict = []
strict = true
strict = null