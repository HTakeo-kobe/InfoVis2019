function main()
{
  var volume = new KVS.LobsterData();
  var screen = new KVS.THREEScreen();
  
  var cmap = [];
    for ( var i = 0; i < 256; i++ )
    {
        var S = i / 255.0; // [0,1]
        var R = Math.max( Math.cos( ( S - 1.0 ) * Math.PI ), 0.0 );
        var G = Math.max( Math.cos( ( S - 0.5 ) * Math.PI ), 0.0 );
        var B = Math.max( Math.cos( S * Math.PI ), 0.0 );
        var color = new THREE.Color( R, G, B );
        cmap.push( [ S, '0x' + color.getHexString() ] );
    }

    screen.init( volume, {
        width: window.innerWidth * 0.7 ,
        height: window.innerHeight,
        enableAutoResize: false
    });
  
  document.addEventListener( 'mousemove', function() {
    screen.light.position.copy(screen.camera.position);
  });

  window.addEventListener( 'resize', function() {
      screen.resize( [ window.innerWidth * 0.7, window.innerHeight ] );
  });

  var buttoni = document.getElementById('change-isovalue-button');
  function changeIsovalue(){
    screen.scene.remove(surfaces);    
    surfaces = Isosurfaces(volume, isovalue);
    surfaces.scale.set(scale, scale, scale);
    surfaces.material.color.set(new THREE.Color().setHex( cmap[color][1] ))
    screen.scene.add( surfaces );
  }
  buttoni.onclick = changeIsovalue;

  var buttonc = document.getElementById('change-color-button');
  function changeColor() {
    surfaces.material.color.set(new THREE.Color().setHex(cmap[color][1]))
  }
  buttonc.onclick = changeColor;

  var buttons = document.getElementById('change-scale-button');
  function changeScale() {
    surfaces.scale.set(scale, scale, scale);
  }
  buttons.onclick = changeScale;

  var buttonr = document.getElementById('change-shade-button');
  function changeshader() {
    shader = "Phong";
    var radio = document.getElementById("Lambert");
    if (radio.checked) {
      shader = "Lambert";
    }
    screen.scene.remove(surfaces);    
    surfaces = Isosurfaces(volume, isovalue, shader);
    surfaces.scale.set(scale, scale, scale);
    surfaces.material.color.set(new THREE.Color().setHex( cmap[color][1] ))
    screen.scene.add( surfaces );
  }
  buttonr.onclick = changeshader;

  var elemi = document.getElementById('isovalue');
  var rangeValue = function (elem) {
    return function(evt){
            isovalue = elemi.value;
    }
  }
  elemi.addEventListener('input', rangeValue(elemi));

  var elems = document.getElementById('scale');
  var rangeValue = function (elem) {
    return function(evt){
        scale = elems.value;
    }
  }
  elems.addEventListener('input', rangeValue(elems));

  var elemc = document.getElementById('color');
  var rangeValue = function (elem) {
    return function(evt){
        color = elemc.value;
    }
  }
  elemc.addEventListener('input', rangeValue(elemc));
    
  var isovalue = elemi.value;
  var scale = elems.value;
  var color = elemc.value;
    
  var bounds = Bounds( volume );
  screen.scene.add( bounds );

  
  var surfaces = Isosurfaces(volume, isovalue);
  surfaces.material.color.set(new THREE.Color().setHex(cmap[color][1]));
  screen.scene.add(surfaces);


  screen.loop();
}
