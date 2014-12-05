var url = 'http://localhost:8080/';
var filename = 'photos/dolphin.jpg';

function imageInit(url, filename, cardboard) {
  var pic = THREE.ImageUtils.loadTexture(
      '../client/photos/dolphin.jpg'
  );
  var planegeometry = new THREE.PlaneGeometry( 635, 441 );
  var planematerial = new THREE.MeshBasicMaterial({
    color: 0x99CCFF,
    // side: THREE.DoubleSide,
    map: pic
  });
  var plane = new THREE.Mesh( planegeometry, planematerial );
  cardboard.scene.add( plane );

  cardboard.camera.position.y = 441 / 1.5;

}


