
//This function is called on click of "Find Area!" button form index.html

function findArea(radius) {
	var area=radius * radius * Math.PI; //Using formula for circle area
	area = Math.round((area + 0.00001) * 100) / 100; //Scale answer to two decimal places
	document.getElementById('area').innerHTML="Area = " + area + " sq units"; //Display result in html p tag with id "area"
}
