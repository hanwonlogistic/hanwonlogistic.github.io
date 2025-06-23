$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp({
		load: {
		  filter: 'import'  // '수입' 항목만 보이게 초기 필터 설정
		}
	  });
	
	// 기본으로 '수입' 섹션만 보이게
	$(".biz-section").hide();      // 모든 섹션 숨기기
	$("#import").show();           // 수입만 보이기

	// 탭 클릭 시 동작
	$(".biz-tab").click(function () {
		var target = $(this).data("target");

		$(".biz-tab").removeClass("active");
		$(this).addClass("active");

		$(".biz-section").hide();
		$("#" + target).fadeIn(300);
	});


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




