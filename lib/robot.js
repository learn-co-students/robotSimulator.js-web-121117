class Robot {

  constructor(){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(bearing){
    switch(bearing){
      case "north":
      case "south":
      case "east":
      case "west":
        this.bearing = bearing;
        break;
      default:
        throw Error('Invalid Robot Bearing');
        break;
    }
  }

  place(args){
    this.setCoordinates(args.x, args.y);
    this.setBearing(args.direction);
  }

  turnRight(){
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }

  turnLeft(){
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'west':
        this.bearing = 'south'
        break;
    }
  }

  advance(){
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break;
      case 'east':
        this.coordinates[0] += 1
        break;
      case 'south':
        this.coordinates[1] -= 1
        break;
      case 'west':
        this.coordinates[0] -= 1
        break;
    }
  }

  translateInstructions(instructions){
    instructions.split('').forEach((instruction) => {
      switch (instruction){
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'A':
          this.advance()
          break;
      }
    })
  }
}
