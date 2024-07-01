class Canvas {
    constructor(tag="canvas", attributes) {
        this.tag = tag;
        this.attributes = attributes;
    }
    createElement() {
        this.element = document.createElement(this.tag);
        if (this.attributes != null) {
            for (let element in this.attributes) {
                this.element.setAttribute(element,this.attributes[element]);
            }
        }
        return this.element;
    }
    printElement(pos) {
        let a = document.getElementById(pos["parentId"]);
        a.insertAdjacentHTML(pos["position"], this.element.outerHTML);
    }
    crearContext(canvasId) {
        let canvas = document.getElementById(canvasId);
        let ctx = canvas.getContext('2d');
        return ctx;
    }
    dibuixarImatge(ctx, imgSrc) {
        let image = new Image();
        image.onload = function () {
            ctx.drawImage(image,0,0, 640, 360);
        };
        image.src = imgSrc;
    }
}

class Filtre {
    constructor (canvas) {
        this.canvas = canvas;
    };
  
    transforma () {
        console.error("Para transformar el canvas, debe llamar a una clase hija de Filtro para el filtro deseado.");
    }
  };
  
  class Enfosquir extends Filtre {
    transforma (rangeValue, imgButton2) {
      // S'ha de reÃ³rrer l'array que representa els pixels del canvas
      // A cada pixel (4 posicions) se li suma el valor agafat
      // del <input typus="range">, si Ã©s negatiu enfosqueix i positiu aclareix
      var img = new Image();
      img.src = imgButton2;
      
      var canvas = document.getElementById('canvas2');
      var ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0, 640, 360);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      

      ctx.putImageData(imageData, 0, 0);
      
      console.log("#enfosquir_range value: "+rangeValue);
  
    };
  }
  
  class Grisos extends Filtre {
    transforma (imgButton2) {
      // Es fa la mitja dels valors de les tres primeres posicions
      // de cada pixel i aquest Ã©s el valor de cada pixel
      var img = new Image();
      img.src = imgButton2;
      
      var canvas = document.getElementById('canvas2');
      var ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0, 640, 360);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
      }
      ctx.putImageData(imageData, 0, 0);
    }
  };
  
  class Negatiu extends Filtre {
    transforma (imgButton2) {
      // El nou valor de cada element del pixel Ã©s 255 menys el valor inicial
      var img = new Image();
      img.src = imgButton2;
      
      var canvas = document.getElementById('canvas2');
      var ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0, 640, 360);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
      }
      ctx.putImageData(imageData, 0, 0);
    }
  };
  class FlipHoritzontal extends Filtre {
    transforma (imgButton2) {
      // El veurem a classe
      var img = new Image();
      img.src = imgButton2;
      
      var canvas = document.getElementById('canvas2');
      var ctx = canvas.getContext('2d');

      ctx.scale(-6.5, 3.6);
      ctx.drawImage(img, 0, 0, 640*3, 360*3, -100+0,0,100,100);
    }
  };

export{Canvas, Filtre, Enfosquir, Grisos, Negatiu, FlipHoritzontal};