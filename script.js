class Room{

    constructor(name, length, width, capacity){
        this.name = name;
        this.length = length;
        this.width = width;
        this.getArea = length * width;
        this.getPerimeter = (2 * length) + (2 * width);
        this.available = true;
        if(capacity !== undefined){
            this.capacity = capacity;
        } else {
            this.capacity = 15;
        }
    } 
}


let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20, 18);
room2.available = false;
console.log(room1);
console.log(room2);
console.log(room1.available);
console.log(room2.available);
console.log(room1.capacity);
console.log(room2.capacity);

//testing ground
