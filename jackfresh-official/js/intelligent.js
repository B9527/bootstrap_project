$(function(){			 			
            $(window).scroll(function () {    
                if ($(window).scrollTop() > 60) {     
                    $('.navbar-itcast').css('border-bottom','1px solid #ccc');    
                    }    
	            else {     
	                $('#top img').css('display','none');    
	            }    
	        });    
     
			$(".breadcrumb li a").mouseover(function(){
				$(this).addClass("active").parent().siblings().find("a").removeClass("active");
			});
			
			var val =document.URL.split('?')[1];
				if(val==undefined){
					val="meeting";
				}else{
					$("#"+val).parent('li').siblings().removeClass('active');
 			$("#"+val).parent('li').addClass('active');  			
			$("#meeting_div").hide();
 			$("#"+val+"_div").show();
				}
 			 			
 			
 				
		});
		
		
	    //TAB jq
	    

	    var lieles = $('#tab .tab_menu li');
		    lieles.each(function() {
			    var _index = $(this).index();
			    lieles.eq(0).addClass("active");
			    $(".tab_box>div").eq(0).show();
		
		    $(this).click(function() {
		      $(this).addClass("active").siblings().removeClass("active");
		      $(".tab_box>div").eq(_index).stop(true).show().siblings().stop(true).hide();
		    });
		})
    // 弹出框
    	    
    //alert($(window).height());
    $('#ClickMe').click(function() {
    	
        $('#code').center();
        $('#goodcover').show();
        $('#code').fadeIn();
    });
    $('#closebt').click(function() {
        $('#code').hide();
        $('#goodcover').hide();
    });
	$('#goodcover').click(function() {
        $('#code').hide();
        $('#goodcover').hide();
    });
    /*var val=$(window).height();
	var codeheight=$("#code").height();
    var topheight=(val-codeheight)/2;
	$('#code').css('top',topheight);*/
    jQuery.fn.center = function(loaded) {
        var obj = this;
        body_width = parseInt($(window).width());
        body_height = parseInt($(window).height());
        block_width = parseInt(obj.width());
        block_height = parseInt(obj.height());

        left_position = parseInt((body_width / 2) - (block_width / 2) + $(window).scrollLeft());
        if (body_width < block_width) {
            left_position = 0 + $(window).scrollLeft();
        };

        top_position = parseInt((body_height / 2) - (block_height / 2) + $(window).scrollTop());
        if (body_height < block_height) {
            top_position = 0 + $(window).scrollTop();
        };

        if (!loaded) {

            obj.css({
                'position': 'absolute'
            });
            obj.css({
                'top': ($(window).height() - $('#code').height()) * 0.5,
                'left': left_position
            });
            $(window).bind('resize', function() {
                obj.center(!loaded);
            });
            $(window).bind('scroll', function() {
                obj.center(!loaded);
            });

        } else {
            obj.stop();
            obj.css({
                'position': 'absolute'
            });
            obj.animate({
                'top': top_position
            }, 200, 'linear');
        }
    }