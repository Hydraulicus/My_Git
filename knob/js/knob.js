var knob={

 	centerOfCnob : {x : 610, y : 610},

	 elements : {
	 medCircle1:"M531 991c-25,-5 -49,-12 -72,-22 -24,-10 -46,-22 -67,-36 -20,-14 -41,-30 -58,-48 -18,-18 -34,-37 -48,-58 -14,-21 -26,-43 -35,-66 -11,-23 -19,-48 -24,-73 -4,-26 -7,-53 -7,-79 0,-26 3,-53 7,-79 5,-25 13,-49 24,-73 9,-23 21,-45 35,-67 14,-20 30,-39 48,-57 17,-18 38,-34 58,-48 21,-14 43,-26 67,-36 23,-10 47,-18 72,-22 26,-6 52,-9 79,-9 27,0 53,3 79,9 25,4 49,12 73,22 24,10 46,22 66,36 21,14 41,30 58,48 18,18 34,37 48,57 14,22 27,44 36,67 10,24 18,48 23,73 5,26 7,53 7,79 0,26 -2,53 -7,79 -5,25 -13,50 -23,73 -9,23 -22,45 -36,66 -14,21 -30,40 -48,58 -17,18 -37,34 -58,48 -20,14 -42,26 -66,36 -24,10 -48,17 -73,22 -26,6 -52,8 -79,8 -27,0 -53,-2 -79,-8l0 0z",
	 medCircle2:"M610 221c214,0 388,174 388,388 0,214 -174,388 -388,388 -214,0 -387,-174 -387,-388 0,-214 173,-388 387,-388z",
	 medCircle3:"M540 946c-22,-5 -45,-11 -65,-21 -20,-8 -41,-19 -59,-31 -17,-13 -35,-27 -50,-42 -16,-16 -30,-33 -43,-51 -12,-19 -23,-38 -32,-59 -8,-21 -15,-42 -19,-65 -5,-22 -8,-46 -8,-69 0,-23 3,-47 8,-70 4,-22 11,-44 19,-64 9,-20 20,-40 32,-59 13,-18 27,-35 43,-51 15,-15 33,-30 50,-42 18,-12 39,-23 59,-32 20,-8 43,-15 65,-20 22,-4 45,-7 70,-7 23,0 46,3 68,7 22,5 45,12 65,20 20,9 41,20 59,32 18,12 36,27 51,42 16,16 29,33 42,51 13,19 23,39 32,59 9,20 15,42 20,64 5,23 7,47 7,70 0,23 -2,47 -7,69 -5,23 -11,44 -20,65 -9,21 -19,40 -32,59 -13,18 -26,35 -42,51 -15,15 -33,29 -51,42 -18,12 -39,23 -59,31 -20,10 -43,16 -65,21 -22,4 -45,7 -68,7 -25,0 -48,-3 -70,-7l0 0z",
	 medCircle4:"M610 266c188,0 341,153 341,342 0,189 -153,342 -341,342 -190,0 -343,-153 -343,-342 0,-189 153,-342 343,-342z",
	 innerCircle1:"M547 914c-21,-4 -41,-10 -59,-18 -19,-8 -37,-17 -54,-29 -16,-11 -32,-24 -46,-38 -14,-14 -27,-29 -38,-46 -11,-17 -21,-34 -29,-53 -8,-19 -14,-39 -18,-59 -4,-20 -6,-42 -6,-63 0,-21 2,-42 6,-63 4,-20 10,-40 18,-58 8,-19 18,-37 29,-54 11,-16 24,-32 38,-46 14,-14 30,-27 46,-38 17,-11 35,-21 54,-29 18,-8 38,-14 59,-18 20,-4 41,-6 63,-6 21,0 41,2 62,6 21,4 40,10 58,18 20,8 37,18 54,29 16,11 32,24 46,38 15,14 27,30 39,46 10,17 20,35 28,54 9,18 14,38 18,58 5,21 7,42 7,63 0,21 -2,43 -7,63 -4,20 -9,40 -18,59 -8,19 -18,36 -28,53 -12,17 -24,32 -39,46 -14,14 -30,27 -46,38 -17,12 -34,21 -54,29 -18,8 -37,14 -58,18 -21,5 -41,6 -62,6 -22,0 -43,-1 -63,-6l0 0z",
	 innerCircle2:"M610 297c171,0 310,139 310,311 0,172 -139,311 -310,311 -173,0 -312,-139 -312,-311 0,-172 139,-311 312,-311z",

	 bluePointer:"M666 327c5,10 3,22 -8,27 -10,6 -21,3 -27,-7 -6,-9 -3,-22 7,-27 10,-6 22,-3 28,7z",
	 grayPointer:"M936 791c3,8 1,17 -5,21 -8,3 -17,1 -21,-6 -3,-7 -2,-16 6,-20 7,-4 16,-2 20,5z",

	 //dragableKnob1:"M995 967c-11,-5 -21,-11 -28,-19 -9,-8 -15,-18 -20,-29 -5,-10 -7,-22 -7,-34 0,-12 2,-24 7,-35 5,-11 11,-20 20,-29 7,-8 17,-14 28,-19 11,-4 23,-7 34,-7 13,0 25,3 35,7 11,5 21,11 28,19 9,9 16,18 20,29 4,11 7,23 7,35 0,12 -3,24 -7,34 -4,11 -11,21 -20,29 -7,8 -17,14 -28,19 -10,5 -22,7 -35,7 -11,0 -23,-2 -34,-7l0 0z",
	 // dragableKnob2:"M1116 885c0,47 -38,87 -87,87 -47,0 -87,-40 -87,-87 0,-48 40,-87 87,-87 49,0 87,39 87,87z",
	 //dragableKnob3:"M1009 932c-6,-2 -12,-6 -15,-11 -5,-5 -9,-10 -12,-16 -3,-6 -4,-13 -4,-20 0,-7 1,-14 4,-20 3,-6 7,-12 12,-16 3,-5 9,-9 15,-11 7,-3 14,-5 20,-5 7,0 14,2 21,5 6,2 11,6 16,11 5,4 8,10 11,16 3,6 4,13 4,20 0,7 -1,14 -4,20 -3,6 -6,11 -11,16 -5,5 -10,9 -16,11 -7,3 -14,4 -21,4 -6,0 -13,-1 -20,-4l0 0z",
	 // dragableKnob4:"M1080 885c0,28 -23,50 -51,50 -27,0 -50,-23 -50,-50 0,-28 23,-50 50,-50 28,0 51,22 51,50z",
	 circleB1:"M392 1153c-11,-4 -20,-10 -27,-18 -8,-8 -14,-17 -19,-27 -4,-11 -6,-22 -6,-34 0,-11 2,-22 6,-32 5,-11 11,-20 19,-27 7,-9 16,-15 27,-19 10,-4 21,-6 33,-6 11,0 23,2 34,6 9,4 18,10 26,19 8,7 14,16 18,27 5,10 7,21 7,32 0,12 -2,23 -7,34 -4,10 -10,19 -18,27 -8,8 -17,14 -26,18 -11,5 -23,7 -34,7 -12,0 -23,-2 -33,-7l0 0z",
	 circleB2:"M425 991c46,0 84,37 84,83 0,47 -38,84 -84,84 -47,0 -83,-37 -83,-84 0,-46 36,-83 83,-83z",
	 circleB3:"M425 1009c36,0 66,30 66,65 0,37 -30,66 -66,66 -36,0 -66,-29 -66,-66 0,-35 30,-65 66,-65z",
	 circleB4:"M400 1134c-8,-3 -15,-8 -21,-14 -6,-6 -10,-12 -13,-20 -4,-8 -5,-17 -5,-26 0,-8 1,-16 5,-25 3,-7 7,-14 13,-20 6,-6 13,-11 21,-14 7,-3 16,-5 25,-5 8,0 17,2 25,5 8,3 14,8 20,14 7,6 11,13 15,20 3,9 5,17 5,25 0,9 -2,18 -5,26 -4,8 -8,14 -15,20 -6,6 -12,11 -20,14 -8,4 -17,5 -25,5 -9,0 -18,-1 -25,-5l0 0z",

	 circleI1:"M577 1192c-10,-4 -19,-10 -27,-18 -8,-8 -14,-17 -18,-27 -5,-10 -7,-22 -7,-33 0,-12 2,-23 7,-34 4,-10 10,-19 18,-27 8,-7 17,-13 27,-18 10,-4 22,-6 33,-6 12,0 23,2 33,6 10,5 20,11 27,18 8,8 14,17 19,27 4,11 7,22 7,34 0,11 -3,23 -7,33 -5,10 -11,19 -19,27 -7,8 -17,14 -27,18 -10,4 -21,7 -33,7 -11,0 -23,-3 -33,-7l0 0z",
	 circleI2:"M610 1030c47,0 84,37 84,84 0,46 -37,83 -84,83 -46,0 -84,-37 -84,-83 0,-47 38,-84 84,-84z",
	 circleI3:"M610 1048c36,0 66,29 66,66 0,36 -30,66 -66,66 -36,0 -65,-30 -65,-66 0,-37 29,-66 65,-66z",
	 circleI4:"M585 1173c-7,-3 -14,-8 -21,-14 -6,-6 -10,-13 -14,-20 -2,-8 -4,-17 -4,-25 0,-9 2,-17 4,-25 4,-8 8,-15 14,-21 7,-6 14,-10 21,-14 8,-3 17,-5 25,-5 9,0 17,2 26,5 7,4 14,8 20,14 6,6 11,13 14,21 3,8 4,16 4,25 0,8 -1,17 -4,25 -3,7 -8,14 -14,20 -6,6 -13,11 -20,14 -9,3 -17,5 -26,5 -8,0 -17,-2 -25,-5l0 0z",

		circleD1:"M762 1153c-10,-4 -19,-10 -27,-18 -7,-8 -14,-17 -18,-27 -5,-11 -7,-22 -7,-34 0,-11 2,-22 7,-32 4,-11 11,-20 18,-27 8,-9 17,-15 27,-19 11,-4 22,-6 33,-6 12,0 23,2 33,6 11,4 20,10 27,19 8,7 15,16 19,27 4,10 6,21 6,32 0,12 -2,23 -6,34 -4,10 -11,19 -19,27 -7,8 -16,14 -27,18 -10,5 -21,7 -33,7 -11,0 -22,-2 -33,-7l0 0z",
		circleD2:"M795 991c47,0 84,37 84,83 0,47 -37,84 -84,84 -46,0 -84,-37 -84,-84 0,-46 38,-83 84,-83z",
		circleD3:"M795 1009c37,0 66,30 66,65 0,37 -29,66 -66,66 -36,0 -66,-29 -66,-66 0,-35 30,-65 66,-65z",
		circleD4:"M770 1134c-8,-3 -14,-8 -20,-14 -6,-6 -11,-12 -14,-20 -4,-8 -6,-17 -6,-26 0,-8 2,-16 6,-25 3,-7 8,-14 14,-20 6,-6 12,-11 20,-14 8,-3 17,-5 25,-5 9,0 18,2 25,5 8,3 15,8 21,14 6,6 10,13 14,20 3,9 5,17 5,25 0,9 -2,18 -5,26 -4,8 -8,14 -14,20 -6,6 -13,11 -21,14 -7,4 -16,5 -25,5 -8,0 -17,-1 -25,-5l0 0z",

		      elOfscale:"M224 873l-60 40c3,4 5,8 8,12l58 -43c-2,-3 -4,-6 -6,-9z",
		},//end of elements

	init : function  (e) {
		console.dir('Init');
		var s = Snap(e.knobId);
		var mainshadow = s.filter(Snap.filter.shadow(0, 20, 4, 'black'));
		var kScale = 1220/e.knobWidth;
		s.attr({
			viewBox: "0 0 1220 1220",//Original size 1220 х 1220.
			width:e.knobWidth,
			height:e.knobHeight,
			 fill: 'red',
			stroke:"DodgerBlue",
			strokeWidth:1});

			var outCrclP = s.circle(this.centerOfCnob.x,this.centerOfCnob.y,605).attr({fill:'transparent',fill:'#eee', stroke:"gray"});

			var arrayp =[];
			var angle = 0,
				endengel = 252,
			_color = e.colorOfactivEl;
			var angelstep = endengel/126;
			var bluePointerAngel = angelstep*parseInt(e.bluePointer)-138,
				blueGlow = s.filter(Snap.filter.shadow(0, 0, 8, e.colorOfactivEl, 1));
			var i=0;
                while (angle < endengel) { //round scale generation
                     arrayp[i] = s.path(this.elements.elOfscale);
					if (i >= parseInt(e.bluePointer)) {
						_color = e.colorOfpassiveEl;
						blueGlow ='';
						arrayp[i].hover(function(el) {this.attr({fill:"LightSteelBlue",});
										// this.stop().animate({opacity:0.6,},300, mina.elastic)
											},
										function(el) {//this.attr({fill:_color,});
										this.stop().animate({fill:_color,},1000, mina.elastic)
											}
										)
					}
					arrayp[i].attr({fill:_color, stroke:_color, transform: "r" + angle+','+this.centerOfCnob.x+','+this.centerOfCnob.y, filter :blueGlow
				                 });
                    angle += angelstep;
                    i++
                }



			// var p  = s.path(this.elements.outCircle2).attr({fill:'transparent'});
			var p  = s.path(this.elements.medCircle1).attr({fill:'#ddd', stroke:"darkgrey",});
			var p  = s.path(this.elements.medCircle2).attr({fill:'#ddd', stroke:"darkgrey",});
			var p  = s.path(this.elements.medCircle3).attr({fill:'l(0,0,0,1)#888-#eee-#eee', stroke:"darkgrey",});
			var p  = s.path(this.elements.medCircle4).attr({fill:'transparent', stroke:"darkgrey",});
			var p  = s.path(this.elements.innerCircle1).attr({fill:"l(0,0,0,1)#eee-#888", stroke:"darkgrey",
								filter : s.filter(Snap.filter.shadow(0, 50, 20, '#555'))//основная тень от кнопы
						});
			var p  = s.path(this.elements.innerCircle2).attr({fill:'r(0.5, 0.5, 0.95)#fff-#555', //придаем легкую выпуклость основной кнопе
															opacity:0.35, stroke:"darkgrey",
														 filter : s.filter(Snap.filter.shadow(0, -1, 4, '#aaa'))//светлый блик на краю кнопы});
						});
			var bluePointer  = s.path(this.elements.bluePointer).attr({fill:'transparent', stroke:"blue",  });
				 bluePointer.transform( 'r'+bluePointerAngel+','+this.centerOfCnob.x+','+this.centerOfCnob.y);
			var p  = s.path(this.elements.grayPointer).attr({fill:'transparent', stroke:"gray",});
			// var pdragableKnob1 = s.path(this.elements.dragableKnob1).attr({fill:'transparent', stroke:"gray",});//old
			// var pdragableKnobC = s.circle(1029, 885, 90).attr({fill:'transparent', stroke:"black",});
			// var pdragableKnob2 = s.path(this.elements.dragableKnob2).attr({fill:'transparent', stroke:"gray",});
			var pdragableKnob3 = s.circle(1029, 885, 50)
					.attr({
						fill:'r(0.5, 0.5, 0.5)#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999-#fff-#999',
						 stroke:"rgba(200,200,200,0.2)",strokeWidth:100, filter : s.filter(Snap.filter.shadow(0, 20, 10, '#555'))});
			// var track = s.circle(this.centerOfCnob.x,this.centerOfCnob.y, 502).attr({fill:'transparent', stroke:"cyan",});
					// pdragableKnob3.transform( 'r-150,'+this.centerOfCnob.x+','+this.centerOfCnob.y);
			// var pdragableKnob4 = s.path(this.elements.dragableKnob4).attr({fill:'transparent', stroke:"gray",});
			// var dragableGroup = s.g(pdragableKnobC, pdragableKnob2, pdragableKnob3, pdragableKnob4);//grouping



			var p  = s.path(this.elements.circleB1).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleB2).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleB3).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleB4).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleI1).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleI2).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleI3).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleI4).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleD1).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleD2).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleD3).attr({fill:'transparent', stroke:"gray",});
			var p  = s.path(this.elements.circleD4).attr({fill:'transparent', stroke:"gray",});
			// var p  = s.path(this.elements.tempPath).attr({fill:'transparent', stroke:"red",});


 var svgTextElementD = s.text(770,1100, "D").attr({ fontSize: '72px', opacity: 1, "font-family":e.knobFont });
 var svgTextElementI = s.text(598,1138, "I").attr({ fontSize: '72px', opacity: 1, "font-family":e.knobFont });

 var svgTextElementI = s.text(556,591, e.knobText1).attr({ fontSize: '38px', opacity: 1, "text-anchor": "middle", "font-family":e.knobFont });
 var svgTextElementI = s.text(588,692, e.knobText2).attr({ fontSize: '90px', opacity: 1, "text-anchor": "middle", "font-family":e.knobFont });

  // <text x="598" y="1138"  class="fil1 str0 fnt0">I</text>
  // <g transform="matrix(0.999994 0 0 1 -342.455 395.437)">
  //  <text x="588" y="610"  class="fil1 str0 fnt1">$0</text>
  // </g>
  // <g transform="matrix(0.999994 0 0 1 322.24 395.437)">
  //  <text x="556" y="610"  class="fil1 str0 fnt1">$2000</text>
  // </g>
  // <g transform="matrix(0.999997 0 0 1 -5.23928 197.391)">
  //  <text x="460" y="610"  class="fil1 str0 fnt2">INVESTMENT</text>
  // </g>
  // <g transform="matrix(0.999997 0 0 1 -5.23928 -137.809)">
  //  <text x="549" y="610"  class="fil1 str0 fnt2">PLAN</text>
  // </g>
  // <text x="486" y="557"  class="fil1 str0 fnt3">$2000</text>
  // <g transform="matrix(0.999999 0 0 1 -4.79 136.481)">
  //  <text x="442" y="610"  class="fil1 str0 fnt4">$2000</text>


var canvas = {
	center : [knob.centerOfCnob.x, knob.centerOfCnob.y],
	radius : 502
};


function limit(x, y) {
//    var dist = distance([x, y], canvas.center);
    // if (dist <= canvas.radius) {
    //     return {x: x, y: y};
    // }
    // else
  //   {
        x = x - canvas.center[0];
        y = y - canvas.center[1];
        var radians = Math.atan2(y, x);
        console.log('radians='+radians);
        if (radians>0.59 && radians<2.49) radians=0.59;
        if (radians<2.48 && radians>1) radians=2.48;

           return {
               x: Math.cos(radians) * canvas.radius + canvas.center[0],
               y: Math.sin(radians) * canvas.radius + canvas.center[1]
           }
    //    }
    }

function distance(dot1, dot2) {
    var x1 = dot1[0],
        y1 = dot1[1],
        x2 = dot2[0],
        y2 = dot2[1];
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

		var move = function(dx, dy, x, y) {

			// s.path('M'+tcx+','+1220-tcy+' l'+knob.centerOfCnob.x+' '+knob.centerOfCnob.y+','+x+' '+1220-y).attr({stroke:"red"});
			// var a = Snap.angle(tcx,tcy,knob.centerOfCnob.x,knob.centerOfCnob.y,tcx+dx,tcy+dy)+55,
			// var a = Snap.angle(x+dx,1220-y+dy,knob.centerOfCnob.x,knob.centerOfCnob.y,tcx,1220-tcy)+59,
			// var a = Snap.angle(1029+dx, 885+dy, knob.centerOfCnob.x,knob.centerOfCnob.y)-30,
			// console.log("Move going. tcx="+tcx+' tcy='+tcy);
			var a = Snap.angle( knob.centerOfCnob.x,knob.centerOfCnob.y, +tcx+dx, +tcy+dy)-210+360,
				r = 502;
				// var tryd = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));


				// var tryr = Math.sqrt(Math.pow(knob.centerOfCnob.x-x,2)+Math.pow(knob.centerOfCnob.y-y,2));
				var kk =1;
// if ((x) <= knob.centerOfCnob.x) {kk=-1; console.log('kk='+kk)}

var sy = 1220-(Math.sqrt(Math.pow(r,2)-Math.pow((parseInt(this.data("ox")) + kk*dx-knob.centerOfCnob.x),2))+knob.centerOfCnob.y);//вычисленный Y относительно cx+dx
var sx =  Math.sqrt(Math.pow(r,2)-Math.pow((parseInt(this.data("oy")) + dy-knob.centerOfCnob.y),2))+knob.centerOfCnob.x;//вычисленный X относительно cy+dy

				// console.log('dx='+dx+' ,dy='+dy+', x='+x+' ,y='+y+' sx='+sx+' sy='+sy);
				// console.log('angel='+a+' sx='+sx+' sy='+sy);

 var att = this.type == "rect" ? {x: parseInt(this.data("ox")) + dx, y: parseInt( this.data("oy")) + dy} : {cx: parseInt(this.data("ox")) + dx, cy: parseInt(this.data("oy")) + dy};

//========
// if ((sy <= 200)&&(sy => 400))
//  {att = {cx:sx, cy: parseInt(this.data("oy")) + dy}; console.log("Подставляем X - расчетный.near ver peregeus")}
// 	  else
//  {att = {cx:parseInt(this.data("ox")) + kk*dx, cy: sy}; console.log("Подставляем Y - расчетный. near hor peregeus")}

//  if (sx !== sx) {att = {cx:parseInt(this.data("ox")) + kk*dx, cy: sy}; console.log("Подставляем Y - расчетный. sx = NaN!!!!!!!!!"+sx)} else
   // {att = {cx:sx, cy: parseInt(this.data("oy")) + dy}; console.log("Подставляем X - расчетный.sx not NaN"+sx)};
//========

console.log(' x='+x+' ,y='+y);
 var result = limit(x*kScale, y*kScale);

att = {cx: result.x,cy:result.y}

             this.attr(att);

{ //console.log("tryr="+tryr);
		        // this.attr({
		                    // transform: "r" +2+','+knob.centerOfCnob.x+','+knob.centerOfCnob.y
		                    // transform: this.data('origTransform') + (this.data('origTransform') ? "R" : "r") +a+ ','+knob.centerOfCnob.x+','+knob.centerOfCnob.y
		                // });
		    }
		}



		var tcx, tcy;
		pdragableKnob3.drag( move,
                function(){
                    this.data('origTransform', this.transform().local );
                    tcx = this.attr("cx");
					tcy = this.attr("cy");
                    console.log("Move started. tcx="+tcx+' tcy='+tcy);


                            this.data("ox", this.type == "rect" ? this.attr("x") : this.attr("cx") );
        this.data("oy", this.type == "rect" ? this.attr("y") : this.attr("cy") );
        // this.animate({"fill-opacity": .2}, 500);
                },
                function(){
                    console.log("Move stopped");
                }

        );


;
//=================== работает
// var tcx, tcy;
// pdragableKnob3.drag(function(dx, dy, x, y ){
// 				console.log('dx='+dx+', dy='+dy+', x='+x+', y='+y+' cx='+tcx+' cy='+tcy );
// 				this.attr({
// 					cx: +tcx+dx,
// 					cy: +tcy+dy
// 					});
// 				},
// 				function(x, y ){
//                     console.log('Move started, x='+x+', y='+y);
// 				 tcx = this.attr("cx");
// 				 tcy = this.attr("cy");
//                 },
//                 function(){
//                     console.log("Move stopped");
//                 });
//===================


var bobo = s.multitext(50, 50, "bobo bobo bobo bobo bobo bobo bobo bobo bobo", 1050,
    {  "text-anchor": "middle","font-size": "30px" });

		return s
	 }//end of init function

};//end of knob object


  Snap.plugin(function (Snap, Element, Paper, glob) {
     Paper.prototype.multitext = function (x, y, txt, max_width, attributes) {

        var svg = Snap();
        var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var temp = svg.text(0, 0, abc);
        temp.attr(attributes);
        var letter_width = temp.getBBox().width / abc.length;
        svg.remove();

        var words = txt.split(" ");
        var width_so_far = 0, current_line=0, lines=[''];
        for (var i = 0; i < words.length; i++) {

           var l = words[i].length;
           if (width_so_far + (l * letter_width) > max_width) {
              lines.push('');
              current_line++;
              width_so_far = 0;
           }
           width_so_far += l * letter_width;
           lines[current_line] += words[i] + " ";
        }

        var t = this.text(x,y,lines).attr(attributes);
        t.selectAll("tspan:nth-child(n+2)").attr({
           dy: "1.2em",
           x: x
        });
        return t;
     };
  });




