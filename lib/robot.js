class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  setCoordinates(value1, value2) {
    this.coordinates = [value1, value2];
  }

  setBearing(value) {
    if (value === 'north' || value ===  'south' || value === 'west' || value === 'east') {
      this.bearing = value;
    } else {
      throw new Error('Invalid Robot Bearing');
    }
  }

  place(hashValues) {
    let values = Object.values(hashValues);
    this.coordinates = [values[0], values[1]];
    this.bearing = values[2];
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.bearing = 'east';
    } else if (this.bearing === 'east') {
      this.bearing = 'south';
    } else if (this.bearing === 'south') {
      this.bearing = 'west'
    } else if (this.bearing === 'west') {
      this.bearing = 'north';
    } else {
      throw new Error('Invalid Robot Bearing');
    };
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.bearing = 'west';
    } else if (this.bearing === 'west') {
      this.bearing = 'south';
    } else if (this.bearing === 'south') {
      this.bearing = 'east'
    } else if (this.bearing === 'east') {
      this.bearing = 'north';
    } else {
      throw new Error('Invalid Robot Bearing');
    };
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates = [this.coordinates[0], this.coordinates[1] + 1];
    } else if (this.bearing === 'east') {
      this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]];
    } else if (this.bearing === 'south') {
      this.coordinates = [this.coordinates[0], this.coordinates[1] - 1];
    } else if (this.bearing === 'west') {
      this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]];
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  };

  translateInstructions(instructions) {
    let instArr = instructions.split("");
    instArr.forEach((command) => {
      if (command === 'L') {
        this.turnLeft(this.bearing);
      } else if (command === 'R') {
        this.turnRight(this.bearing);
      } else if (command === 'A') {
        this.advance(this.bearing);
      } else {
        throw new Error('Invalid Robot Translation');
      };
    })
  }
}
