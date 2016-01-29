
var TableTop = {//prototipe
	constructor: function(X0, Y0, W, L, aD){
		this.W = W;
		this.L = L;
		this.X0= X0;
		this.Y0= Y0;
		this.aD= aD;//array of N dragable sides [2,3]
		this.S = 0; //area in sq m

		console.dir(wholeTable.S);

		  Object.defineProperty(this, "S", {// S will be calculated automaticaly everytime
		    get: function() {
		      return this.W * this.L * 0.000001; //area in sq m
		    }
		  });
		return this
	},
}//end of TableTop constructor

var wholeTable = {
				S : [],
		array4Drag: [],		//array which contain coords of dragable lines
		dragLines : [],		//array which contain dragable lines with coord from array4Drag. All this lines are redrawing afte draging
		underWins : [], 	// array which contain coords of windowsills
	  windowsills : [], 	// array which contain windowsills

		// tableCountur : ''
			aC : [],//array of coord of circle which show dblclick
			circles : [],//array of circle which show dblclick
	baseLofunderWin : 800, //defoult L of windowsill
	};
Object.defineProperty(wholeTable, "tableCountur", {
    get: function() {
    	var
	    	L1 = (typeof wholeTable.S[1] !== 'undefined')? this.S[1].L : 0,
	    	W1 = (typeof wholeTable.S[1] !== 'undefined')? this.S[1].W : 0,
	    	L2 = (typeof wholeTable.S[2] !== 'undefined')? this.S[2].L : 0,
	    	W2 = (typeof wholeTable.S[2] !== 'undefined')? this.S[2].W : 0,

	    	d='M0,0'+' h'+this.S[0].L
				+' v'+(this.S[0].W+L1)+' h'+'-'+W1+' v'+'-'+L1 //concern first wing
				+' h'+'-'+(this.S[0].L-W1-W2)
				+' v'+L2+' h'+'-'+W2+' v'+'-'+(L2+this.S[0].W) //concern second wing
				+'z';
		return d
	    }
});

// Object.defineProperty(wholeTable, "S", {
// 	set: function() {
// 		// console.log('wholeTable setted!');
// 	}
  // });
//
    // };

		  Object.defineProperty(wholeTable, "aC", {//array of coord of circle which show dblclick
		    get: function() {
		    	var arr= new Array();
						if ( typeof wholeTable.S[0] !== 'undefined') {
								arr.push({x : wholeTable.S[0].L*0.5, y : 0});
								arr.push({x : wholeTable.S[0].L*0.5, y : wholeTable.S[0].W });
							}
						if ( typeof wholeTable.S[1] !== 'undefined') {
								arr.push({x : wholeTable.S[0].L, y : wholeTable.S[1].L*0.5});
								arr.push({x : wholeTable.S[1].X0-wholeTable.S[1].W, y : wholeTable.S[1].Y0+wholeTable.S[1].L*0.5});
								arr.push({x : wholeTable.S[1].X0-wholeTable.S[1].W*0.5, y : wholeTable.S[1].Y0+wholeTable.S[1].L});
							}
						if ( typeof wholeTable.S[2] !== 'undefined') {
								arr.push({x : wholeTable.S[2].X0+wholeTable.S[2].W, y : wholeTable.S[2].Y0+wholeTable.S[2].L*0.5, });
								arr.push({x : wholeTable.S[2].X0+wholeTable.S[2].W*0.5, y : wholeTable.S[2].Y0+wholeTable.S[2].L, });
								arr.push({x : wholeTable.S[2].X0, y : wholeTable.S[2].Y0+wholeTable.S[2].L*0.5});
							}
		    	console.log('array of coord of circle which show dblclick recreated!');
				return arr
		    }
		  });
Object.defineProperty(wholeTable, "underWins", { //generation array of coord of underWins
    get: function() {
    	var
	    	L1 = (typeof wholeTable.S[1] !== 'undefined')? this.S[1].L : 0,
	    	W1 = (typeof wholeTable.S[1] !== 'undefined')? this.S[1].W : 0,
	    	L2 = (typeof wholeTable.S[2] !== 'undefined')? this.S[2].L : 0,
	    	W2 = (typeof wholeTable.S[2] !== 'undefined')? this.S[2].W : 0,
	    	hl = wholeTable.baseLofunderWin * 0.5;
    	var arr= new Array();
				if ( typeof wholeTable.S[0] !== 'undefined') {
						arr.push({x : wholeTable.S[0].L, y : L1*0.5-hl});
						arr.push({x : wholeTable.S[0].L*0.5, y : wholeTable.S[0].W });
					}
				if ( typeof wholeTable.S[1] !== 'undefined') {
						arr.push({x : wholeTable.S[1].X0-wholeTable.S[1].W, y : wholeTable.S[1].Y0+wholeTable.S[1].L*0.5});
						arr.push({x : wholeTable.S[1].X0-wholeTable.S[1].W*0.5, y : wholeTable.S[1].Y0+wholeTable.S[1].L});
					}
				if ( typeof wholeTable.S[2] !== 'undefined') {
						arr.push({x : wholeTable.S[2].X0+wholeTable.S[2].W*0.5, y : wholeTable.S[2].Y0+wholeTable.S[2].L, });
						arr.push({x : wholeTable.S[2].X0, y : wholeTable.S[2].Y0+wholeTable.S[2].L*0.5});
					}
    	return arr
	    }
    });

Object.defineProperty(wholeTable, "array4Drag", {
	set: function(){
		console.log('array4Drag should be renewed!');
	},
    get: function() { //generation array of coord of gragablel lines, type of cursor, data that will be changed
    	var arr= new Array();
    	console.log('array4Drag of coords recreated!');
    	// for (var i in this.S) {
    	var	L1 = (typeof wholeTable.S[1] !== 'undefined')? this.S[1].L : 0;
				if ( typeof wholeTable.S[0] !== 'undefined') {
						arr.push({x : wholeTable.S[0].L, y : 0, x1 : wholeTable.S[0].L, y1 : wholeTable.S[0].W+L1, cur : 'e-resize', infl2 : 'L', infl4 : '0'});
						arr.push({x : wholeTable.S[0].L, y : wholeTable.S[0].W, x1 : 0, y1 : wholeTable.S[0].W, cur : 'n-resize', infl2 : 'W', infl4 : '0' });
					}
				if ( typeof wholeTable.S[1] !== 'undefined') {
						 wholeTable.S[1].X0=wholeTable.S[0].L;
						 wholeTable.S[1].Y0=wholeTable.S[0].W;
						arr.push({x : wholeTable.S[1].X0-wholeTable.S[1].W, y : wholeTable.S[1].Y0, x1 : wholeTable.S[1].X0-wholeTable.S[1].W, y1 : wholeTable.S[1].Y0+wholeTable.S[1].L, cur : 'e-resize' ,  infl2 : 'W', infl4 : '1'});
						arr.push({x : wholeTable.S[1].X0, y : wholeTable.S[1].Y0+wholeTable.S[1].L, x1 : wholeTable.S[1].X0-wholeTable.S[1].W, y1 : wholeTable.S[1].Y0+wholeTable.S[1].L, cur : 'n-resize',  infl2 : 'L', infl4 : '1'});
					}
				if ( typeof wholeTable.S[2] !== 'undefined') {
						 // wholeTable.S[2].X0=wholeTable.S[2].W;
						 wholeTable.S[2].Y0=wholeTable.S[0].W;
						arr.push({x : wholeTable.S[2].X0+wholeTable.S[2].W, y : wholeTable.S[2].Y0, x1 : wholeTable.S[2].X0+wholeTable.S[2].W, y1 : wholeTable.S[2].Y0+wholeTable.S[2].L, cur : 'e-resize',  infl2 : 'W', infl4 : '2'});
						arr.push({x : wholeTable.S[2].X0, y : wholeTable.S[2].Y0+wholeTable.S[2].L, x1 : wholeTable.S[2].X0+wholeTable.S[2].W, y1 : wholeTable.S[2].Y0+wholeTable.S[2].L, cur : 'n-resize',  infl2 : 'L', infl4 : '2'});
					}
	    	// }

		return arr
	    }
    });

var graphModel ={
		views : {},// view windows
		//================== It is work ================================================
drawDragCountuor : function(canva, array4Drag, matrix){//Start draw dragable element
			for (var i in array4Drag) {//console.log('Start draw dragable element N '+i);
					wholeTable.dragLines[i]  = canva.line( array4Drag[i].x, array4Drag[i].y, array4Drag[i].x1, array4Drag[i].y1)
									.attr({ stroke: 'transparent', 'strokeWidth': 40,cursor: array4Drag[i].cur, id:array4Drag[i].infl2})
									.data('infl2',array4Drag[i].infl2)
									.data('infl4',array4Drag[i].infl4)
									 .drag( dragMove , start, stopE)
									 .hover(function() { this.attr({strokeWidth: 30,stroke:"#aaf"}) },
										 	function() { this.attr({strokeWidth: 40,stroke:"transparent"}) })
									 .dblclick(underWinGrow);

					if (typeof matrix !== 'undefined') {wholeTable.dragLines[i].transform(matrix) }
				}
				return wholeTable.dragLines
		},
//===========================================================================================


reDrawDragCountuor : function(canva, array4Drag, matrix){//Start draw dragable element
			for (var i in array4Drag) {
					if (typeof wholeTable.dragLines[i] !== 'undefined')
						wholeTable.dragLines[i].attr({ x1:array4Drag[i].x, y1:array4Drag[i].y, x2:array4Drag[i].x1, y2:array4Drag[i].y1});
				}
		},

reDrawCircles : function(canva, array4, matrix){//redraw dblclick cicrcles
			for (var i in array4) {//console.log('Start draw cercles  N '+i);
					wholeTable.circles[i].attr({ cx : array4[i].x, cy : array4[i].y});
				}
		},

drawCircles : function(canva, array4, matrix){//Start draw dblclick cicrcles
	// console.dir(array4);
	if (typeof wholeTable.circles !== 'undefined') { for (var i in wholeTable.circles) wholeTable.circles[i].remove()};
			for (var i in array4) {//console.log('Start draw dragable element N '+i);
					wholeTable.circles[i]  = canva.circle( array4[i].x, array4[i].y, 30)
									.attr({ stroke: 'transparent', strokeWidth: 5, fill : '#bbb'});
					if (typeof matrix !== 'undefined') {wholeTable.circles[i].transform(matrix) }
						// wholeTable.circlesGroup.add(wholeTable.circles[i]);
				}
			// console.dir(wholeTable.circles);
		return wholeTable.circles
		},

drawWindowSills : function(n, array4, matrix){//Start draw WindowSills
	// console.dir(array4);

					wholeTable.windowsills[n]  = canva.rect( array4[n].x, array4[n].y, 30)
									.attr({ stroke: 'transparent', strokeWidth: 5, fill : '#bbb'});
					if (typeof matrix !== 'undefined') {wholeTable.circles[i].transform(matrix) }
						wholeTable.circlesGroup.add(wholeTable.circles[i]);

				return wholeTable.circles
		},

}// end graphModel object




	var	mainCountur = {//content of main views
			front : undefined,
			izometr : undefined,
			}; // сюда будем подставлять новый d


function initialisation(){
	var myMatrix = new Snap.Matrix();
	myMatrix.scale(0.8,0.4);            // play with scaling before and after the rotate
	// myMatrix.translate(100,100);      // this translate will not be applied to the rotation
	myMatrix.rotate(45);            // rotate
	graphModel.views.izometr = Snap("#svgout");//connect first viewport with izometric view
	graphModel.views.front = Snap("#frontView");//connect 2-nd viewport with front view
	console.log(graphModel.views.izometr);

	wholeTable.S[0]=Object.create(TableTop).constructor(0, 0, 600, 2500, [2,3]);
	// wholeTable.S[1]=Object.create(TableTop).constructor(wholeTable.S[0].L, wholeTable.S[0].W, 450, 2500, [2,3]);
	// wholeTable.S[2]=Object.create(TableTop).constructor(0, wholeTable.S[0].W, 600,1200, [2,3]);

	mainCountur.izometr=graphModel.views.izometr.path( wholeTable.tableCountur).attr({ stroke: '#999', 'strokeWidth': 20,fill:"#aaa"}).transform(myMatrix);
	mainCountur.front=graphModel.views.front.path( wholeTable.tableCountur).attr({ stroke: '#aaa', 'strokeWidth': 20,fill:"#bbb"})
											 .hover(function() {
											 	this.attr({fill:"#bbc",stroke:"#aac"});
											 }, function() {
											 	this.attr({fill:"#bbb",stroke: '#aaa',});
											 })
											 .mouseover(twoWawe)
											 ;//.animate({fill: 'red'}, 4000);


	graphModel.drawDragCountuor(graphModel.views.front, wholeTable.array4Drag);
	// graphModel.drawDragCountuor(graphModel.views.front);
	// console.log(wholeTable.dragLines[0].attr('y1'));

	graphModel.drawCircles(graphModel.views.front, wholeTable.aC);
	zoom0(graphModel.views.front);
	zoom0(graphModel.views.izometr);

}
function underWinGrow(){
	console.log('dblclick '+this);
	var rec;

	wholeTable.underWins.push();
}

function twoWawe(){
	console.clear();
	for (var i in wholeTable.circles) {
		wholeTable.circles[i].animate({stroke:'gold',strokeWidth:100,opacity:0},250, mina.easein
			, function(){
				this.attr({ stroke: '#fff', 'strokeWidth': 20,fill:"#bbb",opacity:1});
				this.animate({stroke:'gold',strokeWidth:100,opacity:0},350, mina.easein
				, function(){this.attr({ stroke: '#bbb', 'strokeWidth': 10,fill:"#bbb",opacity:1})
						})
				})
		}

}

function zoom0(canva){ //zoom all objects in viewbox
	var bBox = canva.getBBox()
	 // var scale= ' '+bBox.x+' '+bBox.y+' '+bBox.w+' ' +bBox.h;console.log(scale)
	// canva.stop().animate({"viewBox": scale}, 1000, mina.bounce, function(){console.log(scale)});
	canva.attr({"viewBox": ' '+(bBox.x-300)+' '+(bBox.y-300)+' '+(bBox.w+600)+' ' +(bBox.h+600)});
	// document.querySelector('#frontView').setAttribute("viewBox", ' '+bBox.x+' '+bBox.y+' '+bBox.w+' ' +bBox.h);
}

			var tdx=0, tdy=0, oldMatrix;
  function dragMove(dx, dy, x, y) {//GOOD WORKING
            var snapInvMatrix = this.transform().diffMatrix.invert();
            snapInvMatrix.e = snapInvMatrix.f = 0;
			if (this.attr('cursor') == 'n-resize') {
		            tdx = 0;
		            tdy = snapInvMatrix.y( dx,dy );
	            }
	            else {
		            tdx = snapInvMatrix.x( dx,dy );
		            tdy = 0;
	            }
            this.transform( "t" + [ tdx, tdy ] + this.data('ot')  );
    }

function start(el){
		console.clear();
		oldMatrix = this.transform().localMatrix;
		this.data('ot', this.transform().local );
		tdx=0;	 tdy=0;
	};

function stopE(el){
		var that = this;
		console.log(this.data().infl4,this.data().infl2);
		if ((this.data().infl4 == 1) && (this.data().infl2 == 'W')) {tdx*=(-1); console.log('cetch')};
		wholeTable.S[this.data().infl4][this.data().infl2]+=tdx;
		wholeTable.S[this.data().infl4][this.data().infl2]+=tdy;
		mainCountur.front.animate({'d':wholeTable.tableCountur}, 750, mina.bounce, function(){
								that.transform( oldMatrix	);
								graphModel.reDrawDragCountuor(graphModel.views.front, wholeTable.array4Drag);
								zoom0(graphModel.views.front);
								graphModel.reDrawCircles(graphModel.views.front, wholeTable.aC);});
		mainCountur.izometr.animate({'d':wholeTable.tableCountur}, 750, mina.elastic, function(){ zoom0(graphModel.views.izometr);});
	};

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

