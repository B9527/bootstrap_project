$(function(){
            var myElement= document.getElementById('carousel-example-generic')
            var hm=new Hammer(myElement);
            hm.on("swipeleft",function(){
                $('#carousel-example-generic').carousel('next')
            })
            hm.on("swiperight",function(){
                $('#carousel-example-generic').carousel('prev')
            })
       });
        $(document).ready(function(){
			$(".breadcrumb li a").mouseover(function(){
				$(this).addClass("active").parent().siblings().find("a").removeClass("active");
			})
		});
		$(function () {    
            $(window).scroll(function () {    
                if ($(window).scrollTop() > 60) {     
                    $('.navbar-itcast').css('border-bottom','1px solid #ccc');    
                    }    
	            else {     
	                $('#top img').css('display','none');    
	            }    
	        });    
	    }); 
		$(function(){
        	$(window).scroll(function () {    
                if ($(window).scrollTop() > 50) {
		        	$('#feature img').show(function(){
						$(this).stop().animate({'margin-top':'-20','opacity':'1'}, 500);
					});
				};    
	        }); 
		});
		$(function(){
        	$(window).scroll(function () {    
                if ($(window).scrollTop() > 400) {
		        	$('#introduce .media img').show(function(){
						$(this).stop().animate({'margin-top':'-20','opacity':'1'}, 500);
					});
				};    
	        }); 
		});
		$(function(){
        	$(window).scroll(function () {    
                if ($(window).scrollTop() > 450) {
		        	$('#introduce .media-body').show(function(){
						$(this).stop().animate({'margin-top':'20 ','opacity':'1'}, 500);
					});
				};    
	        }); 
		});
		$(function(){
        	$(window).scroll(function () {    
                if ($(window).scrollTop() > 1000) {
		        	$('#introduce .icon img').show(function(){
						$(this).stop().animate({'margin-top':'-20','opacity':'1'}, 500);
					});
				};    
	        }); 
		});
		$(function(){
        	$(window).scroll(function () {    
                if ($(window).scrollTop() > 1500) {
		        	$('#produce .one img').show(function(){
						$(this).stop().animate({'margin-top':'-20','opacity':'1'}, 500);
					});
				};    
	        }); 
		});
		$(function(){
        	$(window).scroll(function () {    
                if ($(window).scrollTop() > 2200) {
		        	$('#produce .two img').show(function(){
						$(this).stop().animate({'margin-top':'-20','opacity':'1'}, 500);
					});
				};    
	        }); 
		});
		$(function(){
        	$(window).scroll(function () {    
                if ($(window).scrollTop() > 2320) {
		        	$('#intelligent .media').show(function(){
						$(this).stop().animate({'margin-top':'-20','opacity':'1'}, 500);
					});
				};    
	        }); 
		});