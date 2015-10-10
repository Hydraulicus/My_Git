 $(document).ready(function(){







$(".logo").hover(function(){//console.log("hover +"+this);
      $(this).css('transform', 'scale(1.4)');
      $(this).css('-webkit-transform', 'scale(1.4)');
      },
      function() {
      $(this).css('transform', 'scale(1)');
      $(this).css('-webkit-transform', 'scale(1)');
    });

});