import * as THREE from 'three';
import { octave } from './Utilities';

class NoiseTerrain {

    constructor() {
      this.canvas;
      this.context;

      this.generateTexture();
      this.createPlaneGeometry();
    }

    createPlaneGeometry() {
      const imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      const data = imgData.data;

      console.log(data);
    }

    generateTexture() {
      this.canvas = document.getElementById('debug-canvas')
      this.context = this.canvas.getContext('2d')

      const canvas = this.canvas;
      const c = this.context;

      c.fillStyle = 'black'
      c.fillRect(0,0,canvas.width, canvas.height)
      for(let i=0; i<canvas.width; i++) {
          for(let j=0; j<canvas.height; j++) {
              let v =  octave(i/canvas.width,j/canvas.height,16)
              const per = (100*v).toFixed(2)+'%'
              c.fillStyle = `rgb(${per},${per},${per})`
              c.fillRect(i,j,1,1)
          }
      }
      return c.getImageData(0,0,canvas.width,canvas.height)

    }
}

export default NoiseTerrain;