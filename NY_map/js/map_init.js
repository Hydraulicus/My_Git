
var map = {
            coord : {x : 450, y : 1450}, //wanted coords
			marker: 'true', //whether to show marker in (coord.x , coord.y)
			scal : 1, //initial  scale
            mapId : 'map',//id of map group
            svgId : '', //svg tag there is map
           PsvgId : '', //pointer 2 svg tag there is map
            bBox : {}, //size of our SVG image
		viewPort : {}, //size of our SVG viewport

    setMapScale : function setMapScale(s){this.scal = s*0.01; map.zoom0(this.SVG,this.scal)},

	getUserCoord : function getUserCoord(s){
        if (typeof s.x !== "undefined") {map.coord.x=s.x;}
        if (typeof s.y !== "undefined") {map.coord.y=s.y;}
        if (map.marker) {map.markerCircle.attr({cx : map.coord.x, cy : map.coord.y});}
        map.zoom0(map.SVG, map.scal);
    },

zoom0 : function zoom0(canva, s){ //zoom all objects in viewbox
    var tw = map.viewPort.w,
        th = map.viewPort.h,
        mw = map.bBox.w,
        mh = map.bBox.h,
        xn = map.coord.x,
        yn = map.coord.y,
        scW= mw / tw,
        scH= mh / th,
        sc = (scW < scH) ? scW : scH,
        dx = Math.min(Math.max(xn-tw/2*sc*s,0), mw-tw*sc*s),
        dy = Math.min(Math.max(yn-th/2*sc*s,0), mh-th*sc*s);
        if (s == 0) {
                console.log('map window size: '+tw+' : '+th);
                console.log('sc: '+sc);
                scale= 0+' '+0+' '+(tw * sc)+' ' +(th * sc);
            }
            else
            {
                scale= dx +' '+dy+' '+ tw  * sc * s+' ' + th * sc * s;
                console.clear;
            };
        // console.log('set to viewBox: '+scale+ '  sc='+sc+' s='+s);
        canva.attr({"viewBox": scale});
},


}
          Object.defineProperty(map, "bBox", {
            get: function() {
                // console.log("bBox renew");
              return map.SVG.getBBox();
            }
          });


function initialisation(par){
    map.coord = par.coord;
    map.marker = par.marker;
    map.scal = par.scal;
    map.svgId = par.mapId;
    map.svgId = par.svgId;
    PsvgId = document.getElementById(map.svgId);
	map.SVG = Snap('#'+map.svgId);//attach viewport

        //Farefox can get size only from parent div.
        map.viewPort={w : document.getElementById(map.svgId).clientWidth || document.getElementById(map.svgId).parentNode.clientWidth,
                      h : document.getElementById(map.svgId).clientHeight || document.getElementById(map.svgId).parentNode.clientHeight };
    console.log( map.viewPort);


    map.mapa=map.SVG.select('#'+map.mapId);//connect group of map elements
    map.mapa.drag(DragMove,start,stopE);

    map.mapa.touchstart( touchStart );
    map.mapa.touchmove( touchMove );
    map.mapa.touchend( stopE );

	map.zoom0(map.SVG,0);

    if (map.marker) { map.markerCircle = map.SVG.circle(map.coord.x, map.coord.y, 20).attr({'stroke' : 'red', 'stroke-width' : 10, fill : 'magenta'});}
}

function touchStart(e){
        var prevCoord =  {x : 0, y : 0};
        this.data('box', PsvgId.getAttribute('viewBox'));
        var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
        prevCoord.x = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser
        prevCoord.y = parseInt(touchobj.clientY) // get y position of touch point relative to left edge of browser
        this.data('prevCoordX', prevCoord.x);
        this.data('prevCoordY', prevCoord.y);
        e.preventDefault()
    };

function touchMove(evt){//touch event

    var x = evt.changedTouches[0].clientX;
    var y = evt.changedTouches[0].clientY;
       // console.log(x,y);

    var vewboxArr = this.data('box').trim().split(' ').map( Number );//get viewbox
    var prevCoordX = parseInt(this.data('prevCoordX'));
    var prevCoordY = parseInt(this.data('prevCoordY'));
    var dx = prevCoordX - x,
        dy = prevCoordY - y;
        // console.log(dx,dy);
        // console.log('getted vewboxArr: '+vewboxArr[0]+' : '+vewboxArr[1] + ' : '+vewboxArr[2]+' : '+vewboxArr[3]);

    var tw = map.viewPort.w,
        th = map.viewPort.h,
        mw = map.bBox.w,
        mh = map.bBox.h,
        scW= mw / tw,
        scH= mh / th,
        sc = (scW > scH) ? scW : scH,

        deltaW=mw - vewboxArr[2],
        deltaH=mh - vewboxArr[3],
        s=1/map.scal;
    var dx1 = (vewboxArr[0]+dx*sc);
    var dy1 = (vewboxArr[1]+dy*sc);
    var limx1 = vewboxArr[2]+dx1;
    var limy1 = vewboxArr[3]+dy1;
        // console.log('limy1 = vewboxArr[3]+dy1'+' '+vewboxArr[3]+' + ' +dy1);


            if (limx1 >= map.bBox.w) {
                    // console.log("Reach right border !!!");
                    // console.log(' limx: '+limx1+'  map.bBox.w='+map.bBox.w);
                    dx1 = deltaW;
                }
            if (limy1 >=   map.bBox.h) {
                    dy1 = deltaH;
                // console.clear();
                // console.log("Reach bottom border !!! map.scal="+map.scal+' sc='+sc+' dy1='+dy1);
                // console.log(' limy1 = '+limy1+'  map.bBox.h='+map.bBox.h+'  th='+th);
                }
            if (dx1 < 0 ) { dx1 = 0}
            if (dy1 < 0 ) { dy1 = 0}

            var shift = dx1+' '+dy1+' '+(vewboxArr[2])+' ' +(vewboxArr[3]);
            map.SVG.attr({"viewBox": shift});
            evt.preventDefault();
}

function DragMove(dx, dy, x, y) {

    var vewboxArr = this.data('box').trim().split(' ').map( Number );//get viewbox
        // console.log('getted vewboxArr: '+vewboxArr[0]+' : '+vewboxArr[1] + ' : '+vewboxArr[2]+' : '+vewboxArr[3]);

    var tw = map.viewPort.w,
        th = map.viewPort.h,
        mw = map.bBox.w,
        mh = map.bBox.h,
        scW= mw / tw,
        scH= mh / th,
        sc = (scW > scH) ? scW : scH,

        deltaW=mw - vewboxArr[2],
        deltaH=mh - vewboxArr[3],
        s=1/map.scal;
    var dx1 = (vewboxArr[0]-dx*sc);
    var dy1 = (vewboxArr[1]-dy*sc);
    var limx1 = vewboxArr[2]+dx1;
    var limy1 = vewboxArr[3]+dy1;
        // console.log('limy1 = vewboxArr[3]+dy1'+' '+vewboxArr[3]+' + ' +dy1);


            if (limx1 >= map.bBox.w) {
                    // console.log("Reach right border !!!");
                    // console.log(' limx: '+limx1+'  map.bBox.w='+map.bBox.w);
                    dx1 = deltaW;
                }
            if (limy1 >=   map.bBox.h) {
                    dy1 = deltaH;
                    // console.clear();
                    // console.log("Reach bottom border !!! map.scal="+map.scal+' sc='+sc+' dy1='+dy1);
                    // console.log(' limy1 = '+limy1+'  map.bBox.h='+map.bBox.h+'  th='+th);
                }
            if (dx1 < 0 ) { dx1 = 0}
            if (dy1 < 0 ) { dy1 = 0}
            var shift = dx1+' '+dy1+' '+(vewboxArr[2])+' ' +(vewboxArr[3]);
             map.SVG.attr({"viewBox": shift});
        }

function start(el){
		console.clear();
		this.data('box', PsvgId.getAttribute('viewBox'));
	};

function stopE(el){console.log('Stop dragging')};


//===Get mouse position====
var mousePos = undefined;

(function() {
    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    // console.log(mousePos);
    }
    function getMousePosition() {
        var pos = mousePos;
        if (!pos) {
    //         // We haven't seen any movement yet
        }
        else {
        	 document.getElementById('setKnobVal').innerHTML='x:'+pos.x+' y:'+pos.y
        }
    }
})();

