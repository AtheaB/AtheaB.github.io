
//FOOTER//
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//     } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//     });
// }

//Overlay//
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

//ABOUT-US//
// $(".about-details").last().css( "border-bottom", "none" );

// $('.updates-list').find('.row:last').removeClass('.hr_style2');

// $('.promo-list').children('.col-lg-12').last().removeClass('.hr_style2');

// $(".updates-list").last().css( "border-bottom", "none" );


var $ = jQuery;
$(document).ready(function(){
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      } 
      });
  }
  
  //ABOUT-US//
  // $(".about-details").last().css( "border-bottom", "none" );
  //UPDATES//
  $(".updates-details").last().css( "border-bottom", "none" );
  
  $('.block-gtranslate select').addClass('notranslate');
  $('.region-gtranslate select option[value=""]').remove();    
  $('.region-gtranslate select option[value="en|en"]').attr("selected",true);

  // $('.updates-list').find('.row:last').removeClass('.hr_style2');

  // $('.promo-list').children('.col-lg-12').last().removeClass('.hr_style2');

  // $(".updates-list").last().css( "border-bottom", "none" );

  // if (typeof value === "undefined") {
  //   $('.updates-list').find('.row:last').removeClass('.hr_style2');
  // }
  // $(".updates-list").find('.row:last').find('hr').css( "border-bottom", "none" );
  $('.promo-list').find('.row:last').find('hr').css( "border", "transparent" );





  // Daterange booking
  $('input[name="daterange"]').each(function(v) {

		var initialvalue = this.value;
		var defaults = {
			minDate:new Date(),
			startDate: new Date(),
			endDate: moment().add(1, 'day'),
			locale: {
				monthNames: moment.months()
				},
			autoApply: true,
			// parentEl: $(this).closest('.inputted')
		};

		if(!!$(this).data('seperator')) {
			if(defaults.hasOwnProperty('locale')) {
				defaults.locale.separator = ' ➜ ';
			}
			else {
			defaults.locale = {
				separator: ' ➜ '
			}

			}
		}

		$this = $(this);
 
		$this.daterangepicker(defaults);
		$this.val( initialvalue );
		$this.on('change', function(e) {
		// if($(this).hasClass('checkout')) {
			$(this).addClass('color-black');
		// }
		});

	})
  
  // BOOKING GUEST



});

  //Testimonial
   // Testimonial Carousel//
  //  var slideIndex = 1;
  //  showSlides(slideIndex);
   
  //  function plusSlides(n) {
  //    showSlides(slideIndex += n);
  //  }
   
  //  function currentSlide(n) {
  //    showSlides(slideIndex = n);
  //  }
   
  //  function showSlides(n) {
  //    var i;
  //    var slides = document.getElementsByClassName("mySlides");
  //    var dots = document.getElementsByClassName("dot");
  //    if (n > slides.length) {slideIndex = 1}    
  //    if (n < 1) {slideIndex = slides.length}
  //    for (i = 0; i < slides.length; i++) {
  //        slides[i].style.display = "none";  
  //    }
  //    for (i = 0; i < dots.length; i++) {
  //        dots[i].className = dots[i].className.replace("active", "");
  //    }
  //    slides[slideIndex-1].style.display = "block";  
  //    dots[slideIndex-1].className += "active";
  //  }

   ///////////////
   var slideIndex2 = 1;
   showSlidess(slideIndex2);
   
   function plusSlidess(n) {
    showSlidess(slideIndex2 += n);
  }
  
  function currentSlides(n) {
    showSlidess(slideIndex2 = n);
  }
  
  function showSlidess(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidess");
    var dots = document.getElementsByClassName("dotted");
    if (n > slides.length) {
      slideIndex2 = 1
    }
    if (n < 1) {
      slideIndex2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides.length > 0) {
      slides[slideIndex2 - 1].style.display = "block";
      dots[slideIndex2-1].className += "active";
    }
    
  }

var slideIndex2 = 1;
showSlidess(slideIndex2);

function plusSlidess(n) {
  showSlidess(slideIndex2 += n);
}

function currentSlidess(n) {
  showSlidess(slideIndex2 = n);
}

function showSlidess(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlidess");
  var dots2 = document.getElementsByClassName("dotted");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
}



  //booking
var $popover = $('.booknow-trigger').popover({
  html: true,
  sanitize: false,
  placement: 'bottom',
  // title: '<?= lang("Select person");?><a class="close demise");">×</a>',
  content: function () {
    return $('.popover-markup').find('.content').html();
  }
});	

// if(!$('.booknow-trigger').is(e.target) && !$(e.target).hasClass('fa-close')
  $(document).on('click',function(e){
  if(!$('.booknow-trigger').is(e.target) && !$(e.target).hasClass('fa-close') && $(e.target).closest('.popover').length === 0 && $('.popover').length >= 1) {
    $('.popover').parent().find('.booknow-trigger').trigger('click');
  }
  });



$(document).ready(function(){
  
(function() {
  var _numspinner = function(numspinner) {

    var _update_label = function(_inputbox) {
      var parentdiv = _inputbox.closest('div');
      var labels = {
        'adults': parentdiv.find('.adult_label'),
        'child': parentdiv.find('.child_label')
      }				
      labels[_inputbox.attr('id')].text(_inputbox.val());
    }

    var _ret = {
      inputbox : numspinner.find('input'),

      increase: function() {
        this.inputbox.val( parseInt(this.inputbox.val()) +1 );
        this.update_label();
      },
      decrease: function() {
        this.inputbox.val( parseInt(this.inputbox.val()) -1 );
        this.update_label();
      },

      value: function(_newvalue) {
        if(!_newvalue) {						
          return this.inputbox.val();
        }
        this.inputbox.val( _newvalue );
        this.update_label();
      },

      update_label: function() {
        _update_label(this.inputbox);
      }
    }

    return _ret;
  }
  // var _fetch_row = function($row) {
  // 	$('.number-spinner').each(function(v) {
  // 		console.log(v);
  // 	})
    
  // 	return {
  // 		value: function(adult, child) {

  // 		}
  // 	}
  // }
  var _clone_first_row = function(tbll) {
    var _cache_firstrow = tbll.find('tbody tr.clone:first-child').clone();
      _cache_firstrow.find('.number-spinner').each(function(v) {
        _numspinner($(this)).value(1);
      })
      _cache_firstrow.find('.room-ctr').text(tbll.find('tbody tr.clone').length + 1);
    
    // _fetch_row(_cache_firstrow).value(1,1);
    return _cache_firstrow;
  }

  var _update_total_rooms = function(_form) {

    var rooms = (function() {
      var _rooms = [];
        _form.find('.popover-content')
          .find('.tbll tbody tr.clone').each(function(row) {
            var _inputs = {};
            $(this).find('.number-spinner').each(function(v) {
              var _inputbox = _numspinner($(this)).inputbox;
              _inputs[_inputbox.attr('id')] = _inputbox.val();
            })
            _rooms.push(_inputs);
          })
        return _rooms;
    })();

    var aggregate_rooms = rooms.reduce(function(p,v) {
      if(v.hasOwnProperty('adults')) {
        p.adults += parseInt(v.adults);
        p.adults_arr.push(v.adults);
      }
      if(v.hasOwnProperty('child')) {
        p.child += parseInt(v.child);
        p.child_arr.push(v.child);
      }
      return p;
    }, {adults:0, child: 0, adults_arr: [], child_arr: [], rooms: rooms.length});
    
    var totalrooms = [
      aggregate_rooms.rooms+" Room",
      aggregate_rooms.adults+" Adult",
      aggregate_rooms.child+" Children"
    ].join(', ');

    _form.find('#person').attr('placeholder',  totalrooms );
    _form.find('#room_count').val(aggregate_rooms.rooms);
    _form.find('#adult_count').val(aggregate_rooms.adults_arr.join(','));
    _form.find('#child_count').val(aggregate_rooms.child_arr.join(','));

    if(_form.find('#person').hasClass('person')) {
    _form.find('#person').addClass('color-black');
    }
    return totalrooms;
  }


  /*$(document).on('click','.contact-us-front-plan label',function(){
    console.log($('#edit-submitted-front-plan-upload').val());
  });*/

  $(document).on('change','#edit-submitted-front-plan-upload',function(e){
    $('.contact-us-front-plan label').html(e.target.files[0].name);
  });

  $(document).on('change','#edit-submitted-side-plan-upload',function(e){
    $('.contact-us-side-plan label').html(e.target.files[0].name);
  });

  $(document).on('change','#edit-submitted-acress-plan-upload',function(e){
    $('.contact-us-acress-plan label').html(e.target.files[0].name);
  });

  $(document).on('change','#edit-submitted-adjacent-plan-upload',function(e){
    $('.contact-us-adjacent-plan label').html(e.target.files[0].name);
  });

  $(document).on('change','#edit-submitted-ja-resume-upload',function(e){
    $('.job-application-resume label').html(e.target.files[0].name);
  });

  $('.bg_bookingform, .booking_popup_form_container').on('click', '.room-controls', function () {

    var is_up 	= $(this).data('dir') == 'up';
    var is_down = $(this).data('dir') == 'dwn';

    var numspinner = _numspinner($(this).closest('.number-spinner'));

      if(is_up && 
        parseInt(numspinner.value()) +1 <= parseInt(numspinner.inputbox.data('max'))
      ) {
        numspinner.increase();
      }

      if(is_down && 
        parseInt(numspinner.value()) -1 >= parseInt(numspinner.inputbox.data('min'))
      ) {
        numspinner.decrease();
      }
      
    _update_total_rooms($(this).closest('form'));
  });

  $('.bg_bookingform, .booking_popup_form_container').on('click', '.add-room', function () {
    var tbll = $(this).closest( '.popover-content' ).find('.tbll');
    
    if(tbll.find('tr.clone').length >= 10) {
      $('.add-room').hide();
      return;
    }

    if(tbll.find('tr.clone').length >= 9) {
      $('.add-room').hide();
      
    }
    _clone_first_row(tbll).appendTo(tbll);
    
    if(tbll.find('tr.clone').length > 1) {
      tbll.find('.fa.fa-close.hide').removeClass('hide');
    }
    
    _update_total_rooms(tbll.closest('form'));
  });

  $('.bg_bookingform, .booking_popup_form_container').on('click', '.fa-close', function () {
    
    var tbll = $(this).closest('.tbll');
  
    
    if(tbll.find('tr.clone').length > 1) {
      $(this).closest('tr.clone').empty().remove();
    }
    if(tbll.find('tr.clone').length == 1) {
      tbll.find('.fa.fa-close').addClass('hide');
    }

    if(tbll.find('tr.clone').length < 10) {
      $('.add-room').show();
    }

    tbll.find('tr.clone').each(function(i) {
      $(this).find('.room-ctr').text(parseInt(i)+1);
    })
    
    _update_total_rooms(tbll.closest('.booking_form'));
  });



  $popover.on("shown.bs.popover", function(e) {

    var _form = $(this).closest('.booking_form');
    var initial_values = {
      'rc': _form.find('input[name=rc]').val(),
      'ac': _form.find('input[name=ac]').val().split(','),
      'cc': _form.find('input[name=cc]').val().split(','),
    }
    
    if(initial_values['rc'] != '') {
      
      for (i = 1; i < parseInt(initial_values['rc']); i++) {
        _form.find('.popover .add-room').trigger('click');
      }

      _form.find('.popover input#adults').each(function(v) {				
        _numspinner($(this).closest('.number-spinner')).value(initial_values['ac'][v]);
      })
      _form.find('.popover input#child').each(function(v) {				
        _numspinner($(this).closest('.number-spinner')).value(initial_values['cc'][v]);
      })
      _update_total_rooms(_form);

    }

    if(_form.find('.popover input#adults').length > 1) {
      _form.find('.popover .fa.fa-close.hide').removeClass('hide');
    }

  });

})();

});




/* HOTELS BANNER */
var bannerslideIndex = 1;
bannershowSlides(bannerslideIndex);

function bannerplusSlides(n) {
  bannershowSlides(bannerslideIndex += n);
}

function bannercurrentSlide(n) {
  bannershowSlides(bannerslideIndex = n);
}

function bannershowSlides(n) {
  var i;
  var bannerslides = document.getElementsByClassName("mySlidesimg");
  var bannerdots = document.getElementsByClassName("banner-demo");
  if (n > bannerslides.length) {bannerslideIndex = 1}
  if (n < 1) {bannerslideIndex = bannerslides.length}
  for (i = 0; i < bannerslides.length; i++) {
      bannerslides[i].style.display = "none";
  }
  for (i = 0; i < bannerdots.length; i++) {
      bannerdots[i].className = bannerdots[i].className.replace(" active", "");
  }
  bannerslides[bannerslideIndex-1].style.display = "block";
  bannerdots[bannerslideIndex-1].className += " active";
}

/*ROOM SLIDER */
var roomslideIndex = 1;
roomshowSlides(roomslideIndex);

function roomplusSlides(n) {
  roomshowSlides(roomslideIndex += n);
}

function roomcurrentSlide(n) {
  roomshowSlides(roomslideIndex = n);
}

function roomshowSlides(n) {
  var i;
  var roomslides = document.getElementsByClassName("roomSlidesimg");
  var roomdots = document.getElementsByClassName("room-demo");
  if (n > roomslides.length) {roomslideIndex = 1}
  if (n < 1) {roomslideIndex = roomslides.length}
  for (i = 0; i < roomslides.length; i++) {
      roomslides[i].style.display = "none";
  }
  for (i = 0; i < roomdots.length; i++) {
      roomdots[i].className = roomdots[i].className.replace(" active", "");
  }
  roomslides[roomslideIndex-1].style.display = "block";
  roomdots[roomslideIndex-1].className += " active";
}


/* SELECT DROPDOWN */
function format(state) {
  if (!state.id) return state.text; // optgroup
  return state.text;
}

$("#e2_2").select2({
  placeholder: "Select a state or many…",
  formatResult: format,
  formatSelection: format,
  escapeMarkup: function(m) { return m; }
});

$(document).ready(function() {
  $('.dropdown li').click(function () {
    var li = $(this).closest('li');
    li.find(' > ul').slideToggle(160);
}); 
})


// OWL CAROUSEL
$(document).ready(function($) {
	var xhtmlWidth = $('html').innerWidth();
	var htmlMetaContent = "width=device-width, initial-scale=1.0";
	if(xhtmlWidth >= 320 && xhtmlWidth <= 740){
		htmlMetaContent = "width=device-width, initial-scale=1.0, user-scalable=no";
	}

	$('meta[name=viewport]').attr("content", "");
	$('meta[name=viewport]').attr("content", htmlMetaContent);

	var getzoom = function() {
		var htmlWidth = $('html').innerWidth();
		var zoom = 1;

		if(htmlWidth > 740 && htmlWidth <= 1023) {
			zoom = 0.60;
		}
	
		if(htmlWidth >= 1024 && htmlWidth <= 1336) {
			zoom = 0.75;
		}

		

		return zoom;
	}

	var isTransformScale = function() {
		var ua = navigator.userAgent;
		// var isiPad = navigator.userAgent.match(/iPad/i) != null || /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);
		// var isFirefox = ua.indexOf("Firefox") != -1 || ua.indexOf("Mozilla") != -1;
		var isFirefox = ua.toLowerCase().indexOf('firefox') > -1;
		var isiPad = (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream;

		return isiPad || isFirefox;
	}

	function resetZoom() {
		$("body").css('transform', '');
		$("body").css('-ms-transform', '');
		$("body").css('transform-origin', '');
		$("body").css('width', '');
		$("body").css('zoom', getzoom());
	}
	function scaleWidth() {
		$("body").css('width', $('html').innerWidth() * (1/getzoom()));
	}

	function scaleZoom() {
		
			$("body").css('zoom', 1);

			var scale = getzoom();
			if(scale != 1) {
				$("body").css('-ms-transform', 'scale(' + scale + ')');
				$("body").css('transform', 'scale(' + scale + ')');
				$("body").css('transform-origin', 'left top');
			}
			
	} 

	var owlObjects = function($owl) {

		var _ret = {};
			_ret.children = $owl.children();

		function slider_items() {
			return (!$owl.data('item') ? 3: $owl.data('item'));
		}

		function slite_trigger_count() {
			
			var t = (!$owl.data('item') ? 4: $owl.data('item'));
			var htmlWidth = $('html').innerWidth();
			
			if(htmlWidth >= 320 && htmlWidth <= 740) {
				if($owl.data('mobileMintrigger') !== undefined){
					t = (!$owl.data('item') ? 4: $owl.data('item'));
				}else{
					t = (!$owl.data('item') ? 3: $owl.data('item'));
				}	
					
			}
		
			return t;
	
		}

		function create_grid_center(slider) {
			slider.addClass('grid-center');
		}

		function create_gallery_pager(slider) {
			
			slider.addClass('owl-nav-gallery');
			slider.wrap('<div class="owl-nav-gallery-outer"></div>');
			
			var container = slider.closest('.owl-nav-gallery-outer');
				container.append('<div class="owl-img-navs-outer"><div class="owl-img-navs owl-carousel"></div></div>');

				container.find('.owl-item > div').each(function (i) {
					container.find('.owl-img-navs').append('<div class="owl-img-nav" data-index="'+ i +'"><img src="'+ $(this).data('thumb') +'"></div>');
				});

			var itemLength = container.find('.owl-item > div').length;
				
			var navgallery = container.find('.owl-img-navs').owlCarousel({
				items: $('html').innerWidth() <= 740 ? 5: 6,
				center: 'custom-nav',
				// center: false,
				// loop: itemLength > 3 ? true:false,
				nav: false,
			});

			slider.on('changed.owl.carousel', function(event) {
				navgallery.trigger('to.owl.carousel', event.item.index);
				navgallery.find('.owl-stage').find('.selected').removeClass('selected');
				navgallery.find('.owl-stage > .owl-item').eq(event.item.index).addClass('selected');
			})
			if(navgallery.find('.owl-stage > .owl-item').length > 0) {
				navgallery.find('.owl-stage > .owl-item').eq(0).addClass('selected');
			}
			if (isTransformScale()) {
				navgallery.on('resize.owl.carousel', function(e) {
						e.preventDefault();
				});
			}

			navgallery.on('click', '.owl-img-nav', function() {
				slider.trigger('to.owl.carousel', $(this).data('index'));
			});

			return navgallery;
		}
		

		_ret.initialize = function() {
			
			if(this.children.length < slite_trigger_count()) {

				create_grid_center($owl);
			}
			else {

			
				$owl.owlCarousel({
					nav: true,
					navText: [
						"<i class='fa fa-angle-left'></i>",
						"<i class='fa fa-angle-right'></i>"
						],
					responsive : {
						0 : {
							items: 1,
							autoheight: true
						},
						741 : {
							items: slider_items(),
						}
					}
				})
				if (isTransformScale()) {
					$owl.on('resize.owl.carousel', function(e) {
							e.preventDefault();
					});
				}

				if($owl.data('navgallery')) {
					create_gallery_pager($owl);
				};


			}			

			delete this.initialize;			
			return this;
		}


		return _ret.initialize();
		
	}

	var loadSliders = function() {

		var owlSliders = [];
		$('.owl-carousel').each(function() {
			var slider = new owlObjects($(this));

			owlSliders.push(slider);
		});
		
		return owlSliders;
	}

	var unloadSliders = function() {
		$('.owl-carousel').each(function() {
			$this = $(this);
			$this.addClass('show');
			$this.owlCarousel('destroy');

			if($this.hasClass('owl-img-navs')) {
				$this.closest('.owl-img-navs-outer').empty().remove();
			}

			if($this.data('navgallery')) {
				$this.removeClass('owl-nav-gallery');
				$this.unwrap();
			}
		});
	}

	if(isTransformScale()) {

		function reloadSlider() {
			scaleWidth();
			loadSliders();
			scaleZoom();
		}

		$( window ).resize(function() { 
			resetZoom();
			unloadSliders();
			reloadSlider();
		});
		reloadSlider();
		
		$('#social_side_links').insertAfter( $('body') );
		$('#bookNow').insertAfter( $('body') );
		$('.overlay').css('position', 'absolute');
	}
	else {
		loadSliders();
	}

});

var owlConstructor = $.fn.owlCarousel.Constructor;
owlConstructor.prototype.coordinates = function(position) {
	var multiplier = 1,
		newPosition = position - 1,
		coordinate;

	if (position === undefined) {
		return $.map(this._coordinates, $.proxy(function(coordinate, index) {
			return this.coordinates(index);
		}, this));
	}

	if(this.settings.center == 'custom-nav') {
		var htmlWidth = $('html').innerWidth();
		var maxlen = 6;
		if(htmlWidth >= 320 && htmlWidth <= 740) {
			maxlen = 5;	
				
		}
		if(this._items.length <= maxlen) {
			return this._coordinates[0] * (this._items.length-maxlen) * 0.5;
		}
		else if(this._items.length > maxlen && this._current  < Math.floor(maxlen/2)) {
			return 0;
		}
		else if(this._items.length > maxlen && this._items.length - this._current <= Math.floor(maxlen/2)) {
			return Math.ceil(this._coordinates[this._items.length - 1 - maxlen]);
		}
	}
	if (this.settings.center) {
		if (this.settings.rtl) {
			multiplier = -1;
			newPosition = position + 1;
		}

		coordinate = this._coordinates[position];
		coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
	} else {
		coordinate = this._coordinates[newPosition] || 0;
	}

	coordinate = Math.ceil(coordinate);

	return coordinate;
};
owlConstructor.prototype.animated = owlConstructor.prototype.animate;
owlConstructor.prototype.animate = function(coordinate) {
	if(this.settings.center != 'custom-nav') {
		return this.animated(coordinate);
	}	
	// console.log(this.current(), coordinate, this.coordinates(this._current));
	return this.animated(coordinate);
}


