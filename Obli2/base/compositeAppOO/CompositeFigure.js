'use strict';
/*
    buffer og draw for PaperMan
*/
import {Stack} from '../../base/helpers/Stack.js';

import {Cylinder} from '../../base/shapes/Cylinder.js';
import {Sphere} from '../shapes/Sphere.js';

/**
 * Klasse som implementerer en sammensatt figur.
 */
export class CompositeFigure {

    constructor(app) {
        this.app = app;

        this.stack = new Stack();

        this.cylinder = new Cylinder(app);
        this.cylinder.initBuffers();

        this.sphere = new Sphere(app);
        this.sphere.initBuffers();

        this.translationX = 0;
    }

    handleKeys(elapsed) {
        // Dersom ev. del-figur skal animeres håndterer den det selv.
        //this.cone.handleKeys(elapsed);
        // Flytter hele figuren:
        if (this.app.currentlyPressedKeys[89]) {    //Y
            this.translationX = this.translationX + 1*elapsed;
        }
        if (this.app.currentlyPressedKeys[85]) {    //U
            this.translationX = this.translationX - 1*elapsed;
        }
    }

    //MERK: Kaller ikke super.draw() siden klassen ikke arver fra BaseShape:
    draw(shaderInfo, elapsed, modelMatrix = new Matrix4()) {
        modelMatrix.setIdentity();
        modelMatrix.translate(this.translationX, 0, 0);
        this.stack.pushMatrix(modelMatrix);	 	//Legges på toppen av stacken.

        //modelMatrix.translate(-9.5, -0.2, 0); EKSEMPEL
        //modelMatrix.rotate(-45, 0, 0, 1);     EKSEMPEL
        //modelMatrix.scale(4.2,0.4,1.8);       EKSEMPEL

        // Tegner diverse:




        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 1, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 1, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 3.3, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-1, 3.3, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);



        //Stag 2
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-1, 1, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 1, 1)
        modelMatrix.rotate(40, 1, 1, 20)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-1, 3.3, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 3.3, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);




        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 3, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 3, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

//kule

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-1, 3.3, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 3.3, 1)
        modelMatrix.rotate(40, 1, 1, 20)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-1, 5.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 5.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 5.5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

//kule

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-1, 5.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 5.5, 1)
        modelMatrix.rotate(40, 1, 1, 20)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-1, 5.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)
























        //Tømmer stacken ...:
        this.stack.empty();
    }
}


