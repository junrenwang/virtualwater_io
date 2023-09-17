
const itemList = require('./itemList');
class item{
    constructor(settings){
        const {label, category, wc, color, radius}  = this.getRandomItem()
        this.label = label
        this.category = category
        this.wc = (wc/1000).toFixed(2)
        this.color = color 
        this.radius = radius**1.5
        this.locX = Math.floor((Math.random()* (0.9 - 0.1) + 0.1) * settings.worldWidth)
        this.locY = Math.floor((Math.random()* (0.9 - 0.1) + 0.1)  * settings.worldHeight) 
    }

    getRandomItem(){
        const categoryColor = {
            "AGRICULTURAL PROCESSED": `rgb(230,97,1)`,
            "ANIMAL HUSBANDRY": `rgb(253,184,99)`,
            "CROPS": `rgb(178,171,210)`,
            "FISHING": `rgb(94,60,153)`
          };
        const randomNum = Math.floor(Math.random()*310)
        const label = itemList[randomNum].name
        const category = itemList[randomNum].category
        const wc = itemList[randomNum].wc
        const color = categoryColor[category]
        const radius = Math.ceil(Math.log(wc))
        return {label, category, wc, color, radius}
    }

}

module.exports = item;
