const resultContainer = document.getElementById('qr-reader-results');
let html5QrCode = new Html5Qrcode("qr-reader");
function onScanSuccess(decodedText) {
    resultContainer.innerHTML = `Scan result ${decodedText}`;
    html5QrCode.stop();
}
// facingMode: "environment" mean use back camera
// qrbox : width and height of scanning area
// aspectRatio : of entire feed take automatically entire width but hight from the aspect ratio
html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: {width: screen.width * 0.85, height: screen.width * 0.85}, aspectRatio: screen.width / screen.height }, onScanSuccess);