function chooseFile() {
	fileBtn.innerText = "Choose File";
	fileInput.click();
	return;
}

function show() {
	if (fileInput.value == "")
		fileBtn.innerText = "Choose File";
	else {
		var str = fileInput.value.split("\\");
		document.getElementById("fileBtn").innerText = str[str.length - 1];
		res = $("#file")[0].files[0];
	}
	return;
}
