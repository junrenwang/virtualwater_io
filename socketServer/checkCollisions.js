const checkForItemCollisions = (pData,pConfig, items, currentorder)=>{

    //ORB COLLISIONS
    let serve = false;
    for (let i = 0; i < items.length; i++){
        const item = items[i];
    // AABB Test(square)  - Axis-aligned bounding boxes
        if(pData.locX + pData.radius + item.radius > item.locX 
            && pData.locX < item.locX + pData.radius + item.radius
            && pData.locY + pData.radius + item.radius > item.locY 
            && pData.locY < item.locY + pData.radius + item.radius){
        // Pythagoras test(circle)
            distance = Math.sqrt(
                ((pData.locX - item.locX) * (pData.locX - item.locX)) + 
                ((pData.locY - item.locY) * (pData.locY - item.locY))	
                );
            if(distance < pData.radius + item.radius){
        //COLLISION!!!
                //check whether the wcUser >wcItem
                if(pData.wc < item.wc){
                    pConfig.status = "off"
                    pData.wc = 0
                    pData.locX = 0
                    pData.locY = 0
                    pData.instruct = "Run out of water."
                    
                }
                else if(pData.wc == item.wc){
                    pConfig.status = "off"
                    pData.wc = 0
                    pData.locX = 0
                    pData.locY = 0
                    if(item.category == currentorder.category){
                        pData.score++;
                        serve = true;
                        pData.instruct = "brilliant!"
                    }
                    else{
                        pData.instruct = "Wrong Item!"
                    }
                    pData.instruct = "Run out of water."
                }
                else{
                    pData.wc = pData.wc-item.wc;
                    if(item.category == currentorder.category){
                        pData.score++;
                        // currentorder = new orderClass(settings)
                        serve = true;
                        pData.instruct = "Brilliant!"
             
                    }
                    else{
                        pData.instruct = "Wrong Item!"
                    }


                }
                // can't hit more than one orb on a tock so break and return
                return {capturedItemI: i, fillorderstatus: serve};
                break;
            }
        }
    };
    return {capturedItemI: null, fillorderstatus: serve}
}
        



module.exports = {checkForItemCollisions}
