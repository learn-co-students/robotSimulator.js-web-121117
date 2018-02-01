const directions = ["north", "south", "east", "west"]

class Robot {
	constructor() {
		this.coordinates = [0,0]
		this.bearing = "north"
	}

	setCoordinates(x, y) {
		this.coordinates = [x,y]
	}

	setBearing(bearing){
		if (!directions.includes(bearing)) {
			throw "Invalid Robot Bearing"
		}
		this.bearing = bearing
	}

	place(placeObj) {
		this.setCoordinates(placeObj.x, placeObj.y)
		this.setBearing(placeObj.direction)
	}

	turnRight() {
		switch (this.bearing) {
			case "north":
				this.setBearing("east")
				break;
			case "east":
			this.setBearing("south")
			break
			case "south":
				this.setBearing("west")
				break;
			case "west":
			this.setBearing("north")
		}
	}

	turnLeft() {
		switch (this.bearing) {
			case "north":
				this.setBearing("west")
				break;
			case "east":
			this.setBearing("north")
			break
			case "south":
				this.setBearing("east")
				break;
			case "west":
				this.setBearing("south")
		}
	}

	advance() {
		switch (this.bearing) {
			case "north":
				this.setCoordinates(this.coordinates[0], ++this.coordinates[1])
				break
			case "east":
				this.setCoordinates(++this.coordinates[0], this.coordinates[1])
			break
			case "south":
				this.setCoordinates(this.coordinates[0], --this.coordinates[1])
				break
			case "west":
				this.setCoordinates(--this.coordinates[0], this.coordinates[1])
		}
	}

	translateInstructions(instructions) {
		let iArray = instructions.split("")
		iArray.forEach(instruction => {
			switch (instruction) {
				case "L":
					this.turnLeft()
					break
				case "R":
					this.turnRight()
					break
				case "A":
					this.advance()
			}
		});
	}
}

