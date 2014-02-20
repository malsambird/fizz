$(document).ready(function() {

count = 1;


for (count = 1; count <= 100; count++) {
	if (count % 3 === 0){
		if (count % 5 === 0){
			$("body").append("fizzbuzz, ");
		} else {
			$("body").append("fizz, ");
		}
	} else if (count % 5 === 0){
		$("body").append("buzz, ");
	} else {
		$("body").append(count + ", ");
	}
}



});