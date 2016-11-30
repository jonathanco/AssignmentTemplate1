function action(num1, num2, action){
	switch (action){
		case "+" :
			return parseInt(num1) + parseInt(num2);
			break;
		case "-" :
			return parseInt(num1) - parseInt(num2);
			break;
		case "*" :
			return parseInt(num1) * parseInt(num2);
			break;
		case "/" :
			return parseInt(num1) / parseInt(num2);
			break;
		case "^" :
			return Math.pow(parseInt(num1),parseInt(num2));
			break;
		case "root" :
			return Math.pow(parseInt(num1),1/parseInt(num2));
			break;
	}
}

var num1, num2,operator;

function calcNow(){
	num1 = $('#num1').val();
	num2 = $('#num2').val();
	operator = $('#operator').val();

	return action(num1, num2, operator);
}

var calc = {
	action: action,
	buttonClick: calcNow
};


$(document).ready(function(){
	var $result = $('#result');
	$('#run-calc').on('click',function(){
		$result.html(calc.buttonClick());

	});

	$('#num1, #num2, #operator').on('change',function(){
		$result.html(calc.buttonClick());

	});

	$(document).bind('keypress', function(e){
		if (e.keyCode = 13){
			$result.html(calc.buttonClick());
		}

	});
});

