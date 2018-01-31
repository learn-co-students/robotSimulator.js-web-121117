class Robot {
  constructor(){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x, y){
    this.coordinates[0] = x
    this.coordinates[1] = y
    return this.coordinates
  }

  setBearing(bearing){
    if(['north','east','west','south'].includes(bearing)){
      return this.bearing = bearing
    }else{
      throw "Invalid Robot Bearing"
    }
  }

  place(coordinates){
    this.coordinates[0] = coordinates.x;
    this.coordinates[1] = coordinates.y;
    this.bearing = coordinates.direction;
  }

  turnRight(){
    switch(this.bearing){
      case 'north':
        return this.bearing = 'east';
      case 'east':
        return this.bearing = 'south';
      case 'south':
        return this.bearing = 'west';
      case 'west':
        return this.bearing = 'north';
    }
  }

  turnLeft(){
    switch(this.bearing){
      case 'north':
        return this.bearing = 'west';
      case 'east':
        return this.bearing = 'north';
      case 'south':
        return this.bearing = 'east';
      case 'west':
        return this.bearing = 'south';
    }
  }

  advance(){
    switch(this.bearing){
      case 'north':
        return this.coordinates[1]++;
      case 'east':
        return this.coordinates[0]++;
      case 'south':
        return this.coordinates[1]--;
      case 'west':
        return this.coordinates[0]--;
    }
  }

  translateInstructions(commands){
    let letters = commands.split('')
    letters.forEach(command => {
      switch(command){
        case 'R':
          return this.turnRight();
        case 'L':
          return this.turnLeft();
        case 'A':
          return this.advance()
      }
    })
  }
}
