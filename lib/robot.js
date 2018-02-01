class Robot {
  //your solution here
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bear) {
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(bear)) {
      this.bearing = bear;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(obj) {
    this.setCoordinates(obj.x, obj.y);
    this.setBearing(obj.direction);
  }

  turnRight() {
    const directions = ["north", "east", "south", "west", "north"];
    let turn = directions.indexOf(this.bearing) + 1;
    this.setBearing(directions[turn]);
  }

  turnLeft() {
    const directions = ["north", "west", "south", "east", "north"];
    let turn = directions.indexOf(this.bearing) + 1;
    this.setBearing(directions[turn]);
  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1);
        break;
      case "south":
        this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1);
        break;
      case "east":
        this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1]);
        break;
      case "west":
        this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1]);
        break;
    }
  }

  translateInstructions(inst) {
    let parse = inst.split("");
    parse.forEach(yo => {
      this.helper(yo);
    });
  }

  helper(letter) {
    switch (letter) {
      case "L":
        this.turnLeft();
        break;
      case "R":
        this.turnRight();
        break;
      case "A":
        this.advance();
        break;
    }
  }
}
