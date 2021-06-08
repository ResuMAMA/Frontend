function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

$('#btnClick').on('click',function(){
    if($('#1').css('display')!='none'){
    $('#2').show().siblings('div').hide();
    }else if($('#2').css('display')!='none'){
        $('#1').show().siblings('div').hide();
    }
});

$('#btnClick2').on('click',function(){
    if($('#2').css('display')!='none'){
    $('#1').show().siblings('div').hide();
    }else if($('#1').css('display')!='none'){
        $('#2').show().siblings('div').hide();
    }
});