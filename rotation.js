
   //Plane rotation component
   AFRAME.registerComponent("dive-rotation", {
     schema: {
       speedOfRotation: { type: "number", default: 0 },
       speedOfAscent: { type: "number", default: 0 }
     },
     init: function () {
       window.addEventListener("keydown", (e) => {
   
         //get the data from the attributes
         this.data.speedOfRotation = this.el.getAttribute("rotation");      
         this.data.speedOfAscent = this.el.getAttribute("position");
   
         var diveRotation = this.data.speedOfRotation;      
         var divePosition = this.data.speedOfAscent;
   
         //control the attributes with the Arrow Keys
      
         if (e.key === "ArrowUp") {
          if (diveRotation.z < 20) {
            diveRotation.z += 0.5;
            this.el.setAttribute("rotation", diveRotation);
          }
          if (divePosition.y < 2) {
            divePosition.y += 0.01;
            this.el.setAttribute("position", divePosition);
          }
        }
         if (e.key === "ArrowDown") {
           if (diveRotation.z > -20) {
             diveRotation.z -= 0.8;
             this.el.setAttribute("rotation", diveRotation);
           }
           if (divePosition.y > -2) {
             divePosition.y -= 0.1;
             this.el.setAttribute("position", divePosition);
           }
         }
       });
     }
   });
   
   
   