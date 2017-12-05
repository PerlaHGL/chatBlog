    

    $('.person-info').hide();
    $(function(){
        $('.person-img>img').mouseover(function(){
            $(this).parent().siblings().show('slow');
        });
        $('.person-img>img').mouseout(function(){
            $('.person-info').hide('slow');
        });
    });


	// $('.person-img>img').mouseover(function(){
	// 	$('.person-info').hide();
	// 	var upic = $(this).attr('src').split('/').slice(-1);
	// 	$.ajax({
	// 		url: '/getimg',
	// 		dataType: 'json',
	// 		type: 'post',
	// 		data: {pic : upic},
	// 		success: function(data){
	// 			var person = '<div class="person-info text-center col-sm-12">' +
	// 		        '<span class="glyphicon glyphicon-triangle-top"></span>' +
	// 		        '<div class="person-img">' +
	// 		            '<img width="70" height="70" src="/img/' + data[0].picture + '" class="img-circle" alt="">' +
	// 		       '</div>' +
	// 		        '<div class="person-msg">' +
	// 		            '<h4 class="person-name">' + data[0].name + '</h4>' +		//   '<p class="person-introduce">' +
	// 		                '<span>简介：</span>' +
	// 		                '<span>' + data[0].introduce+ '</span>' +
	// 		            '</p>' +
	// 		            '<p class="person-sex">' +
	// 		                '<span>性别：</span>' +
	// 		                '<span>' + data[0].sex+ '</span>' +
	// 		            '</p>' +
	// 		        '</div>' +
	// 		    '</div>';

	// 		    $('.person-img').after(person);
	// 			console.log(person);
	// 		}
	// 	});
	// 	$(this).parent().siblings().show('slow');
	// });
	// $('.person-img>img').mouseout(function(){
 //            $('.person-info').hide('slow');
 //        });
