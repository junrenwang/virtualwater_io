// This is where all the data is that no other player needs to know about

class playerConfig{
    constructor(settings){
        this.xVector = 0;
        this.yVector = 0;
        this.speed = settings.defaultSpeed;
        this.zoom = settings.defaultZoom;
        this.status = "on";
    }
}

module.exports = playerConfig;