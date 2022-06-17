class Polygon {
    constructor(integers) {
        this.integers = integers;
    }

    get countSides() {
        return this.integers.length;
    }

    get perimeter() {
        let p = 0;
        for (let i = 0; i < this.integers.length; i++) {
            p += this.integers[i];
        }
        return p;
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.integers[0];
        let side2 = this.integers[1];
        let side3 = this.integers[2];
        
        return side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2;
    }

}

class Square extends Polygon {
    get area() {
        let sideA = this.integers[0];
        let sideB = this.integers[1];

        return sideA * sideB;
    }

    get isValid() {
        let a = this.integers[0];
        let b = this.integers[1];
        let c = this.integers[2];
        let d = this.integers[3];

        return a === b && b === c && c === d && d === a;
    }
}