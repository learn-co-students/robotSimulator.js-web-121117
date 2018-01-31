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
        this.setBearing('east');
        break;
      case 'east':
        this.setBearing('south');
        break;
      case 'south':
        this.setBearing('west');
        break;
      case 'west':
        this.setBearing('north');
        break;
    }
  }

  turnLeft(){
    switch(this.bearing){
      case 'north':
        this.setBearing('west');
        break;
      case 'east':
        this.setBearing('north');
        break;
      case 'south':
        this.setBearing('east');
        break;
      case 'west':
        this.setBearing('south');
        break;
    }
  }

  advance(){
    switch(this.bearing){
      case 'north':
        this.coordinates[1]++;
        break;
      case 'east':
        this.coordinates[0]++;
        break;
      case 'south':
        this.coordinates[1]--;
        break;
      case 'west':
        this.coordinates[0]--;
        break;
    }
  }

  translateInstructions(commands){
    let letters = commands.split('')
    letters.forEach(command => {
      switch(command){
        case 'R':
          this.turnRight();
          break;
        case 'L':
          this.turnLeft();
          break;
        case 'A':
          this.advance()
          break;
      }
    })
  }
}
