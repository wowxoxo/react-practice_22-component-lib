export {}

// A square shape with a property for the size of the square's four sides.
interface Square {
  type: 'SQUARE'
  size: number
}

// A rectangle shape with properties for the rectangle's height and width.
interface Rectangle {
  type: 'RECTANGLE'
  height: number
  width: number
}

// A circle shape with a property for the circle's radius.
interface Circle {
  type: 'CIRCLE'
  radius: number
}

interface Triangle {
  type: 'TRIANGLE'
  side1: number
  side2: number
  angle: number
}

// A union type of all the possible shapes.
type Shape = Square | Rectangle | Circle | Triangle

// Define two example circles.
const circle1: Circle = { type: 'CIRCLE', radius: 314 }
const circle2: Circle = { type: 'CIRCLE', radius: 42 }

// Define two example squares.
const square1: Square = { type: 'SQUARE', size: 10 }
const square2: Square = { type: 'SQUARE', size: 1 }

// Define two example rectangles.
const rectangle1: Rectangle = { type: 'RECTANGLE', height: 10, width: 4 }
const rectangle2: Rectangle = { type: 'RECTANGLE', height: 3, width: 5 }
const triangle1: Triangle = { type: 'TRIANGLE', side1: 3, side2: 4, angle: 59 }

// Define an array with all the shapes mixed.
const shapes = [circle1, square1, rectangle1, square2, circle2, rectangle2]

// shapes.push(triangle1)
const firstSquare = shapes.find((shape) => shape.type === 'SQUARE')
// console.log(firstSquare?.size)

try {
  throw new Error('Holy shit!')
} catch (error) {
  console.log('error', error)
  console.log('error message: ', (error as Error).message)
}

class NotImplemented extends Error {
  errorReason: string
  constructor(message = '', errorReason: string) {
    super(message)
    this.message = message + ' has not yet been implemented'
    this.errorReason = errorReason
  }
}

try {
  throw new NotImplemented('render optimization', "I'm lazy")
} catch (error) {
  console.log('error', error)
  console.log('error message: ', (error as NotImplemented).message)
  console.log('error reason: ', (error as NotImplemented).errorReason)
}

// Casts
const firstSquare1 = shapes.find((shape) => shape.type === 'SQUARE') as
  | Square
  | undefined
console.log(firstSquare1?.size)

// Type guards
const isSquare = (shape: Shape) => shape.type === 'SQUARE'
const isCircle = (shape: Shape) => shape.type === 'CIRCLE'
const isRectangle = (shape: Shape) => shape.type === 'RECTANGLE'

const isSquare1 = (shape: Shape): shape is Square => shape.type === 'SQUARE'
const isCircle1 = (shape: Shape): shape is Circle => shape.type === 'CIRCLE'
const isRectangle1 = (shape: Shape): shape is Rectangle =>
  shape.type === 'RECTANGLE'

const shape: Shape = square1

if (isSquare(shape)) {
  console.log(shape.size)
}

// not work
const firstSquare2 = shapes.find(isSquare) || { size: 0 }
// console.log(firstSquare2?.size)

// ok
const firstSquare3 = shapes.find(isSquare1)
console.log(firstSquare3?.size)

/** FILTER */
const onlyCircles = shapes.filter((shape) => isCircle1(shape))
// onlyCircles.forEach((circle) => console.log(circle.radius))

const onlyCircles1 = shapes.filter(isCircle1)
onlyCircles1.forEach((circle) => console.log(circle.radius))

const sizeOneSquare = shapes.find(
  (shape) => isSquare1(shape) && shape.size === 1
)
// console.log(sizeOneSquare?.size)

const sizeOneSquare1 = shapes
  .filter(isSquare1)
  .find((shape) => shape.size === 1)
console.log(sizeOneSquare1?.size)

interface Person {
  name: string
  address?: { city: string }
}

interface PersonWithAddress extends Person {
  address: { city: string }
}

const person1: Person = { name: 'Jane Doe', address: { city: 'Moscow' } }
const person2: Person = { name: 'Amber heard' }

const arr = [person1, person2]

const personWithAddress = (p: Person): p is PersonWithAddress =>
  p.address !== undefined

// const neBobji = arr.filter(p => p.address)
const neBobji = arr.filter(personWithAddress)
console.log(neBobji)

neBobji.forEach((p) => console.log(`${p.name} ${p.address.city}`))
