function upload() {
	if (fileBtn.innerText == 'Choose File') {
		document.getElementById("result").innerText = "Error: File is empty.";
		return false;
	}
	ajax();
	return false;
}
