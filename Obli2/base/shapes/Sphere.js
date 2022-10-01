'use strict';
import {BaseShape} from './BaseShape.js';



/**
 * Setter this.positions, this.colors for en kube.
 * Tegnes vha. gl.LINE_STRIP eller gl.TRIANGLES.
 */
export class Sphere extends BaseShape {
    constructor(app, color = {red: 1, green: 0.8, blue: 0, alpha: 1}, sectors = 36) {
        super(app);
        this.color = color;
        this.sectors = sectors;
    }
//(red: 1, green: 0.8, blue: 0, alpha: 1.0)


    createVertices() {
        this.positions = [];
        this.colors = [];
        let indices = [];





        // Basert på kode fra: http://learningwebgl.com/blog/?p=1253
        let radius = 1;
        let r=0.2,g=0.2,b=0.5,a=0.1;
        let latitudeBands = 30;     //latitude: parallellt med ekvator.
        let longitudeBands = 30;    //longitude: går fra nord- til sydpolen.





        //Genererer vertekser:
        for (let latNumber = 0; latNumber <= latitudeBands; latNumber++) {
            let theta = latNumber * Math.PI / latitudeBands;
            let sinTheta = Math.sin(theta);
            let cosTheta = Math.cos(theta);

            for (let longNumber = 0; longNumber <= longitudeBands; longNumber++) {
                let phi = longNumber * 2 * Math.PI / longitudeBands;
                let sinPhi = Math.sin(phi);
                let cosPhi = Math.cos(phi);


                let x = cosPhi * sinTheta;
                let y = cosTheta;
                let z = sinPhi * sinTheta;

                this.positions.push(radius * x);
                this.positions.push(radius * y);
                this.positions.push(radius * z);


                this.colors.push(r);
                this.colors.push(g);
                this.colors.push(b);
                this.colors.push(a);
            }
        }





        //Genererer indeksdata for å knytte sammen verteksene:
        for (let latNumber = 0; latNumber < latitudeBands; latNumber++) {
            for (let longNumber = 0; longNumber < longitudeBands; longNumber++) {
                let first = (latNumber * (longitudeBands + 1)) + longNumber;
                let second = first + longitudeBands + 1;
                indices.push(first);
                indices.push(second);
                indices.push(first + 1);





                indices.push(second);
                indices.push(second + 1);
                indices.push(first + 1);



            }
        }
    }



    handleKeys(elapsed) {
        // implementeres ved behov
    }



    draw(shaderInfo, elapsed, modelMatrix = (new Matrix4()).setIdentity()) {
        super.draw(shaderInfo, elapsed, modelMatrix);
        this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, this.vertexCount);




    }
}