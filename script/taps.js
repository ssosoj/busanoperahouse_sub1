$(document).ready(function(){

	$('#box .tabs a').on('click',function(){ // 탭메뉴에 있는 링크를 클릭했을때
		var idx = $(this).parent().index(); // 현재 클릭한 링크의 부모가 몇번째 인지 idx 변수에 넣는다.

		$(this).parent().siblings().removeClass('on'); // 현재 클릭한 링크의 부모를 제외 한 나머지 li에 on클래스를 제거하고
		$(this).parent().addClass('on'); // 현재 클릭한 링크의 부모 li에 on클래스 넣는다.
	});
	
});

$(document).ready(function(){

	$('#box2 .tabs2 a').on('click',function(){ // 탭메뉴에 있는 링크를 클릭했을때
		var idx = $(this).parent().index(); // 현재 클릭한 링크의 부모가 몇번째 인지 idx 변수에 넣는다.

		$(this).parent().siblings().removeClass('on'); // 현재 클릭한 링크의 부모를 제외 한 나머지 li에 on클래스를 제거하고
		$(this).parent().addClass('on'); // 현재 클릭한 링크의 부모 li에 on클래스 넣는다.

	});
	
});