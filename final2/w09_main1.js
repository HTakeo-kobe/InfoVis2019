function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var scale = 1;
    var color = 255;

    screen.init( volume, {
        width: window.innerWidth * 0.7 ,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 127;
    var surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.7, window.innerHeight ] );
    });

    var buttoni = document.getElementById('change-isovalue-button');
    function changeIsovalue(){
        screen.scene.remove(surfaces);
        
        surfaces = Isosurfaces( volume, isovalue );
        screen.scene.add( surfaces );
        
        }
    buttoni.onclick = changeIsovalue;

    var buttonc = document.getElementById('change-color-button');
    function changeColor(){
        screen.scene.remove(surfaces);
        
        surfaces = Isosurfaces( volume, isovalue );
        screen.scene.add( surfaces );
        
        }
    buttonc.onclick = changeColor;

    var buttons = document.getElementById('change-scale-button');
    function changeScale() {
            surfaces.scale.set(scale, scale, scale);
        }
    buttons.onclick = changeScale;

    var elemi = document.getElementById('isovalue');
		var rangeValue = function (elem) {
		  return function(evt){
              isovalue = elemi.value;
              screen.scene.remove(surfaces);
              surfaces = Isosurfaces(volume, isovalue);
              screen.scene.add(surfaces);
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

    screen.loop();
}
