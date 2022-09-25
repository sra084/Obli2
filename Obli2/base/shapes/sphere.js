
'use strict';
import {BaseShape} from './BaseShape.js';
/**
 * Setter this.positions & this.colors.
 * Tegnes vha. gl.TRIANGLE_FAN
 */
export class Cone extends BaseShape {
    constructor(app, color = {red:0.8, green:0.1, blue:0.6, alpha:1}, sectors=36) {
        super(app);
        this.color = color;
        this.sectors = sectors;
    }

    createVertices() {
        super.createVertices();


        let positions = [];
        let colors = [];
        let indices = [];

// Basert på kode fra: http://learningwebgl.com/blog/?p=1253
        let radius = 5;
        let r = 0.2, g = 0.2, b = 0.5, a = 1;
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

                positions.push(radius * x);
                positions.push(radius * y);
                positions.push(radius * z);

                colors.push(r);
                colors.push(g);
                colors.push(b);
                colors.push(a);
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

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        const colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

//Indeksbuffer: oppretter, binder og skriver data til bufret:
        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        return {
            position: positionBuffer,
            color: colorBuffer,
            index: indexBuffer,
            vertexCount: positions.length / 3,
            indexCount: indices.length
        }}
