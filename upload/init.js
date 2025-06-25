var fileInput;
var fileBtn;
var box;
var res, result;

window.onload = function() {
	fileInput = document.getElementById("file");
	fileBtn = document.getElementById('fileBtn');
	box = document.getElementById('fileBtn');
	result = document.getElementById('result');
	disDrag();
	drag();
	return;
}
