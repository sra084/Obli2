'use strict';
import {BaseShape} from './BaseShape.js';
/**
 * Setter this.positions & this.colors.
 * Tegnes vha. gl.TRIANGLE_FAN
 */
export class Cylinder1 extends BaseShape {
    constructor(app, color = {red:0.8, green:0.1, blue:0.6, alpha:1}, sectors=36) {
        super(app);
        this.color = color;
        this.sectors = sectors;
    }

    createVertices() {
        super.createVertices();

        let toPI = 2*Math.PI;
        this.positions = [];
        this.colors = [];
        let stepGrader = 360 / this.sectors;
        let step = (Math.PI / 180) * stepGrader;
        let r=60, g=60, b=60, a=0;
        let hoyde = 4; //Høyden på sylinderen

        // Startpunkt:
        let x=0, y=0, z=0;
        let next_x=x, next_z=z;
        let next_phi=0;
        this.colors = this.colors.concat(r,g,b,a);
        for (let phi = 0.0; phi <= toPI; phi += step)
        {
            x = Math.cos(phi);
            y = 0;
            z = Math.sin(phi);

            next_phi = phi + step;
            next_x = Math.cos(next_phi);
            next_z = Math.sin(next_phi);

            //Ytterside
            this.positions = this.positions.concat(x,y,z);
            this.positions = this.positions.concat(x,y+hoyde,z);
            this.positions = this.positions.concat(next_x,y,next_z);
            this.positions = this.positions.concat(x,y,z);

            this.positions = this.positions.concat(x,y+hoyde,z);
            this.positions = this.positions.concat(next_x,y+hoyde,next_z);
            this.positions = this.positions.concat(next_x,y,next_z);
            this.positions = this.positions.concat(x,y+hoyde,z);

            //Topp
            this.positions = this.positions.concat(x,y+hoyde,z);
            this.positions = this.positions.concat(next_x,y+hoyde, next_z);
            this.positions = this.positions.concat(0,y+hoyde,0);
            this.positions = this.positions.concat(x,y+hoyde,z);

            //Bunn
            this.positions = this.positions.concat(x,y,z);
            this.positions = this.positions.concat(next_x, y, next_z);
            this.positions = this.positions.concat(0,y,0);
            this.positions = this.positions.concat(x,y,z);


            //Ytterside
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);

            //Topp
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);

            //Bunn
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);
            this.colors = this.colors.concat(r,g,b,a);

        }
    }

    draw(shaderInfo, elapsed, modelMatrix = (new Matrix4()).setIdentity()) {
        super.draw(shaderInfo, elapsed, modelMatrix);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.vertexCount);
    }
}
