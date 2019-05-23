import "./style.styl";
import "./jquery.firefly-0.7.min.js";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/jquery/dist/jquery.min.js";
import "./jquery.fullPage.min.js";
// import "../node_modules/three/build/three.js";
// import "../node_modules/three/build/three.min.js";
// import "./model-element";
// import "./three-obj-loader";

// import "./orbit";


$(function () {
    // $.firefly({
    //     color: '#fff',
    //     minPixel: 1,
    //     maxPixel: 4,
    //     total: 60,
    //     on: '#firefly',
    //     borderRadius: 50
    // });

    $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors: ['block0','block1', 'block2', 'block3', 'block4'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000,
            touchSensitivity: 5
        });
    });
});

// var camera, scene, renderer;
// var geometry, material, mesh;

// init();
// animate();

// function init() {

// 	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
// 	camera.position.z = 1;

// 	scene = new THREE.Scene();

// 	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
// 	material = new THREE.MeshNormalMaterial();

// 	mesh = new THREE.Mesh( geometry, material );
// 	scene.add( mesh );

// 	renderer = new THREE.WebGLRenderer( { antialias: true } );
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// 	document.body.appendChild( renderer.domElement );

// }

// function animate() {

// 	requestAnimationFrame( animate );

// 	mesh.rotation.x += 0.01;
// 	mesh.rotation.y += 0.02;

// 	renderer.render( scene, camera );

// }

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// var animate = function () {
//     requestAnimationFrame( animate );

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render( scene, camera );
// };

// animate();




        

