import * as THREE from 'three';
import { octave } from './Utilities';

class NoiseTerrain {

    constructor() {
      this.generateTexture();
    }

    generateTexture() {
      const canvas = document.getElementById('debug-canvas')
      const c = canvas.getContext('2d')
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