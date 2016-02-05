
var TableTop = {//prototipe
	constructor: function(X0, Y0, W, L, aD, name){
		this.W = W;
		this.L = L;
		this.X0= X0;
		this.Y0= Y0;
		this.aD= aD;//array of N dragable sides [2,3]
		this.S = 0; //area in sq m

		  Object.defineProperty(this, "S", {// S will be calculated automaticaly everytime
		    get: function() {
		      return (this.W * this.L * 0.000001).toFixed(2) //area in sq m . rounded
		    }
		  });


		  Object.defineProperty(this, "ST", {// ST - contain string of table of this element
		    get: function() {
				var l = wholeTable.S.length;
				return '<tr id="'+l+'"><td>'+name+'</td><td id="'+l+'L" data-editable="1" data-2="L" data-4="'+l+'" class="editable">'+L+'</td><td id="'+l+'W" class="editable" data-editable="1" data-2="W" data-4="'+l+'" >'+W+'</td><td>'+this.S+'</td><td>'+0+'</td></tr>' ; //string in price table
		    }
		  });

		 $('#priceTable').append(this.ST);

		// console.dir(wholeTable.S);
		return this
	},
}//end of TableTop constructor



var wholeTable = {
				S : [],
	   array4Drag : [],		//array which contain coords of dragable lines
		dragLines : [],		//array which contain dragable lines with coord from array4Drag. All this lines are redrawing afte draging
		dDimLines : [],		//array which contain 'd' of dim lines and coordinates of text
		 dimLines : [],		//array which contain dim lines with coord from array4Drag. All this lines are redrawing afte draging
		underWins : [], 	//array which contain coords of windowsills
	  windowsills : [], 	//array which contain windowsills
			   aC : [],		//array of coord of circle which show dblclick
  		  circles : [],		//array of circle which show dblclick
distance4DimLines : [],		//array of distances betwin model an dimline. Are influenced by self W and windowsill W
  baseLofunderWin : 800, 	//defoult L of windowsill
			 bade : 400,	//base distance of dimline
			backD : 50,  	//return distance of dimline
  dragStrokeColor : 'red'
	};
Object.defineProperty(wholeTable, "distance4DimLines", {
    get: function() {
    	var bade = wholeTable.bade;
		    	var arr= new Array();
						if ( typeof wholeTable.S[0] !== 'undefined') {
								arr.push({shift : 2 * bade, color : 'tomato'});
								arr.push({shift : (bade + wholeTable.S[0].W) * (-1), color : 'magenta'});
							}
						if ( typeof wholeTable.S[1] !== 'undefined') {
								arr.push({shift : (bade * 2 + wholeTable.S[1].W), color : 'tomato'});
								arr.push({shift : bade, color : 'magenta'});
								// arr.push({shift : wholeTable.S[1].W*(1	), color : 'magenta'});
							}
						if ( typeof wholeTable.S[2] !== 'undefined') {
								arr.push({shift : -1 * (bade * 2 + wholeTable.S[2].W), color : 'tomato'});
								arr.push({shift :bade, color : 'magenta'});
							}
				return arr
	    }
});

Object.defineProperty(wholeTable, "tableCountur", {
    get: function() {
    	var
	    	L1 = (typeof wholeTable.S[1] !== 'undefined') ? this.S[1].L : 0,
	    	W1 = (typeof wholeTable.S[1] !== 'undefined') ? this.S[1].W : 0,
	    	L2 = (typeof wholeTable.S[2] !== 'undefined') ? this.S[2].L : 0,
	    	W2 = (typeof wholeTable.S[2] !== 'undefined') ? this.S[2].W : 0,

	    	d='M0,0'+' h'+this.S[0].L
				+' v'+(this.S[0].W+L1)+' h'+'-'+W1+' v'+'-'+L1 //concern first wing
				+' h'+'-'+(this.S[0].L-W1-W2)
				+' v'+L2+' h'+'-'+W2+' v'+'-'+(L2+this.S[0].W) //concern second wing
				+'z';
		return d
	    }
});

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
    	// console.log('array4Drag of coords recreated!');
    	// var	L1 = (typeof wholeTable.S[1] !== 'undefined')? this.S[1].L : 0;
				if ( typeof wholeTable.S[0] !== 'undefined') {
						arr.push({x : wholeTable.S[0].L, y : 0, x1 : wholeTable.S[0].L, y1 : wholeTable.S[0].W, cur : 'e-resize', infl2 : 'L', infl4 : '0'});
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
		return arr
	    }
    });

Object.defineProperty(wholeTable, "dDimLines", {

    get: function() { //generation array of coord of dim lines

		var arr = {},
			backD = wholeTable.backD;
				for (var i in wholeTable.array4Drag) {//console.log(wholeTable.array4Drag);
					var dist = {to : wholeTable.distance4DimLines[i].shift + ' ' + (backD * (-1)),
							  back : backD + ' ' + wholeTable.distance4DimLines[i].shift * (-1)},
							  dim = (wholeTable.array4Drag[i].cur == 'e-resize') ? (wholeTable.array4Drag[i].y1-wholeTable.array4Drag[i].y) : (wholeTable.array4Drag[i].x1-wholeTable.array4Drag[i].x);
					var shift = 'M'+wholeTable.array4Drag[i].x+' '+wholeTable.array4Drag[i].y;
					// if side vertical- marked L - shift for dimline plase - horisontal on 400 return 50 then draw dimline
					shift += (wholeTable.array4Drag[i].cur == 'e-resize') ? ' h ' + dist.to + ' v '+ dim + ' h  ' + dist.back + '  ' : ' v ' + dist.to + ' h ' + dim + ' v  ' + dist.back ;
					// shift += (wholeTable.array4Drag[i].cur == 'e-resize') ? ' h ' + dist.to + ' v '+ (wholeTable.array4Drag[i].y1-wholeTable.array4Drag[i].y) + ' h  ' + dist.back + '  ' : ' v ' + dist.to + ' h ' + (wholeTable.array4Drag[i].x1-wholeTable.array4Drag[i].x) + ' v  ' + dist.back ;

					var c = Snap.path.getPointAtLength(shift, Snap.path.getTotalLength(shift)*0.5);//get coordinates of center dimline by snap-svg function
					var tr = (wholeTable.array4Drag[i].cur == 'e-resize') ? 'r270t0 -80':'t0 -50';//shift text rel dimLines

					arr[i]={d : shift, tx : c.x, ty : c.y,
							 text : Math.abs(dim), transf : tr,
							 infl2 : (wholeTable.array4Drag[i].infl2 == 'W') ? 'L' : 'W',
							 infl4 : wholeTable.array4Drag[i].infl4
							};
		    	}
		return arr
	    }
    });

function backgngColor(canva, textElm){
	var SVGRect = textElm.getBBox();
	var rect = canva.rect()
    .attr({"x" : SVGRect.x, "y" : SVGRect.y, "width" : SVGRect.width, "height" : SVGRect.height, "fill": "#fff", stroke: 'black', strokeWidth : '2px'})
    .insertBefore(textElm);
    return rect
}

var graphModel ={
		views : {},// view windows
//===========================================================================================
drawDimLines : function (canva, array4Drag, matrix) {//Draw dimlines to dragable elements
		var arrow = canva.polygon([0,10, 4,10, 2,0, 0,10]).attr({fill: 'red'}).transform('r270');
		var marker = arrow.marker(0,0, 10,10, 0,5);
		if (typeof wholeTable.dimLines !== 'undefined') { for (var i in wholeTable.dimLines) {wholeTable.dimLines[i].t.remove(); wholeTable.dimLines[i].l.remove();}};
		for (var i in array4Drag) {
			var  shift = wholeTable.dDimLines[i].d,
					tr =  wholeTable.dDimLines[i].transf,
				coordX = wholeTable.dDimLines[i].tx, coordY = wholeTable.dDimLines[i].ty;

			var lines = canva.path(shift).attr({stroke:'black', strokeWidth : 8})
										.attr({fill : 'transparent'})
										.hover(function(){twoWawe();}, function(){});
			var dimText =  wholeTable.dDimLines[i].text;
			var infl = wholeTable.dDimLines[i].infl4+wholeTable.dDimLines[i].infl2;
			var texT = canva.text(coordX, coordY, dimText)
							.attr({'id' : 'target', cursor : 'pointer', fontSize : '120px', 'text-anchor' : 'middle', 'letter-spacing' : 2, stroke : '#bbb', strokeWidth :1, fill : 'black'})
							// .attr({'data-i':i,'data-infl2' : wholeTable.dDimLines[i].infl2,'data-infl4' : wholeTable.dDimLines[i].infl4,'data-toggle' : 'modal-popover', 'data-target' : "#dimInputModal"})
							.data('infl' , infl)
							.hover(function(){twoWawe(); $('.editableTable').find('#' + this.data('infl')).css("background-color",'DarkSalmon'); this.attr({stroke : 'tomato',strokeWidth :8, fill : 'red' })}, function(){this.attr({stroke : '#bbb',strokeWidth :2, fill : 'black'});  $('.editableTable').find('#' + this.data('infl')).css("background-color",'');})
							.click(function(){
										console.log(this.data('infl'));
										// $('.editableTable').find('#' + this.data('infl')).click()
										$('.editableTable').find('#' + this.data('infl')).trigger( "click" )
									})
							.transform(tr)
							;


					if (typeof matrix !== 'undefined') {lines.transform(matrix); texT.transform(matrix); bckgnd.transform(matrix);}
				wholeTable.dimLines[i]={l : lines, t : texT};
				// console.dir(wholeTable.dimLines[i]);
				// console.log(i,array4Drag[i].infl2,shift);
				}
				return wholeTable.dimLines
	},
reDrawDimLines : function (canva, array4Drag, matrix) {
			var backD = wholeTable.backD;
			for (var i in array4Drag) {
					if (typeof wholeTable.dragLines[i] !== 'undefined')
						{var shift = 'M'+array4Drag[i].x+' '+array4Drag[i].y,
							 dist = {to : wholeTable.distance4DimLines[i].shift + ' ' + (backD * (-1)),
									back : backD + ' ' + wholeTable.distance4DimLines[i].shift * (-1)};
							shift += (array4Drag[i].cur == 'e-resize') ? ' h ' + dist.to + ' v '+ (array4Drag[i].y1-array4Drag[i].y) + ' h  ' + dist.back + '  ' : ' v ' + dist.to + ' h ' + (array4Drag[i].x1-array4Drag[i].x) + ' v  ' + dist.back ;
							wholeTable.dimLines[i].l.attr( 'd',shift);
							wholeTable.dimLines[i].t.attr({text :  wholeTable.dDimLines[i].text, x :  wholeTable.dDimLines[i].tx, y : wholeTable.dDimLines[i].ty});
							wholeTable.dimLines[i].t.transform(wholeTable.dDimLines[i].transf);
						}
				}
	},

		//================== It is work ! ================================================
drawDragCountuor : function(canva, array4Drag, matrix){//Start draw dragable element
			if (typeof wholeTable.dragLines !== 'undefined') { for (var i in wholeTable.dragLines) wholeTable.dragLines[i].remove()};
			for (var i in array4Drag) {//console.log('Start draw dragable element N '+i);
					wholeTable.dragLines[i]  = canva.line( array4Drag[i].x, array4Drag[i].y, array4Drag[i].x1, array4Drag[i].y1)
									.attr({ stroke: wholeTable.dragStrokeColor, 'strokeWidth': 50, cursor: array4Drag[i].cur, id:array4Drag[i].infl2})
									.data('infl2',array4Drag[i].infl2)
									.data('infl4',array4Drag[i].infl4)
									 .drag( dragMove , start, stopE)
									 // .hover(function() { this.attr({strokeWidth: 20, stroke:"#aaf"}) },
										//  	function() { this.attr({strokeWidth: 40, stroke : wholeTable.dragStrokeColor}) })
									 .dblclick(underWinGrow);

					if (typeof matrix !== 'undefined') {wholeTable.dragLines[i].transform(matrix) }
				}
				return wholeTable.dragLines
		},

//===========================================================================================
reDrawDragCountuor : function(canva, array4Drag, matrix){//Start draw dragable element
			for (var i in array4Drag) {
					if (typeof wholeTable.dragLines[i] !== 'undefined')
						wholeTable.dragLines[i].attr({ x1:array4Drag[i].x, y1:array4Drag[i].y, x2:array4Drag[i].x1, y2:array4Drag[i].y1, stroke: wholeTable.dragStrokeColor});
				}
		},

reDrawCircles : function(canva, array4, matrix){//redraw dblclick cicrcles
			for (var i in array4) {//console.log('Start draw circles  N '+i);
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


function initialisation(par){
	var myMatrix = new Snap.Matrix();
	myMatrix.scale(0.8,0.4);            // play with scaling before and after the rotate
	// myMatrix.translate(100,100);      // this translate will not be applied to the rotation
	myMatrix.rotate(45);            // rotate
	graphModel.views.izometr = Snap("#svgout");//connect first viewport with izometric view
	graphModel.views.front = Snap("#frontView");//connect 2-nd viewport with front view

	wholeTable.S[0]=Object.create(TableTop).constructor(0, 0, 600, 2500, [2,3], 'Центральная');

	mainCountur.izometr=graphModel.views.izometr.path( wholeTable.tableCountur).attr({ stroke: '#999', 'strokeWidth': 20,fill:"#aaa"}).transform(myMatrix);
	mainCountur.front=graphModel.views.front.path( wholeTable.tableCountur).attr({ stroke: '#aaa', 'strokeWidth': 20,fill:"#bbb"})
											 .hover(function() {
											 	this.attr({fill:"#bbc",stroke:"#aac"});
											 }, function() {
											 	this.attr({fill:"#bbb",stroke: '#aaa',});
											 })
											 .mouseover(twoWawe)
											 ;//.animate({fill: 'red'}, 4000);
	zoom0(graphModel.views.front);
	zoom0(graphModel.views.izometr);

	// console.log(par.n);
	var  string_= par.n+' ';

	//check  whether need draw wings
	if (~string_.indexOf('1')) {wholeTable.S[1]=Object.create(TableTop).constructor(wholeTable.S[0].L, wholeTable.S[0].W, 450, 2500, [2,3]);	}
	if (~string_.indexOf('2')) {wholeTable.S[2]=Object.create(TableTop).constructor(0, wholeTable.S[0].W, 600,1200, [2,3]);}

redraw_mainCountur();
	// graphModel.drawDragCountuor(graphModel.views.front, wholeTable.array4Drag);
// generateTablic();
}

function redraw_mainCountur(){
	graphModel.drawDimLines(graphModel.views.front, wholeTable.array4Drag);

  mainCountur.front.animate({'d':wholeTable.tableCountur}, 700, mina.bounce, function(){
                // that.transform( oldMatrix );

                graphModel.drawDragCountuor(graphModel.views.front, wholeTable.array4Drag);
                zoom0(graphModel.views.front);
                graphModel.drawCircles(graphModel.views.front, wholeTable.aC);
            });

      mainCountur.izometr.animate({'d':wholeTable.tableCountur}, 750, mina.elastic,
      	function(){
      		zoom0(graphModel.views.izometr);
      	});
}


function underWinGrow(){// Should appire windowsill
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
				, function(){this.attr({ stroke: 'gold', 'strokeWidth': 10,fill:"#bbb",opacity:1})
						})
				})
		}

}

function zoom0(canva){ //zoom all objects in viewbox
	var bBox = canva.getBBox()
	 // var scale= ' '+bBox.x+' '+bBox.y+' '+bBox.w+' ' +bBox.h;
	// canva.animate({"viewBox": scale}, 100, function(){console.log(scale)});
	canva.attr({"viewBox": ' '+(bBox.x-300)+' '+(bBox.y-300)+' '+(bBox.w+600)+' ' +(bBox.h+600)});
	// document.querySelector('#frontView').setAttribute("viewBox", ' '+bBox.x+' '+bBox.y+' '+bBox.w+' ' +bBox.h);
}

			var tdx=0, tdy=0, vk, oldMatrix, oldX, oldY;
  function dragMove(dx, dy, x, y) {//GOOD WORKING
            var snapInvMatrix = this.transform().diffMatrix.invert();
            snapInvMatrix.e = snapInvMatrix.f = 0;
			if (this.attr('cursor') == 'n-resize') {
		            tdx = 0;
		            tdy = Math.round(snapInvMatrix.y( dx,dy ));
					wholeTable.S[this.data().infl4][this.data().infl2] = oldY + tdy;
					$('#'+this.data().infl4+this.data().infl2).text(oldY + tdy).parent().find("td:eq(3)").text(wholeTable.S[this.data().infl4].S);
					graphModel.reDrawDimLines(graphModel.views.front, wholeTable.array4Drag);
	            }
	            else {
		            tdx = Math.round(snapInvMatrix.x( dx,dy ));
		            tdy = 0;
					wholeTable.S[this.data().infl4][this.data().infl2] = oldX + vk * tdx;
					$('#'+this.data().infl4+this.data().infl2).text(oldX + vk * tdx).parent().find("td:eq(3)").text(wholeTable.S[this.data().infl4].S);
					graphModel.reDrawDimLines(graphModel.views.front, wholeTable.array4Drag);
	            }
	            // console.log(this.attr('stroke'));
            this.transform( "t" + [ vk * tdx, tdy ] + this.data('ot')  ).attr({'stroke' : '#bbb'});


    }

function start(el){
		console.clear();
		oldMatrix = this.transform().localMatrix;
		this.data('ot', this.transform().local );
		$('#'+this.data().infl4+this.data().infl2).css("background-color",'DarkSalmon');
		tdx=0;	 tdy=0;
		oldX = wholeTable.S[this.data().infl4][this.data().infl2]
		oldY = wholeTable.S[this.data().infl4][this.data().infl2]
		vk = ((this.data().infl4 == 1) && (this.data().infl2 == 'W')) ? -1 : 1;//
	};

function stopE(el){
		var that = this;

		mainCountur.front.animate({'d':wholeTable.tableCountur}, 750, mina.bounce, function(){
								that.transform( oldMatrix	);
								graphModel.reDrawDragCountuor(graphModel.views.front, wholeTable.array4Drag);
								zoom0(graphModel.views.front);
								graphModel.reDrawCircles(graphModel.views.front, wholeTable.aC);});
		mainCountur.izometr.animate({'d':wholeTable.tableCountur}, 750, mina.elastic, function(){ zoom0(graphModel.views.izometr);});
		$('#'+this.data().infl4+this.data().infl2).css("background-color",'white');
	};

//========================================================================================================================
//======================================= TABLIC ====== HANDLING =========================================================


function generateTablic(){ console.log('generateTablic');
	var tbl=''
	for (var i in wholeTable.S) {
		tbl+=wholeTable.S[i].ST;
	}
		 $('#priceTable').append(tbl);

}







//========================================================================================================================

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
        	 // document.getElementById('setKnobVal').innerHTML='x:'+pos.x+' y:'+pos.y
        }
    }
})();

