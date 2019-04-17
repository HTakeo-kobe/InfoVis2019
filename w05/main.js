function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var vertices = [
        [-1, 1, -1], 
        [-1,-1, -1], 
        [ 1,-1, -1],
        [ 1, 1, -1],
        [-1, 1, 1], 
        [-1,-1, 1], 
        [ 1,-1, 1],
        [ 1, 1, 1]
    ];
    var faces = [
        [0,2,1],
        [0,3,2],
        [4,1,5],
        [4,0,1],
        [7,5,6],
        [7,4,5],
        [3,6,2],
        [3,7,6],
        [4,3,0],
        [4,7,3],
        [5,2,1],
        [5,6,2]
    ];

    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );
    
    var f00 = new THREE.Face3( faces[0][0], faces[0][1], faces[0][2] );
    var f01 = new THREE.Face3( faces[1][0], faces[1][1], faces[1][2] );
    var f10 = new THREE.Face3( faces[2][0], faces[2][1], faces[2][2] );
    var f11 = new THREE.Face3( faces[3][0], faces[3][1], faces[3][2] );
    var f20 = new THREE.Face3( faces[4][0], faces[4][1], faces[4][2] );
    var f21 = new THREE.Face3( faces[5][0], faces[5][1], faces[5][2] );
    var f30 = new THREE.Face3( faces[6][0], faces[6][1], faces[6][2] );
    var f31 = new THREE.Face3( faces[7][0], faces[7][1], faces[7][2] );
    var f40 = new THREE.Face3( faces[8][0], faces[8][1], faces[8][2] );
    var f41 = new THREE.Face3( faces[9][0], faces[9][1], faces[9][2] );
    var f50 = new THREE.Face3( faces[10][0], faces[10][1], faces[10][2] );
    var f51 = new THREE.Face3( faces[11][0], faces[11][1], faces[11][2] );

    var geometry = new THREE.Geometry();
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.vertices.push( v6 );
    geometry.vertices.push( v7 );
    geometry.faces.push( f00 );
    geometry.faces.push( f01 );
    geometry.faces.push( f10 );
    geometry.faces.push( f11 );
    geometry.faces.push( f20 );
    geometry.faces.push( f21 );
    geometry.faces.push( f30 );
    geometry.faces.push( f31 );
    geometry.faces.push( f40 );
    geometry.faces.push( f41 );
    geometry.faces.push( f50 );
    geometry.faces.push( f51 );

    geometry.computeFaceNormals();

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    
    var material = new THREE.MeshBasicMaterial({
        color: 0x00FF00
        });
    material.vertexColors = THREE.FaceColors;
    material.side = THREE.DoubleSide

    material.vertexColors = THREE.VertexColors;
    geometry.faces[0].vertexColors.push(new THREE.Color(1,0,0));
    geometry.faces[0].vertexColors.push(new THREE.Color(0,1,0));
    geometry.faces[0].vertexColors.push(new THREE.Color(0,0,1));

    var light = new THREE.PointLight( 0xffffff );
    light.position.set( 5,5,5 );
    scene.add( light );

    var cube = new THREE.Mesh( geometry, material );
    
    scene.add( cube );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        renderer.render( scene, camera );
    }
}
