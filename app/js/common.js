$(function() {

	var $win = $(window), $marker = $('.chart');

	function setOnScroll() {
	  $win.scroll(function() {
	      if ($win.scrollTop() + $win.height() >= $marker.offset().top) {

			$('.percentage').easyPieChart({
				scaleColor: false,
				lineWidth: 3,
				lineCap: 'butt',
				barColor: '#5b529d',
				trackColor:	"#ffffff",
				size: 170,
				animate: 1000,
				onStep: function(value) {
			    	this.$el.find('span').text(Math.round(value));
			  	},
				onStop: function(value, to) {
					this.$el.find('span').text(Math.round(to));
				}
			});

	      }
	  });
	};

	setOnScroll();


	$('.address label').click(function() {
		$('.modal').fadeIn();
	});
	$('.modal-bg').click(function() {
		$('.modal').fadeOut();
	});
});
