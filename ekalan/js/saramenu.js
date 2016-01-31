var svg = document.getElementById('menu'),
    itemsContainer = document.getElementById('itemsContainer'),
    trigger = document.getElementById('trigger'),
    label = trigger.querySelectorAll('#label')[0],
    items = Snap(itemsContainer),
    originalTransform = itemsContainer.getAttribute("transform"),
    open = false;

//close items
items.animate({
    transform: "s0,0,250,250",
    opacity: 0
}, .005);
svg.style.pointerEvents = "none";
//attach listener
trigger.addEventListener('click', toggleMenu, false);



//handle click
function toggleMenu(event) {
    if (!event) var event = window.event;
    event.stopPropagation();

    open = !open;

    if (!open) {
        items.animate({
            transform: "s0,0,250,250",
            opacity: 0
        }, 400, mina.backin);
        label.innerHTML = "Тип";
        svg.style.pointerEvents = "none";
    } else {
        items.animate({
            transform: originalTransform,
            opacity: 1
        }, 1000, mina.elastic);
        label.innerHTML = "Скрыть";
        svg.style.pointerEvents = "auto";
    }
}


svg.onclick = function (e) {
    //
    e.stopPropagation();
}
//close the nav when document is clicked
document.onclick = function () {
    open = false;
    items.animate({
        transform: "s0,0,250,250",
        opacity: 0
    }, 400, mina.backin);
    label.innerHTML = "Тип";
    svg.style.pointerEvents = "none";
};




document.querySelector('#item-1').addEventListener('click', function(){
      console.log('addTableTop');
      wholeTable.S[1]=Object.create(TableTop).constructor(wholeTable.S[0].L, wholeTable.S[0].W, 450, 2500, [2,3], 'Левое крыло'); console.dir(wholeTable.S);   mainCountur.front.animate({'d':wholeTable.tableCountur}, 750, mina.bounce, function(){
                // that.transform( oldMatrix );
                graphModel.drawDragCountuor(graphModel.views.front, wholeTable.array4Drag);
                zoom0(graphModel.views.front);
                graphModel.drawCircles(graphModel.views.front, wholeTable.aC);});
      mainCountur.izometr.animate({'d':wholeTable.tableCountur}, 750, mina.elastic, function(){ zoom0(graphModel.views.izometr);});
    }, false);

document.querySelector('#item-2').addEventListener('click', function(){ window.location.reload() });

document.querySelector('#item-3').addEventListener('click', function(){
      console.log('addTableTop');
      wholeTable.S[1]=Object.create(TableTop).constructor(wholeTable.S[0].L, wholeTable.S[0].W, 450, 2500, [2,3], 'Правое крыло');
      wholeTable.S[2]=Object.create(TableTop).constructor(0, wholeTable.S[0].W, 600,1200, [2,3]);
      console.dir(wholeTable.S);
      mainCountur.front.animate({'d':wholeTable.tableCountur}, 750, mina.bounce, function(){
                // that.transform( oldMatrix );
                graphModel.drawDragCountuor(graphModel.views.front, wholeTable.array4Drag);
                zoom0(graphModel.views.front);
                graphModel.drawCircles(graphModel.views.front, wholeTable.aC);});
      mainCountur.izometr.animate({'d':wholeTable.tableCountur}, 750, mina.elastic, function(){ zoom0(graphModel.views.izometr);});
    }, false);