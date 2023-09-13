const io = require('../servers').io;
const app = require('../servers').app;


//================CLASSES================
const playerClass = require('../models/player');
const playerConfigClass = require('../models/playerConfig');
const playerDataClass = require('../models/playerData');
const itemClass = require('../models/item');
const orderClass = require('../models/order');
//=======================================


//================Check================

const checkForItemCollisions = require('./checkCollisions').checkForItemCollisions;

//=======================================

//make an orbs array that will host all 500/5000 NOT PLAYER orbs.
//every time one is absorb, the server will make a new one

const items = [];
const settings = {
    defaultNumberOfOrbs: 100, //number of orbs on the map
    defaultSpeed: 6, //player speed
    defaultSize: 6, //default player speed
    defaultZoom: 1.5, // as the player gets bigger, zoom needs to go out
    worldWidth: 5000,
    worldHeight: 5000,
    defaultGenericOrbSize: 5, //smaller than player orbs
    orderDuration: 15
}
const players = [];
const playersForUsers = [];
let tickTockInterval;
let currentorder;

initGame()

io.on('connect',(socket)=>{
    // a player has connected
    let player = {};
    socket.on('init',(playerObj,ackCallback)=>{

        if(players.length === 0){ //someone is about to be added to players. Start tick-tocking
            //tick-tock - issue an event to EVERY connected socket, that is playing the game, 30 times per second
            tickTockInterval = setInterval(()=>{
                currentorder.duration = currentorder.duration-33/1000
                if(currentorder.duration<0){
                    currentorder = new orderClass(settings);
                }
                io.to('game').emit('tick',playersForUsers, currentorder) // send the event to the "game" room
                
            },33) //1000/30 = 33.33333, there are 33, 30's in 1000 milliseconds, 1/30th of a second, or 1 of 30fps 
        }
        
        socket.join('game'); //add this socket to "game" room
        //event that runs on join that does init game stuff
        // make a playerConfig object - the data specific to this player that only the player needs to know
        const playerName = playerObj.playerName;
        const playerConfig = new playerConfigClass(settings);
        const playerData = new playerDataClass(playerName,settings)
        player = new playerClass(socket.id,playerConfig,playerData);
        players.push(player); //server use only
        playersForUsers.push({playerData})
        // make a playerData object - the data specific to this player that everyone needs to know
        // a master player object to house both    
        ackCallback({items, currentorder, indexInPlayers:playersForUsers.length-1}) //send the orbs array back as an ack function!
    })

    //the client sent over a tock!
    socket.on('tock',(data)=>{
        //a tock has come in before the player is set up.
        //this is because the client kept tocking after disconnect
        if(!player.playerConfig){
            return;
        }
        speed = player.playerConfig.speed;
        const xV = player.playerConfig.xVector = data.xVector;
        const yV = player.playerConfig.yVector = data.yVector;

        //if player can move in the x, move
        if((player.playerData.locX > 5 && xV < 0) || (player.playerData.locX < settings.worldWidth) && (xV > 0)){
            if (player.playerConfig.status == "on")player.playerData.locX += speed * xV;
        }
        //if player can move in the y, move
        if((player.playerData.locY > 5 && yV > 0) || (player.playerData.locY < settings.worldHeight) && (yV < 0)){
            if(player.playerConfig.status == "on")player.playerData.locY -= speed * yV;
        }  

        //check for the tocking player to hit items
        const {capturedItemI, fillorderstatus}= checkForItemCollisions(player.playerData,player.playerConfig,items,currentorder);
        //function returns null if not collision, an index if there is a collision
        if(capturedItemI !== null){ //index could be 0, so check !null
            //remove the orb that needs to be replaced (at capturedOrbI)
            //add a new Orb
            items.splice(capturedItemI,1,new itemClass(settings));
            //now update the clients with the new orb
            const itemData = {
                capturedItemI,
                newItem: items[capturedItemI],
            }
            //emit to all sockets playing the game, the orbSwitch event so it can update orbs... just the new orb
            
            io.to('game').emit('itemSwitch',itemData);
            if(fillorderstatus){
                currentorder = new orderClass(settings);
                io.to('game').emit('updateOrder', currentorder);
            }
            
            //emit to all sockets playing the game, the updateLeaderBoard event because someone just scored
            io.to('game').emit('updateLeaderBoard',getLeaderBoard());

        }



    })

    socket.on('disconnect',(reason)=>{
        // console.log(reason)
        //loop through players and find the player with THIS players socketId
        //and splice that player out
        for(let i = 0; i < players.length; i++){
            if(players[i].socketId === player.socketId){
                //these are the droids we're looking for
                //splice the player out of the players AND playersForUsers
                players.splice(i,1,{})
                playersForUsers.splice(i,1,{})
                break;
            }
        }
        //check to see if players is empty. If so, stop "ticking"
        if(players.length === 0){
            clearInterval(tickTockInterval)
        }
    });
})






function initGame(){
    //loop defaultNumberOfOrbs times, and push a new Orb() onto our array
    for(let i = 0; i < settings.defaultNumberOfOrbs; i++){
        items.push(new itemClass(settings));
    }
    currentorder = new orderClass(settings)
}

function getLeaderBoard(){
    const leaderBoardArray = players.map(curPlayer=>{
        if(curPlayer.playerData){
            return{
                name: curPlayer.playerData.name,
                score: curPlayer.playerData.score,
                wc: curPlayer.playerData.wc,
                instruct: curPlayer.playerData.instruct
            }
        }else{
            return {}
        }
    })
    return leaderBoardArray;
}

