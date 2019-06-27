const directions = ["north", "east", "south", "west"];

class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing) {
    if (directions.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(coord) {
    this.setCoordinates(coord.x, coord.y);
    this.setBearing(coord.direction);
  }

  turnRight() {
    let newDirection = directions[(directions.indexOf(this.bearing) + 1) % 4];
    this.setBearing(newDirection);
  }

  turnLeft() {
    let newDirection = (directions.indexOf(this.bearing) - 1) % 4;
    if (newDirection < 0) {
      newDirection += 4;
    }
    this.setBearing(directions[newDirection]);
  }

  advance() {
    switch (this.bearing) {
      case "north": {
        this.coordinates[1] += 1;
        break;
      }
      case "east": {
        this.coordinates[0] += 1;
        break;
      }
      case "south": {
        this.coordinates[1] -= 1;
        break;
      }
      case "west": {
        this.coordinates[0] -= 1;
        break;
      }
    }
  }

  translateInstructions(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case "L": {
          this.turnLeft();
          break;
        }
        case "R": {
          this.turnRight();
          break;
        }
        case "A": {
          this.advance();
          break;
        }
      }
    }
  }
}
