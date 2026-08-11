# Abstraction

- The process of simplifying complex systems by breaking them down into smaller and more manageable components.
- It involves hiding the implementation details of the system and exposing only the essential features to the user. This allows developers to focus more on the functionality of a component without being concerned with the underlying complexity, making code easier to understand, maintain and extend.

## Abstraction in TypeScript

- Abstraction is achieved through classes and interfaces
- Classes allows you to define blueprint, while interfaces define the contract that a class need to adhere to.

```
interface Shape{
    area():number;
    perimeter():number
}

class Circle implements Shape{
    constructor(private radius:number){}
    area():number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter():number{
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape{
    constructor(private width:number, private height:number){}
    area():number {
        return this.width * this.height;
    }
    perimeter():number{
        return 2 * (this.width + this.height);
    }
}

function calculateTotalArea(shapes:Shape[]):number{
    let totalArea = 0

    for(let shape of shapes){
        totalArea += shape.area()
    }

    return total
}

const circle = new Circle(5)
const rectangle = new Rectangle(4, 6)

const shapes:Shape[] = [circle, rectangle];
console.log("Total area: ", calculateTotalArea(shapes))

```
