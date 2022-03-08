// create a function called circle
// that has radius = 2 and area

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);