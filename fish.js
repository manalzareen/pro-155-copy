AFRAME.registerComponent("water-fishes", {
    init: function () {
         for (i = 1; i <= 20; i++) {
              var id = `fish${i}`

              var posX = (Math.random() * 300 + (-100));
              var posY = (Math.random() * 2 + (-1));
              var posZ = (Math.random() * 300 + -100);

              var position = { x: posX, y: posY, z: posZ };
      
              this.waterfish(id,position)

         }
    },
    waterfish: (id, position) => {

         var islandEl = document.querySelector("#island");
         var fishEl = document.createElement("a-entity");
         fishEl.setAttribute("gltf-model", "./assets/models/orange_fish/scene.gltf");

         fishEl.setAttribute("animation-mixer", {})          
         fishEl.setAttribute("id",id)
         fishEl.setAttribute("position",position)
         fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
         fishEl.setAttribute("static-body",{shape:"box",boxRadius:"2"})

         fishEl.setAttribute("game-play",{
          eId:`#${id}`
         })

         islandEl.appendChild(fishEl)


    }
})