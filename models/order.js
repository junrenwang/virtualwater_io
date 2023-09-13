class order{
    constructor(settings){
        const {category, color} = this.getRandomCategory();
        this.category = category
        this.color = color
        this.duration = settings.orderDuration;
    }
    getRandomCategory(){
        const categoryColor = {
            "AGRICULTURAL PROCESSED": `rgb(230,97,1)`,
            "ANIMAL HUSBANDRY": `rgb(253,184,99)`,
            "CROPS": `rgb(178,171,210)`,
            "FISHING": `rgb(94,60,153)`
          };
        const randomNum = Math.floor(Math.random()*3);
        const category = Object.keys(categoryColor)[randomNum];
        const color = categoryColor[category];
        return {category, color}
    }
        

}

module.exports = order;