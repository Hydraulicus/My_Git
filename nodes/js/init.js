

 var paper = Snap("#nodes");

 var circleR=8;
 var f = paper.filter(Snap.filter.shadow(2, 2, 15, 'white'));
 var gradien4circle = paper.gradient("r(0.5, 0.5, 0.5)#fff-LightSkyBlue-#229");
 var style = {fill:gradien4circle, filter:f, stroke:"transparent", strokeWidth:10};
 // var style = {fill:"LightSkyBlue", stroke:"transparent", strokeWidth:10};
 var path = paper.path("").attr({stroke:"DodgerBlue", fill:"transparent", strokeWidth:1});

 var stickFlag = false;
 var clickFlag = false;
 var dragFlag = false;



 var pathArray =[];

 function apdatePath(){

 	var first = pathArray[0];
 	pathString = ' M '+first.x+', '+first.y;
 	for (var node in pathArray) {
	 		// if (!stickFlag&& node==pathArray.length)
	 		// 	pathString += ' L '+ pathArray[node].x+', '+ pathArray[node].y;
	 		// 	else
			 		pathString += ' L '+ pathArray[node].x+', '+ pathArray[node].y;

	 	}
 	path.attr({'d': pathString});

 	path.animate({stroke:'LightSkyBlue',	},300, mina.bounce,
 		function(){path.animate({stroke:'DodgerBlue',	}, 100, mina.linear)}
 	);


var text = paper.text(50,50,'transaction')
        .attr({ 'textpath': path, fill:"DodgerBlue" })
        .textPath.animate({ 'startOffset': path.getTotalLength() }, path.getTotalLength()*2, function(){this.animate({opacity: 0}, 1000, mina.linear);} );



    paper.mousemove(function(e) {
    	if (!stickFlag) {
			var qqqq = document.getElementsByTagName('line');
			qqqq[0].attributes.x2.value=e.offsetX-2;
			qqqq[0].attributes.y2.value=e.offsetY-2;
			}
  });

 };

   function apdatePromin(x0, y0, x1, y1){

    };


  paper.click( function(e){
  	var qqqq = document.getElementsByTagName('line');
  	var x4circleDraw = e.offsetX;
  	var y4circleDraw = e.offsetY;
  	clickFlag = true;
	if ((e.target.tagName == 'svg')||(e.target.tagName == 'circle')&&(!dragFlag))
	{console.log('mouseclick, clickFlag='+clickFlag+' stickFlag='+stickFlag);
if (stickFlag) {x4circleDraw = qqqq[0].attributes.x2.value; y4circleDraw = qqqq[0].attributes.y2.value};
		paper
		.circle(x4circleDraw, y4circleDraw, circleR)
		.drag(function(dx, dy, x, y ){dragFlag = true;
			this.attr({
				cx: x,
				cy: y
				})
			dragFlag = true;
			var currentNode = pathArray[this.data('i')];
			currentNode.x = x;
			currentNode.y = y;
			apdatePath();
		},
		function(){path.stop().animate({opacity:0.2},300,mina.easeinout)},
		function(){path.stop().animate({opacity:1.0},300,mina.easeinout)}
		)
		.mouseover(function(el) {console.log('mouseover, clickFlag='+clickFlag);
			/* Stuff to do when the mouse enters the element */
			this.stop().animate({
				r: (circleR*2),
				opacity:0.6,

				// fill:'white',
				},
				1000, mina.elastic
				)
			var currentNode = pathArray[this.data('i')];
		  	var qqqq = document.getElementsByTagName('line');
			qqqq[0].attributes.x2.value = currentNode.x;
			qqqq[0].attributes.y2.value = currentNode.y;
			stickFlag = true;
		})
		.mouseout(function() {
			/* Stuff to do when the mouse leaves the element */
			stickFlag = false;
			dragFlag = false;
			this.stop().animate({
				r: circleR,
				opacity:1.0
				// fill:'LightSkyBlue',
				// stroke:'red',
				// stroke:'transparent',
				},
				500, mina.elastic
				// 500, mina.easeinout
				)
			})

		.attr(style)
		.data('i', pathArray.length);

		if (!stickFlag) {
				pathArray.push({x:e.offsetX, y:e.offsetY});
			}
			else {pathArray.push({x:qqqq[0].attributes.x2.value, y:qqqq[0].attributes.y2.value})};

		 // paper.text(e.offsetX, e.offsetY, pathArray.length)
		 // .attr({'font-family':"Verdana", 'font-size':"5", fill:"blue", opacity:0.95 });


		// if (!stickFlag)

			paper.line(e.offsetX, e.offsetY, e.offsetX, e.offsetY)
			.attr({stroke:"#9ef", fill:"transparent", strokeWidth:2});

		var qqqq = document.getElementsByTagName('line');
		qqqq[0].attributes.x1.value=x4circleDraw;
		qqqq[0].attributes.y1.value=y4circleDraw;

		apdatePath();
		clickFlag= false;
	}
});


    var pattern = Trianglify({
    	 // x_colors: ['#000000', '#4CAFE8', '#222'],
    	 x_colors: ['#000000', 'DarkSlateBlue', '#222'],
		  y_colors: ['DarkSlateBlue', '000', 'DarkSlateBlue'],
cell_size: 80, seed: '8jw9l',
        width: window.innerWidth,
        height: window.innerHeight,
    });
    document.body.appendChild(pattern.canvas())

// =====================================
// Free for hire
// Skype: zababurinalex;
// Emails:  852gin@gmail.com, alexei.zababurin@gmail.com
// Phone number:+38(050)800-5770
//  =====================================