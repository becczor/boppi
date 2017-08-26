var isStarted = false; 

var toggleAnimation = function() {
	// OnClick function for start button
	isStarted = !isStarted
	if (isStarted) {
		render();
	} 
}

// rendering loop
var render = function () {
	if (!isStarted) {
		return;
	}

	requestAnimationFrame( render );
	// Make vinyl spin
	vinylGround.rotation.z -= 0.02;
	renderer.render(scene, camera);
};

updatePosition = function(position) {
	// Called from render() when something should be moved
	//ground.position.x = position.x;
};

// Set up

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth *0.95, window.innerHeight *0.95);
// change background color of renderer
renderer.setClearColor( 0xffffff, 0);
document.body.appendChild( renderer.domElement );

var w = 2, h = 2;

// vinyl texture
var vinylTexture = THREE.ImageUtils.loadTexture("textures/boppivinyl.png");
//vinylTexture.wrapS = vinylTexture.wrapT = THREE.RepeatWrapping;
//vinylTexture.repeat.set( 1, 1 );
var vinylMaterial = new THREE.MeshBasicMaterial( { map: vinylTexture } );
//vinylMaterial.side = THREE.DoubleSide;

// back texture
var backgroundTexture = THREE.ImageUtils.loadTexture("textures/boppi2.jpg");
backgroundTexture.wrapS = backgroundTexture.wrapT = THREE.RepeatWrapping;
//backgroundTexture.repeat.set( 1, 1 );
var backgroundMaterial = new THREE.MeshBasicMaterial( { map: backgroundTexture } );
backgroundMaterial.side = THREE.DoubleSide;



vinylGeometry = new THREE.PlaneGeometry( w, h );
backgroundGeometry = new THREE.PlaneGeometry( w*3, h*3 );

vinylGround = new THREE.Mesh( vinylGeometry, vinylMaterial );
backgroundGround = new THREE.Mesh( backgroundGeometry, backgroundMaterial );

scene.add( vinylGround );
//scene.add( backgroundGround );

backgroundGround.position.z = -1;

// z is depth
// y is height
// x is left/right
camera.position.z = 2;
//camera.position.y = +1;


render();