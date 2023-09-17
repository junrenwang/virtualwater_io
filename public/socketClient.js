const socket = io.connect('http://localhost:9000');
// const socket = io.connect();
const init = async()=>{
    //init is called inside of start-game click listener
    const initData = await socket.emitWithAck('init',{
        playerName: player.name,
        roomName: player.room
    }) 
    //our await has resolved, so start 'tocking'
    setInterval(async()=>{
        socket.emit('tock',{
            xVector: player.xVector ? player.xVector : .1,
            yVector: player.yVector ? player.yVector : .1,
        })
    },33)

    items = initData.items; 
    player.indexInPlayers = initData.indexInPlayers;   

    
    draw(); //draw function is in canvasStuff
}



   //the server sends out the location/data of all players 30/second and the order condition
socket.on('tick',(playersArray, currentOrder)=>{

    players = playersArray;
    if(players[player.indexInPlayers].playerData){
        player.locX = players[player.indexInPlayers].playerData.locX
        player.locY = players[player.indexInPlayers].playerData.locY
    }
    orderShow = currentOrder;
    document.getElementById('order').style.color = orderShow.color;
    document.getElementById('order').innerHTML = "I want "+ orderShow.category +" in "+Math.ceil(orderShow.duration)+" sec."
})

socket.on('itemSwitch',itemData=>{
    //the server just told us that an orb was absorbed. Replace it in the orbs array!
    items.splice(itemData.capturedItemI,1,itemData.newItem);
})

socket.on('updateOrder',currentorder=>{
    //the server just told us that an orb was absorbed. Replace it in the orbs array!
    orderShow = currentorder;
})



socket.on('updateLeaderBoard',leaderBoardArray=>{
    // if anyone firstly finish 10 orders or all people run out of water show the winner page

    leaderBoardArray.forEach(p=>{
        if(p.score== 10){
            spawnModal.show();
        }
    })
 
    if (document.getElementById("sort-order").classList.contains('active')){
        leaderBoardArray.sort((a,b)=>{
            return b.score - a.score;
        })
        document.querySelector('.leader-board').innerHTML = "";
        leaderBoardArray.forEach(p=>{
            if(!p.name){
                return;
            }
            document.querySelector('.leader-board').innerHTML += `
                <li class="leaderboard-player">${p.name} - ${p.score}</li>
            `
        })
    }
    if (document.getElementById("sort-wc").classList.contains('active')){
        leaderBoardArray.sort((a,b)=>{
            return b.wc - a.wc;
        })
        document.querySelector('.leader-board').innerHTML = "";
        leaderBoardArray.forEach(p=>{
            if(!p.name){
                return;
            }
            document.querySelector('.leader-board').innerHTML += `
                <li class="leaderboard-player">${p.name} - ${(p.wc).toFixed(2)}</li>
            `
        })
    }
    
  

    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(option => {
        option.addEventListener('click', function() {
            // First, remove the 'active' class from all options
            sortOptions.forEach(opt => {
                opt.classList.remove('active');
            });
    
            // Add 'active' class to the clicked option
            this.classList.add('active');

            if (this.id == "sort-order"){
                leaderBoardArray.sort((a,b)=>{
                    return b.score - a.score;
                })
            
                document.querySelector('.leader-board').innerHTML = "";
                leaderBoardArray.forEach(p=>{
                    if(!p.name){
                        return;
                    }
                    document.querySelector('.leader-board').innerHTML += `
                        <li class="leaderboard-player">${p.name} - ${p.score}</li>
                    `
                })
            }

            if (this.id == "sort-wc"){
                leaderBoardArray.sort((a,b)=>{
                    return b.wc - a.wc;
                })
            
                document.querySelector('.leader-board').innerHTML = "";
                leaderBoardArray.forEach(p=>{
                    if(!p.name){
                        return;
                    }
                    document.querySelector('.leader-board').innerHTML += `
                        <li class="leaderboard-player">${p.name} - ${(p.wc).toFixed(2)}</li>
                    `
                })
            }

        });
    });
    





    const el = leaderBoardArray.find(u=>u.name === player.name)
    document.querySelector('.player-score').innerHTML = el.score
    document.querySelector('.player-watercapacity').innerHTML = (el.wc).toFixed(2)
    document.querySelector('.progress-bar').style.width = (el.wc/50*100).toFixed(2) + "%";

    document.querySelector('#game-message').innerHTML = el.instruct
    document.querySelector('#game-message').style.opacity = 1;
    window.setTimeout(()=>{
        document.querySelector('#game-message').style.opacity = 0;
    },2000)
   

})

