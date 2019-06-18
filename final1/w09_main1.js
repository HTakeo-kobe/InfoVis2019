function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

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

    var elem = document.getElementById('isovalue');
		var rangeValue = function (elem) {
		  return function(evt){
			isovalue = elem.value;
            
		  }
		}
	elem.addEventListener('input', rangeValue(elem));

    screen.loop();
}
