function download() {
	if (document.getElementById("fileId").value == "") {
		document.getElementById("result").innerText = "Error: File id is empty.";
		return false;
	}
	return true;
}