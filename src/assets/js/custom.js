/**/
	/* quick search */
	   /**/
	   $(document).ready(function(){
	$('#quick-search-switcher').on('click', function()
	{
		$('#quick-search').toggleClass('quick-search-visible');
	});
	
	 var docs = [
	 { value: 'Dr. Butcher House', data: 'staff-page.html' },
	 { value: 'Dr. Brick Wall', data: 'staff-page.html' },
	 { value: 'Dr. Sno White', data: 'staff-page.html' },
	 { value: 'Dr. Mangle Taleebin', data: 'staff-page.html' },
	 { value: 'Dr. Grim Frog', data: 'staff-page.html' },
	 { value: 'Dr. Earlene Milone', data: 'staff-page.html' },
	 { value: 'Dr. Grim Reaper', data: 'staff-page.html' },
	 { value: 'Dr. Jane Doe', data: 'staff-page.html' }];     
	  
	 // setup autocomplete function pulling from docs[] array
	 $('#docname').autocomplete({
	  lookup: docs,
	  onSelect: function(suggestion) {
	            var url = suggestion.data;
	            if(url != '#') {
	                location.href = url;
	            }
	        }
	 })});

	 function sticky (){
		var sticky_container = $(".header-container")
		var sticky = $(".header-body")
		var sticky_height = $(".header-body").outerHeight();
		var offset_top_sticky = sticky.offset().top
		if ($(window).width()>767) {
			if (!$(".header-body>.header-container").hasClass("second-sticky")) {
				$(sticky).append($(sticky_container)[0].outerHTML)
			}
			$(sticky).find(">.header-container").addClass("second-sticky");
			$(window).scroll(function (){
				if (jQuery(document).scrollTop()>(offset_top_sticky + (2*sticky_height))) {
					$(sticky).addClass("show");
				}else{
					$(sticky).removeClass("show");
				}
				if ($(window).width()<767){
					$(sticky).removeClass("show");
				}
			});
		}else{
			$(sticky).removeClass("show")
			$(".header-body>.header-container").remove()
		}	
	}

	/* signup */
	$(document).ready(function(){
		$("select").change(function(){
			$(this).find("option:selected").each(function(){
				var optionValue = $(this).attr("value");
				if(optionValue){
					$(".role").not("." + optionValue).hide();
					$("." + optionValue).show();
				} else{
					$(".role").hide();
				}
			});
		}).change();
	});