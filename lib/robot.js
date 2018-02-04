class Robot {
  //your solution here
  constructor() {
    this.bearing = "north";
    this.coordinates = [0, 0];
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing) {
    if (
      bearing == "north" ||
      bearing == "south" ||
      bearing == "east" ||
      bearing == "west"
    ) {
      this.bearing = bearing;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(collection) {
    this.setCoordinates(collection["x"], collection["y"]);
    this.setBearing(collection["direction"]);
  }

  turnRight() {
    if (this.bearing == "north") {
      this.bearing = "east";
    } else if (this.bearing == "east") {
      this.bearing = "south";
    } else if (this.bearing == "south") {
      this.bearing = "west";
    } else if (this.bearing == "west") {
      this.bearing = "north";
    }
  }

  turnLeft() {
    if (this.bearing == "north") {
      this.bearing = "west";
    } else if (this.bearing == "east") {
      this.bearing = "north";
    } else if (this.bearing == "south") {
      this.bearing = "east";
    } else if (this.bearing == "west") {
      this.bearing = "south";
    }
  }

  advance() {
    if (this.bearing == "north") {
      this.coordinates[1]++;
    } else if (this.bearing == "east") {
      this.coordinates[0]++;
    } else if (this.bearing == "south") {
      this.coordinates[1]--;
    } else if (this.bearing == "west") {
      this.coordinates[0]--;
    }
  }

  translateInstructions(instructions) {
    let instArr = instructions.split("");
    instArr.forEach(inst => {
      if (inst == "L") {
        this.turnLeft();
      } else if (inst == "R") {
        this.turnRight();
      } else if (inst == "A") {
        this.advance();
      }
    });
  }
}
