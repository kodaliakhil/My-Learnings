/**
 * Exercise: Calculate the Total Area of Different Shapes Using Interfaces
 *
 * Problem Statement:
 *
 * You are developing a geometry application that needs to work with different
 * types of shapes in a consistent way.
 *
 * Requirements:
 * 1. Define an interface named `Shape` with:
 *    - area(): number
 *    - perimeter(): number
 *
 * 2. Implement the Shape interface in:
 *    - Circle
 *      - Constructor accepts radius.
 *      - Area = π × r²
 *      - Perimeter = 2 × π × r
 *
 *    - Rectangle
 *      - Constructor accepts width and height.
 *      - Area = width × height
 *      - Perimeter = 2 × (width + height)
 *
 * 3. Create a function `calculateTotalArea(shapes: Shape[])`
 *    that returns the sum of the areas of all shapes.
 *
 * 4. Create shape objects and store them in a Shape[] array.
 *
 * 5. Display the total area of all shapes.
 *
 * Learning Objectives:
 * - Understand TypeScript interfaces
 * - Implement polymorphism using interfaces
 * - Work with arrays of interface types
 * - Apply object-oriented programming principles
 */

// Define an interface for a shape
interface Shape {
  area(): number;
  perimeter(): number;
}

// Implement the Shape interface with a Circle class
class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Implement the Shape interface with a Rectangle class
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Function to calculate the total area of an array of shapes
function calculateTotalArea(shapes: Shape[]): number {
  let totalArea = 0;

  for (const shape of shapes) {
    totalArea += shape.area();
  }

  return totalArea;
}

// --------------------
// Test Case 1
// --------------------
const circle1 = new Circle(5);
const rectangle1 = new Rectangle(4, 6);

const shapes1: Shape[] = [circle1, rectangle1];

console.log("Test Case 1");
console.log("Total area:", calculateTotalArea(shapes1));
console.log();

// --------------------
// Test Case 2
// Multiple circles
// --------------------
const shapes2: Shape[] = [
  new Circle(2),
  new Circle(3),
  new Circle(4),
];

console.log("Test Case 2");
console.log("Total area:", calculateTotalArea(shapes2));
console.log();

// --------------------
// Test Case 3
// Multiple rectangles
// --------------------
const shapes3: Shape[] = [
  new Rectangle(2, 5),
  new Rectangle(10, 3),
  new Rectangle(4, 4),
];

console.log("Test Case 3");
console.log("Total area:", calculateTotalArea(shapes3));
console.log();

// --------------------
// Test Case 4
// Mixed shapes
// --------------------
const shapes4: Shape[] = [
  new Circle(1),
  new Rectangle(2, 3),
  new Circle(7),
  new Rectangle(5, 8),
];

console.log("Test Case 4");
console.log("Total area:", calculateTotalArea(shapes4));
console.log();

// --------------------
// Test Case 5
// Empty array
// --------------------
const shapes5: Shape[] = [];

console.log("Test Case 5");
console.log("Total area:", calculateTotalArea(shapes5));
console.log();

// --------------------
// Test Case 6
// Verify individual shape methods
// --------------------
const circle2 = new Circle(10);
const rectangle2 = new Rectangle(8, 12);

console.log("Test Case 6");
console.log("Circle Area:", circle2.area());
console.log("Circle Perimeter:", circle2.perimeter());

console.log("Rectangle Area:", rectangle2.area());
console.log("Rectangle Perimeter:", rectangle2.perimeter());