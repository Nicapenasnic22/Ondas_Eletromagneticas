const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let waveOffset = 0;

function drawWave() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin((x + waveOffset) * 0.05) * 20 + canvas.height / 2;
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = '#b15a4b';
    ctx.lineWidth = 3;
    ctx.stroke();

    waveOffset += 2;
    requestAnimationFrame(drawWave);
}

drawWave();
