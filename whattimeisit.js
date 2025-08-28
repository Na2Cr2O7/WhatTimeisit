const QRCODE_WIDTH = 20;
const qrCodeElement = document.getElementById("qrcode");
const qrCodeColorDarkDefault = "#000000";
const qrCodeColorDefault = "#FFFFFF";

function updateTime() {
    const time = new Date();
    let hours = time.getHours().toString().padStart(2, '0');
    let minutes = time.getMinutes().toString().padStart(2, '0');
    let seconds = time.getSeconds().toString().padStart(2, '0');
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth * 0.01;

    let qrCodeColorDark = qrCodeColorDarkDefault;
    let qrCodeColor = qrCodeColorDefault;

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        qrCodeColorDark = qrCodeColorDefault;
        qrCodeColor = qrCodeColorDarkDefault;
    }

    const timeString = `${hours}:${minutes}:${seconds}`;

    qrCodeElement.innerHTML = ""; // Clear previous QR code
    new QRCode(qrCodeElement, {
        text: timeString,
        width: QRCODE_WIDTH * Math.min(vh, vw),
        height: QRCODE_WIDTH * Math.min(vh, vw),
        colorDark: qrCodeColorDark,
        colorLight: qrCodeColor,
        correctLevel: QRCode.CorrectLevel.H
    });
}

updateTime();
setInterval(updateTime, 1000);
