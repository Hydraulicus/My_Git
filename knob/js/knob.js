 // "use strict";
var knob={
quantityOfCircle : 20, // quantity of circls at knob
 	centerOfCnob : {x : 610, y : 609},
		endengel : 252,
	   knobValue : 0,//in %
	  luftAngel  : 37,
	  getKnobPos : function getKnobPos(){return knob.knobValue.toFixed(2)+'%'},
	  setKnobPos : function setKnobPos(pos){knob.initKnobPos(pos);},
 setInscriptions : function setInscriptions(inscription){knob.setInscriptions(inscription)},
 getInscriptions : function getInscriptions(){return this.textVol},
	getBIDstatus : function getBIDstatus(){return this.BIDstatus},
	setBIDstatus : function setBIDstatus(stat){knob.setStatuses=stat;},

			   s : undefined, //var of main canvas
		knobFont : undefined, //font
	   BIDgroup1 : undefined,
	   BIDgroup2 : undefined,
	   BIDgroup3 : undefined,

	 initKnobPos : function initKnobPos(Pos) {
			if (Pos > 100) Pos=100;
			if (Pos < 0) Pos=0;
			knobValue = Pos;
			var angelKnobPos = (-1)*Pos*0.01*knob.endengel+knob.luftAngel;//in grd
			var radians = Snap.rad(angelKnobPos);//in rad
			// console.log(radians);
			var att = {cx: Math.cos(radians) * 502 + knob.centerOfCnob.x,cy: Math.sin(radians) * 502 + knob.centerOfCnob.y};
		    pdragableKnob3.attr(att);
		    pdragableKnobB.attr(att);
		    pdragableKnobC.attr(att);
		    //-0.038
		    pgrayPointerCircle1.attr({cx: Math.cos(radians) * 366 + knob.centerOfCnob.x,cy: Math.sin(radians) * 366 + knob.centerOfCnob.y} );
		    pgrayPointer.attr({cx: Math.cos(radians) * 366 + knob.centerOfCnob.x,cy: Math.sin(radians) * 366 + knob.centerOfCnob.y} );
		},

setInscriptions : function setInscriptions(inscription){
			if (!(inscription.planamount === undefined || inscription.planamount === null)) {
					console.dir(inscription.planamount);
					this.textVol.planamount = inscription.planamount;
					svgText10.attr({ text: "$"+this.textVol.planamount});
					svgText11.attr({ text: "$"+this.textVol.planamount});
					svgText3.attr({ text: "$"+this.textVol.planamount});
				};
			if (!(inscription.investmentamount === undefined || inscription.investmentamount === null)) {
					console.dir(inscription.investmentamount);
					this.textVol.investmentamount = inscription.investmentamount;
					svgText20.attr({ text: "$"+this.textVol.investmentamount});
					svgText21.attr({ text: "$"+this.textVol.investmentamount});
				}
		},

	 textVol:{investmentamount : 2000, planamount : 700},
	 statusColors:{ active : 'Aqua',
	              inactive : 'MediumTurquoise ',
	               passive : 'darkgray',
	           },
	 BIDstatus:{ Bstatus:"active",
				 Istatus:"active",
				 Dstatus:"active",
				},

	 svgText10:undefined,
	 svgText11:undefined,
	 svgText2:undefined,
	 svgText3:undefined,
	 pgrayPointer:undefined,
	 pgrayPointerCircle1:undefined,
     pdragableKnob3:undefined,
     pdragableKnobB:undefined,
     pdragableKnobC:undefined, // knob elements

	 elements : {
	 medCircle1:"M531 991c-25,-5 -49,-12 -72,-22 -24,-10 -46,-22 -67,-36 -20,-14 -41,-30 -58,-48 -18,-18 -34,-37 -48,-58 -14,-21 -26,-43 -35,-66 -11,-23 -19,-48 -24,-73 -4,-26 -7,-53 -7,-79 0,-26 3,-53 7,-79 5,-25 13,-49 24,-73 9,-23 21,-45 35,-67 14,-20 30,-39 48,-57 17,-18 38,-34 58,-48 21,-14 43,-26 67,-36 23,-10 47,-18 72,-22 26,-6 52,-9 79,-9 27,0 53,3 79,9 25,4 49,12 73,22 24,10 46,22 66,36 21,14 41,30 58,48 18,18 34,37 48,57 14,22 27,44 36,67 10,24 18,48 23,73 5,26 7,53 7,79 0,26 -2,53 -7,79 -5,25 -13,50 -23,73 -9,23 -22,45 -36,66 -14,21 -30,40 -48,58 -17,18 -37,34 -58,48 -20,14 -42,26 -66,36 -24,10 -48,17 -73,22 -26,6 -52,8 -79,8 -27,0 -53,-2 -79,-8l0 0z",
	 medCircle2:"M610 221c214,0 388,174 388,388 0,214 -174,388 -388,388 -214,0 -387,-174 -387,-388 0,-214 173,-388 387,-388z",
	 medCircle3:"M540 946c-22,-5 -45,-11 -65,-21 -20,-8 -41,-19 -59,-31 -17,-13 -35,-27 -50,-42 -16,-16 -30,-33 -43,-51 -12,-19 -23,-38 -32,-59 -8,-21 -15,-42 -19,-65 -5,-22 -8,-46 -8,-69 0,-23 3,-47 8,-70 4,-22 11,-44 19,-64 9,-20 20,-40 32,-59 13,-18 27,-35 43,-51 15,-15 33,-30 50,-42 18,-12 39,-23 59,-32 20,-8 43,-15 65,-20 22,-4 45,-7 70,-7 23,0 46,3 68,7 22,5 45,12 65,20 20,9 41,20 59,32 18,12 36,27 51,42 16,16 29,33 42,51 13,19 23,39 32,59 9,20 15,42 20,64 5,23 7,47 7,70 0,23 -2,47 -7,69 -5,23 -11,44 -20,65 -9,21 -19,40 -32,59 -13,18 -26,35 -42,51 -15,15 -33,29 -51,42 -18,12 -39,23 -59,31 -20,10 -43,16 -65,21 -22,4 -45,7 -68,7 -25,0 -48,-3 -70,-7l0 0z",
	 medCircle4:"M610 266c188,0 341,153 341,342 0,189 -153,342 -341,342 -190,0 -343,-153 -343,-342 0,-189 153,-342 343,-342z",
	 innerCircle1:"M547 914c-21,-4 -41,-10 -59,-18 -19,-8 -37,-17 -54,-29 -16,-11 -32,-24 -46,-38 -14,-14 -27,-29 -38,-46 -11,-17 -21,-34 -29,-53 -8,-19 -14,-39 -18,-59 -4,-20 -6,-42 -6,-63 0,-21 2,-42 6,-63 4,-20 10,-40 18,-58 8,-19 18,-37 29,-54 11,-16 24,-32 38,-46 14,-14 30,-27 46,-38 17,-11 35,-21 54,-29 18,-8 38,-14 59,-18 20,-4 41,-6 63,-6 21,0 41,2 62,6 21,4 40,10 58,18 20,8 37,18 54,29 16,11 32,24 46,38 15,14 27,30 39,46 10,17 20,35 28,54 9,18 14,38 18,58 5,21 7,42 7,63 0,21 -2,43 -7,63 -4,20 -9,40 -18,59 -8,19 -18,36 -28,53 -12,17 -24,32 -39,46 -14,14 -30,27 -46,38 -17,12 -34,21 -54,29 -18,8 -37,14 -58,18 -21,5 -41,6 -62,6 -22,0 -43,-1 -63,-6l0 0z",
	 innerCircle2:"M610 297c171,0 310,139 310,311 0,172 -139,311 -310,311 -173,0 -312,-139 -312,-311 0,-172 139,-311 312,-311z",

	 bluePointer:"M666 327c5,10 3,22 -8,27 -10,6 -21,3 -27,-7 -6,-9 -3,-22 7,-27 10,-6 22,-3 28,7z",

     elOfscale:"M224 873l-60 40c3,4 5,8 8,12l58 -43c-2,-3 -4,-6 -6,-9z",

     whiteCountur:"M609 38c316,0 571,255 571,570 0,136 -49,241 -94,312 -1,1 -1,3 -2,4 -13,19 -34,31 -59,31 -38,0 -70,-31 -70,-70 0,-16 6,-31 15,-43 47,-68 70,-144 70,-234 0,-238 -194,-430 -432,-430 -238,0 -432,192 -432,430 1,92 32,176 79,248 4,9 7,19 7,29 0,39 -32,69 -70,70 -22,1 -44,-12 -58,-31 -63,-91 -96,-197 -96,-316 0,-315 255,-570 571,-570z"
		},//end of elements

	init : function  (e) {
		knob.s = Snap(e.knobId);
		console.dir('Init'+knob.s);

		var kScale = 1220/e.knobWidth;
		knob.s.attr({
			viewBox: "0 0 1220 1220",//Original size 1220 х 1220.
			width:e.knobWidth,
			height:e.knobHeight,
			  fill: 'red',
			stroke:"DodgerBlue",
			strokeWidth:1});
			var outCrclP = knob.s.circle(this.centerOfCnob.x,this.centerOfCnob.y,605).attr({fill:'r(0.5, 0.51, 0.51)#eee:95-#bbb', stroke:"transparent",strokeWidth:0});
			var canvas = {
				center : [knob.centerOfCnob.x, knob.centerOfCnob.y],
				radius : 502
			};

			var arrayp =[];
			var angle = 0;

				knob.statusColors=e.colors;
				knobFont = e.knobFont;
				_color = knob.statusColors.active;
			var angelstep = knob.endengel/126;
			var bluePointerAngel = angelstep*parseInt(e.bluePointer)-138,
				blueGlow = knob.s.filter(Snap.filter.shadow(0, 0, 10, knob.statusColors.active, 1));
			var i=0;


			//=== check whether entered text  of  planamount and investmentamount
			if (!(e.planamount === undefined || e.planamount === null)) {
					knob.textVol.planamount = e.planamount;
				};
			if (!(e.investmentamount === undefined || e.investmentamount === null)) {
					knob.textVol.investmentamount = e.investmentamount;
				}
			//========================================================================
			knob.BIDstatus=e.stateOfbuttont;//console.log(knob.BIDstatus);
			//========================================================================

			var pw0 = knob.s.path(this.elements.whiteCountur).attr({fill:'transparent', stroke:"white",strokeWidth:3,opacity:1}).transform('s 1.005 1.0075');
			var pw1 = knob.s.path(this.elements.whiteCountur).attr({fill:'transparent', stroke:knob.statusColors.active,strokeWidth:3,opacity:0}).transform('s 1.005 1.0075');
			var p0 = knob.s.path(this.elements.medCircle1).attr({fill:'l(0,0,0,1)#fff-#aaa', stroke:"#888",});
			var p1 = knob.s.path(this.elements.medCircle2).attr({fill:'#ddd', stroke:"#888",});
			var p2 = knob.s.path(this.elements.medCircle3).attr({fill:'l(0,0,0,1)#888-#eee-#eee', stroke:"l(0,0,0,1)#eee-#555",strokeWidth:2});
			var p3 = knob.s.path(this.elements.medCircle4).attr({fill:'transparent', stroke:"l(0,0,0,1)#eee-#555",strokeWidth:2});
			var big1 = knob.s.path(this.elements.innerCircle1).attr({fill:"l(0,0,0,0.9)#fff-#999",
					strokeWidth:5, stroke:"l(0,0,0,1)#fff-#555",
					filter : knob.s.filter(Snap.filter.shadow(0, 95, 14, '#555',0.75))//основная тень от кнопы
						});
			var big2 = knob.s.path(this.elements.innerCircle2).attr({fill:'r(0.5, 0.5, 0.95)#fff-#999', //придаем легкую выпуклость большой кнопе
					opacity:0.4,
					stroke:"darkgrey",strokeWidth:0,
					filter : knob.s.filter(Snap.filter.shadow(0, -2, 5, '#eee'))//светлый блик на краю кнопы
						});
			var bluePointer  = knob.s.path(this.elements.bluePointer).attr({fill:knob.statusColors.active,  strokeWidth:12,
				stroke:'l(1,0,0,0)#888-#eee', });
				 bluePointer.transform( 'r'+bluePointerAngel+','+this.centerOfCnob.x+','+this.centerOfCnob.y+' s0.725');


                while (angle < knob.endengel) { //round scale generation
                     arrayp[i] = knob.s.path(this.elements.elOfscale);
					if (i >= parseInt(e.bluePointer)) {
						_color = knob.statusColors.passive;
						blueGlow ='';
						// arrayp[i].hover(function(el) {this.attr({fill:"LightSteelBlue",});
						// 					},
						// 				function(el) {
						// 						this.stop().animate({fill:_color,},1000, mina.elastic)
						// 					}
						// 				)
					}
					arrayp[i].attr({fill:_color, stroke:_color, transform: "r" + angle+','+this.centerOfCnob.x+','+this.centerOfCnob.y,
						filter :blueGlow
					});
                    angle += angelstep;
                    i++
                }


			function knobPattern(n){
				var circles = 'r(0.5, 0.5, 0.5)#fff-#999';
					for (var i = n - 2; i >= 0; i--) {
					 	circles+='-#fff-#999';
					 };
						 // console.log(circles);
						return circles
				}

			 pgrayPointer = knob.s.circle(923, 799, 15).attr({fill:"l(0,0,0,0.9)#999-#fff",strokeWidth:1, stroke:"#bbb"});
			pgrayPointerCircle1 =  knob.s.circle(923, 799, 7).attr({fill:"#888", stroke:"transparent",strokeWidth:2,
										});

			 pdragableKnobB = knob.s.circle(1029, 885, 90) //for white hotspot
					 .attr({
					 	fill:'r(0.5, 0.51, 0.51)rgba(255,255,255,0):90-white',
					 	stroke:"#fff",
					 	strokeWidth:0,
						 });

			 pdragableKnobC = knob.s.circle(1029, 885, 90) // for shadow
					 .attr({
					 	fill:'transparent',
					 	stroke:"l(0,0,0,1)rgba(255,255,255,0):50-#eee",
					 	strokeWidth:3,
					 	filter : knob.s.filter(Snap.filter.shadow(0, 5, 4, '#000'))
						 });
			 pdragableKnob3 = knob.s.circle(1029, 885, 50)
					.attr({
						cursor:'pointer',
						fill:knobPattern(knob.quantityOfCircle),
						 stroke:"darkgray",strokeWidth:1,
						 filter : knob.s.filter(Snap.filter.shadow(0, 30, 8, '#555', 0.55))
						});
			if (e.knobPos != undefined) {knob.initKnobPos(e.knobPos, pdragableKnobC, pdragableKnobB, pdragableKnob3 );}



			 svgText10 = knob.s.text(this.centerOfCnob.x,550, '$'+knob.textVol.planamount)
						 .attr({
						 	fontSize: '70px',
						 	strokeWidth: 1,
						 	stroke:"gray",
						 	fill: "gray",
						 	"text-anchor": "middle",
						 	"font-family":e.knobFont,
						    filter : knob.s.filter(Snap.filter.shadow(0, 5, 2, "#fff")),
						});
			 svgText11 = knob.s.text(this.centerOfCnob.x,550, '$'+knob.textVol.planamount)
						 .attr({
								fontSize: '70px',
								strokeWidth: 1,
							 	stroke:"gray",
							 	fill: "gray",
							 	"text-anchor": "middle",
							 	"font-family":e.knobFont,
								filter : knob.s.filter(Snap.filter.shadow(0, -3, 2, "#bbb")),
							});
			 var svgTextPlan = knob.s.text(this.centerOfCnob.x,470, "PLAN").attr({ fontSize: '45px',
			 	stroke:"#888",strokeWidth: 2,
			 	fill: "#888", "text-anchor": "middle", "font-family":e.knobFont,
			});
			 svgText20 = knob.s.text(this.centerOfCnob.x,750, '$'+knob.textVol.investmentamount).attr({ fontSize: '105px', strokeWidth: 4, stroke:knob.statusColors.active,
			 	fill:knob.statusColors.active, "text-anchor": "middle", "font-family":e.knobFont,
			  filter : knob.s.filter(Snap.filter.shadow(0, 6, 2, "#ddd")),
			  });
 			 svgText21 = knob.s.text(this.centerOfCnob.x,750, '$'+knob.textVol.investmentamount).attr({ fontSize: '105px', strokeWidth: 4, stroke:'l(0,0,0,1) white-'+knob.statusColors.active, opacity:0.45,
			 	fill:'l(0,0,0,1) white-'+knob.statusColors.active, "text-anchor": "middle", "font-family":e.knobFont,
			  filter : knob.s.filter(Snap.filter.shadow(0, -5, 2, "#bbb")),
			  });

			 var svgTextINVESTMENT = knob.s.text(this.centerOfCnob.x,810, "INVESTMENT").attr({ fontSize: '45px',
			 	stroke:"#666",strokeWidth: 2,
			 	fill: "#666", "text-anchor": "middle", "font-family":e.knobFont,
			});
			 var svgText0 = knob.s.text(265,995, "$0").attr({ fontSize: '32px',stroke:"grey",strokeWidth: 2,	fill: "grey", "text-anchor": "middle", "font-family":e.knobFont	});
			 svgText3 = knob.s.text(940,995, "$"+knob.textVol.planamount).attr({ fontSize: '32px',stroke:"grey",strokeWidth: 2,	fill: "grey", "text-anchor": "middle", "font-family":e.knobFont	});
			 var centralEllipse = knob.s.ellipse(this.centerOfCnob.x,this.centerOfCnob.y, 250,3).attr({fill:'l(0,1,0,0)#888-#eee',strokeWidth:0});



	function greyPointerCoords(x, y) {
			var radians;
	        x = x - canvas.center[0];
	        y = y - canvas.center[1];
	        var radians_ = Math.atan2(y, x)-0.038;
	           return {
	               cx: Math.cos(radians_) * 366 + canvas.center[0],
	               cy: Math.sin(radians_) * 366 + canvas.center[1],
	           }
	    }

	function limit(x, y) {
			var radians;
	        x = x - canvas.center[0];
	        y = y - canvas.center[1];
	        radians = Math.atan2(y, x);
			//check reaching ends of scale
	         console.log("radians befor comparisation  "+radians);
	        if (2.04>radians && radians>knob.luftAngel/57.3) {radians=0.99*knob.luftAngel/57.3; console.log(" radians AFTER 1 comparisation  "+radians);}
	          else
	          if (2.54>radians && radians>2.04 ) {radians=2.53; console.log(" radians AFTER 2 comparisation  "+radians);}

			//calculate % at the scale
			if (radians < 0) {
				knob.knobValue = (knob.luftAngel+((-1)*radians*57.3))/knob.endengel*100;
			}
			else {
				if ((radians*57.3) < knob.luftAngel) {knob.knobValue =  Math.abs((radians*57.3 -knob.luftAngel)/knob.endengel*100);}
					else
					 {knob.knobValue = Math.abs((180 - radians*57.3 + 180 + knob.luftAngel)/knob.endengel*100);}
			}
	        // console.log(Snap.deg(Math.abs(radians))+'From limit fun - knob.knobValue='+knob.knobValue);
	           return {
	               x: Math.cos(radians) * canvas.radius + canvas.center[0],
	               y: Math.sin(radians) * canvas.radius + canvas.center[1],
	               angl: radians*57.3
	           }
	    }

		function distance(dot1, dot2) {
		    var x1 = dot1[0],
		        y1 = dot1[1],
		        x2 = dot2[0],
		        y2 = dot2[1];
		    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
		}

		var move = function(dx, dy, x, y) {
			if( (typeof dx == 'object') && ( dx.type == 'touchmove') ) {//touch event
				       var x = dx.changedTouches[0].clientX;
				       var y = dx.changedTouches[0].clientY;
		    		  var result = limit(x*kScale, y*kScale);
				    }
				    else
		    		var result = limit(mousePos.x*kScale, mousePos.y*kScale);//mouse event

			att = {cx: result.x,cy:result.y};
            this.attr(att);
            pdragableKnobB.attr(att);
            pdragableKnobC.attr(att);
            pgrayPointerCircle1.attr(greyPointerCoords(result.x,result.y));
            pgrayPointer.attr(greyPointerCoords(result.x,result.y));
		}



		var start = function(event){console.log("Move start");
					this.data("ox", this.type == "rect" ? this.attr("x") : this.attr("cx") );
			        this.data("oy", this.type == "rect" ? this.attr("y") : this.attr("cy") );

//=========================== HOVER effect ============================================
			     //    pdragableKnobC.attr({"fill":knob.statusColors.active,opacity:"0.15"});
			     //    pgrayPointer.attr({"fill":"r(0.5,0.5,0.5)"+knob.statusColors.active+"-#eee",stroke:'transparent'});
			     //    pgrayPointerCircle1.attr({opacity:0});
		      //       if( (typeof x == 'object') && ( x.type == 'touchstart') ) {
					   //      x.preventDefault();
					   //      this.data('ox', x.changedTouches[0].clientX );
					   //      this.data('oy', x.changedTouches[0].clientY );

					   //       event.stopPropagation();
							 // event.preventDefault();
							 // event.target.className = 'selected';
					   //  }
					   // setTimeout(function(){ pw0.animate({opacity: 0.5 }, 1500);
								// 			  pw1.animate({opacity: 0.5 }, 1500);}
								//     , 100);
//======================================================================================
		};

		var stopE = function(event){
					console.log("Move stopped");
//=========================== HOVER effect ============================================
			  //       pdragableKnobC.attr({fill:"transparent"});
			  //       pdragableKnobC.animate({opacity: 1, }, 500);
			  //       pgrayPointer.attr({fill:"l(0,0,0,0.9)#999-#fff"});
			  //       pgrayPointerCircle1.attr({opacity:1});
			  //       pw0.animate({opacity: 1 }, 500);
					// pw1.animate({opacity: 0 }, 300);
//======================================================================================
					// event.stopPropagation();
					// event.preventDefault();
					// event.target.className = '';
		}


		pdragableKnob3.drag( move, start, stopE);

		pdragableKnob3.touchstart( start );
		pdragableKnob3.touchmove( move );
		pdragableKnob3.touchend( stopE );

		knob.drawBID();
	 },//end of init function

	drawBID : function (){

	 	var elements= {
	 		 circleB2:"M425 991c46,0 84,37 84,83 0,47 -38,84 -84,84 -47,0 -83,-37 -83,-84 0,-46 36,-83 83,-83z",
			 circleB3:"M425 1009c36,0 66,30 66,65 0,37 -30,66 -66,66 -36,0 -66,-29 -66,-66 0,-35 30,-65 66,-65z",
			 circleI2:"M610 1030c47,0 84,37 84,84 0,46 -37,83 -84,83 -46,0 -84,-37 -84,-83 0,-47 38,-84 84,-84z",
			 circleI3:"M610 1048c36,0 66,29 66,66 0,36 -30,66 -66,66 -36,0 -65,-30 -65,-66 0,-37 29,-66 65,-66z",
			circleD2:"M795 991c47,0 84,37 84,83 0,47 -37,84 -84,84 -46,0 -84,-37 -84,-84 0,-46 38,-83 84,-83z",
			circleD3:"M795 1009c37,0 66,30 66,65 0,37 -29,66 -66,66 -36,0 -66,-29 -66,-66 0,-35 30,-65 66,-65z"
	};

			var pb2  = knob.s.path(elements.circleB2).attr({fill:'transparent',strokeWidth:10,stroke:'r(0.5, 1, 1)#fff-#bbb'});
			var pb3  = knob.s.path(elements.circleB3).attr({fill:'l(0,1,0,0)#ddd-#fff-#fff',stroke:'transparent',
					filter : knob.s.filter(Snap.filter.shadow(0, 0, 14, knob.statusColors[this.BIDstatus.Bstatus]))
				});
			// console.log(knob.statusColors[this.BIDstatus.Bstatus]);

			var pI2  = knob.s.path(elements.circleI2).attr({fill:'transparent', strokeWidth:10,stroke:'r(0.5, 1, 1)#fff-#bbb'});
			var pI3  = knob.s.path(elements.circleI3).attr({fill:'l(0,1,0,0)#ddd-#fff-#fff',stroke:'transparent', strokeWidth:3,
					filter : knob.s.filter(Snap.filter.shadow(0, 0, 14, knob.statusColors[this.BIDstatus.Istatus]))
				});

			var pD2  = knob.s.path(elements.circleD2).attr({fill:'transparent', strokeWidth:10,stroke:'r(0.5, 1, 1)#fff-#bbb'});
			var pD3  = knob.s.path(elements.circleD3).attr({fill:'l(0,1,0,0)#ddd-#fff-#fff',stroke:'transparent', strokeWidth:3,
					filter : knob.s.filter(Snap.filter.shadow(0, 0, 14, knob.statusColors[this.BIDstatus.Dstatus]))
				})

			var circle4hiverB = knob.s.circle(425,1075, 1).attr({fill:'transparent',strokeWidth:0,stroke:'transparent',opacity:0.25});//circle which will be animated when hover on button
			 var  svgTextElementB = knob.s.text(400,1100, "B").attr({fontSize: '72px', strokeWidth: 5, "font-family":knobFont, stroke:knob.statusColors[this.BIDstatus.Bstatus], fill:knob.statusColors[this.BIDstatus.Bstatus]});
			 var circleB = knob.s.circle(425,1075,50).attr({strokeWidth: 2,fill:'transparent', stroke:'#aaa'});

			var circle4hiverD = knob.s.circle(795,1075, 1).attr({fill:'transparent',strokeWidth:0,stroke:'transparent',opacity:0.25});//circle which will be animated when hover on button
			 var svgTextElementD = knob.s.text(770,1100, "D").attr({fontSize: '72px', strokeWidth: 5, "font-family":knobFont, stroke:knob.statusColors[this.BIDstatus.Dstatus], fill:knob.statusColors[this.BIDstatus.Dstatus]});
			 var circleD = knob.s.circle(795,1075,50).attr({strokeWidth: 2,fill:'transparent', stroke:'#aaa'});


			var circle4hiverI = knob.s.circle(this.centerOfCnob.x,1113, 1).attr({fill:'transparent',strokeWidth:0,stroke:'transparent',opacity:0.25});//circle which will be animated when hover on button
			 var svgTextElementI = knob.s.text(this.centerOfCnob.x-8,1138, "I").attr({fontSize: '72px', strokeWidth: 5, "font-family":knobFont, stroke:knob.statusColors[this.BIDstatus.Istatus], fill:knob.statusColors[this.BIDstatus.Istatus]});
			 var circleI = knob.s.circle(this.centerOfCnob.x,1113,50).attr({strokeWidth: 2,fill:'transparent', stroke:'#aaa'});

			knob.BIDgroup1 = knob.s.group(pb2, pb3, circle4hiverB, svgTextElementB, circleB);
			knob.BIDgroup2 = knob.s.group(pI2, pI3, circle4hiverI, svgTextElementI, circleI);
			knob.BIDgroup3 = knob.s.group(pD2, pD3, circle4hiverD, svgTextElementD, circleD);
			//=================== Buttons B I D handlers ===================================
			knob.BIDgroup1.hover(function() {
											circle4hiverB.stop().attr({r:2,fill:knob.statusColors[knob.BIDstatus.Bstatus]});
											circle4hiverB.stop().animate({r:70},400,mina.easeinout);
										},
								function() {circle4hiverB.stop().attr({fill:'transparent'})
							})
						.click(function() {console.log('Button B clicked!')})
						.touchend(function() {console.log('Button B touched!')});

			knob.BIDgroup2.hover(function() {
											circle4hiverI.stop().attr({r:2,fill:knob.statusColors[knob.BIDstatus.Istatus]});
											circle4hiverI.stop().animate({r:70},400,mina.easeinout);
										},
								function() {circle4hiverI.stop().attr({fill:'transparent'})
							})
						.click(function() {console.log('Button I clicked!')})
						.touchend(function() {console.log('Button I touched!')});

			knob.BIDgroup3.hover(function() {
											circle4hiverD.stop().attr({r:2,fill:knob.statusColors[knob.BIDstatus.Dstatus]});
											circle4hiverD.stop().animate({r:70},400,mina.easeinout);
										},
								function() {circle4hiverD.stop().attr({fill:'transparent'})
							})
						.click(function() {console.log('Button D clicked!')})
						.touchend(function() {console.log('Button D touched!')});

			//=================== End of B I D handlers ===================================
	 }


};//end of knob object

Object.defineProperties(knob, {
	"setStatuses" : { set: function (val) {
		knob.BIDstatus = val;
		knob.BIDgroup1.remove();
		knob.BIDgroup2.remove();
		knob.BIDgroup3.remove();
		knob.drawBID();
	} }

});

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
    //         // Use pos.x and pos.y
        }
    }
})();


