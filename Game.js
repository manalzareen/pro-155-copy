AFRAME.registerComponent("game-play",{
    schema:{
        eId:{type:"string",default:"#coins"}
    },
    IsCollide:function(new_eId){
        const element=document.querySelector(new_eId)
        element.addEventListener("collide",(e) => {
            if(new_eId.includes("coins")){
                console.log(new_eId + "collision")
            }
            else if(new_eId.includes("water-fishes")){
                console.log("fish has been collided")
            }


        })
    }
})