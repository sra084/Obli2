'use strict';
/*
    buffer og draw for PaperMan
*/
import {Stack} from '../../base/helpers/Stack.js';

import {Cylinder1} from '../../base/shapes/Cylinder1.js';
import {Cylinder} from '../../base/shapes/Cylinder.js';
import {Sphere} from '../shapes/Sphere.js';
import {Cube} from '../../base/shapes/Cube.js';

/**
 * Klasse som implementerer en sammensatt figur.
 */
export class CompositeFigure {

    constructor(app) {
        this.app = app;

        this.stack = new Stack();

        this.cylinder = new Cylinder(app);
        this.cylinder.initBuffers();

        this.cylinder1 = new Cylinder1(app);
        this.cylinder1.initBuffers();

        this.sphere = new Sphere(app);
        this.sphere.initBuffers();

        this.cube = new Cube(app);
        this.cube.initBuffers();



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

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(0,4,0);
        this.cube.draw(shaderInfo, elapsed, modelMatrix);







        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 7.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 7.5, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);


        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 7.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 7.5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 7.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 10, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 10, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 10, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 10, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 12.5, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 10, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 12.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 12.5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 12.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 15, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);


        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 15, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 15, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 15, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 17.5, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 17.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 17.5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 17.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 20, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 20, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 20, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 20, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 22.5, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 20, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 22.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 22.5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 22.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)













        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 7.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 7.5, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);


        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 7.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 7.5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 7.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 10, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 10, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 10, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 10, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 12.5, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 10, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 12.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 12.5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 12.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 15, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);


        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 15, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 15, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 15, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 17.5, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 17.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 17.5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 17.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 20, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 20, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 20, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 20, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 22.5, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 20, 1)
        modelMatrix.scale(0.2, 0.2, 0.2);
        this.sphere.draw(shaderInfo, elapsed, modelMatrix);

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 22.5, 1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 22.5, -1)
        modelMatrix.rotate(40, 11, 1, 1)
        modelMatrix.scale(0.1, 0.75, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(2.5, 22.5, -1)
        modelMatrix.rotate(90, 11, 1, 1)
        modelMatrix.scale(0.1, 0.5, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)





        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(1, 5, -1)
        modelMatrix.scale(0.1, 0.6, 0.1)
        this.cylinder.draw(shaderInfo, elapsed, modelMatrix)
















































        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(8, 2.5, 4);
        modelMatrix.rotate(90, 1, 0, 0);
        modelMatrix.scale(3, 1, 3);
        this.cylinder1.draw(shaderInfo, elapsed, modelMatrix)



        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-8, 2.5, 4);
        modelMatrix.rotate(90, 1, 0, 0);
        modelMatrix.scale(3, 1, 3);
        this.cylinder1.draw(shaderInfo, elapsed, modelMatrix)


        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-8, 2.5, -8);
        modelMatrix.rotate(90, 1, 0, 0);
        modelMatrix.scale(3, 1, 3);
        this.cylinder1.draw(shaderInfo, elapsed, modelMatrix)

        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(8, 2.5, -8);
        modelMatrix.rotate(90, 1, 0, 0);
        modelMatrix.scale(3, 1, 3);
        this.cylinder1.draw(shaderInfo, elapsed, modelMatrix)












        //Tømmer stacken ...:
        this.stack.empty();
    }
}
