class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(dir) {
    const directions = ["north", "east", "south", "west"];
    if (directions.includes(dir)) {
      this.bearing = dir;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(attrObj) {
    this.bearing = attrObj.direction;
    this.coordinates = [attrObj.x, attrObj.y];
  }

  turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east";
    } else if (this.bearing === "east") {
      this.bearing = "south";
    } else if (this.bearing === "south") {
      this.bearing = "west";
    } else {
      this.bearing = "north";
    }
  }

  turnLeft() {
    if (this.bearing === "north") {
      this.bearing = "west";
    } else if (this.bearing === "east") {
      this.bearing = "north";
    } else if (this.bearing === "south") {
      this.bearing = "east";
    } else {
      this.bearing = "south";
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1]++;
    } else if (this.bearing === "east") {
      this.coordinates[0]++;
    } else if (this.bearing === "south") {
      this.coordinates[1]--;
    } else {
      this.coordinates[0]--;
    }
  }

  translateInstructions(string) {
    const instructions = string.split("");

    for (const letter of instructions) {
      if (letter === "A") {
        this.advance();
      } else if (letter === "R") {
        this.turnRight();
      } else {
        this.turnLeft();
      }
    }
  }
}
