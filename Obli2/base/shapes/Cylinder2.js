


function initCylinderBuffers(gl) {
    let toPI = 2 * Math.PI;
    let positions = [];
    let colors = [];
    let stepGrader = 360 / 100;
    let step = (Math.PI / 180) * stepGrader;



    let x = 4, y = 0, z = 1;
    let xx = 6, yy = 0, zz = 1;
    let r = 1, g = 0, b = 0, a = 1;
    positions = positions.concat(x, y, z);
    colors = colors.concat(r, g, b, a)
    positions = positions.concat(xx, yy, zz);
    colors = colors.concat(r, g, b, a)



    // first cylinder
    for (let phi = 0.0; phi <= toPI; phi += step) {
        x = 0;
        y = Math.sin(phi);
        z = Math.cos(phi);



        xx = 4;
        yy = Math.sin(phi);
        zz = Math.cos(phi)



        positions = positions.concat(x, y, z);
        colors = colors.concat(r, g, b, a)
        positions = positions.concat(xx, yy, zz);
        colors = colors.concat(0, 1, 0, a)
    }



    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);



    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);



    return {
        position: positionBuffer,
        color: colorBuffer,
        vertexCount: positions.length / 3
    };
}
function drawCylinder(webGLCanvas, renderInfo, camera) {
    connectPositionAttribute(renderInfo.gl, renderInfo.baseShaderInfo, renderInfo.cylinderBuffers.position);
    connectColorAttribute(renderInfo.gl, renderInfo.baseShaderInfo, renderInfo.cylinderBuffers.color);



    // Lag viewmodel-matrisa:
    let modelMatrix = new Matrix4();
    modelMatrix.setIdentity();
    modelMatrix.rotate(renderInfo.cylinderAnimation.angle, 1, 0, 0)
    camera.set();



    //let cameraMatrixes = initCameraOne(renderInfo.gl);
    let modelviewMatrix = new Matrix4(camera.viewMatrix.multiply(modelMatrix)); // NB! rekkefølge!
    modelviewMatrix.translate(-4, 3, 3)
    modelviewMatrix.rotate(90, 100, 0, 40)



    // Send matrisene til shaderen:
    renderInfo.gl.uniformMatrix4fv(renderInfo.baseShaderInfo.uniformLocations.modelViewMatrix, false, modelviewMatrix.elements);
    renderInfo.gl.uniformMatrix4fv(renderInfo.baseShaderInfo.uniformLocations.projectionMatrix, false, camera.projectionMatrix.elements);



    // Tegn!
    renderInfo.gl.drawArrays(renderInfo.gl.TRIANGLE_STRIP, 0, renderInfo.cylinderBuffers.vertexCount);
}