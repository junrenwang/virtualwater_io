// This is where all the data that EVERYONE needs to know about everyone else

class playerData{
    constructor(playerName,settings){
        this.name = playerName;
        this.locX = Math.floor(settings.worldWidth * Math.random() + 10); // horizontal axis
        this.locY = Math.floor(settings.worldHeight * Math.random() + 10); // vertical axis
        this.radius = settings.defaultSize;
        this.color = this.getRandomColor();
        this.score = 0;
        this.wc = 50;
        this.instruct = "Let's start!"
        
    }

    getRandomColor(){
        const r = Math.floor((Math.random() * 200) + 50)
        const g = Math.floor((Math.random() * 200) + 50)
        const b = Math.floor((Math.random() * 200) + 50)
        //rbg(112,243,59)
        return `rgb(${r},${g},${b})`
    }

}

module.exports = playerData;