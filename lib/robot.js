class Robot {
  constructor(){
    this.coordinates = [0, 0]
    this.bearing = "north"
  }

  setCoordinates(x, y){
    return this.coordinates = [x, y];
  }

  setBearing(bearing){
    const directions = ["north","east","south","west"]
    if (directions.includes(bearing)){
      return this.bearing = bearing;
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(options){
    this.setCoordinates(options.x, options.y);
    this.setBearing(options.direction);
    return this
  }

  turnRight(){
    const directions = ["north","east","south","west"]
    const currIdx = directions.indexOf(this.bearing)
    if (currIdx === (directions.length - 1)){
      this.setBearing(directions[0])
    } else {
      this.setBearing(directions[currIdx + 1])
    }
  }

  turnLeft(){
    const directions = ["west","south","east","north"]
    const currIdx = directions.indexOf(this.bearing)
    if (currIdx === (directions.length - 1)){
      this.setBearing(directions[0])
    } else {
      this.setBearing(directions[currIdx + 1])
    }
  }

  advance(){
    let x = this.coordinates[0];
    let y = this.coordinates[1];

    if (this.bearing === "north"){
      return this.setCoordinates(x, ++y)
    } else if (this.bearing === "east"){
      return this.setCoordinates(++x, y)
    } else if (this.bearing === "south"){
      return this.setCoordinates(x, --y)
    } else if (this.bearing === "west"){
      return this.setCoordinates(--x, y)
    }
  };

  translateInstructions(instructions){
    let path = instructions.split("")
    console.log(path)
    for (const dir of path){
      if (dir === "L"){
        this.turnLeft();
      } else if (dir === "R"){
        this.turnRight();
      } else if (dir === "A"){
        this.advance();
      };
    }
    return this;
  }
};
