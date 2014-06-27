document.getElementById('scan_button').onclick = function () {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			document.getElementById('Response').innerHTML = result.text;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);
};