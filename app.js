const container = document.getElementById('waveContainer');
const dotCount = 20;
const waveWidth = 5;
const waveHeight = dotCount / waveWidth;

// Create a single canvas instead of multiple DOM elements
const canvas = document.createElement('canvas');
const computedStyle = getComputedStyle(document.documentElement);
const primaryColor = computedStyle.getPropertyValue('--primary-color').trim();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
container.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Precalculate dot positions and colors
const dots = [];
for (let y = 0; y < waveHeight; y++) {
    for (let x = 0; x < waveWidth; x++) {
        const brightness = Math.floor((x / waveWidth + y / waveHeight) * 50 + 50);
        dots.push({
            x: x * (canvas.width / (waveWidth - 1)),
            y: y * (canvas.height / (waveHeight - 1)),
            color: `${primaryColor}${brightness.toString(16).padStart(2, '0')}`
        });
    }
}

// Use requestAnimationFrame for smoother animation
let lastTime = 0;
const fps = 60;
const interval = 1000 / fps;

function animate(currentTime) {
    requestAnimationFrame(animate);

    if (currentTime - lastTime < interval) return;

    lastTime = currentTime;
    const time = currentTime * 0.001;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw dots
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const x = i % waveWidth;
        const y = Math.floor(i / waveWidth);
        const z = Math.sin((x + time) * 0.5) * 50 + Math.sin((y + time) * 0.5) * 50;
    
        // Apply perspective
        const scale = 1 + z / 100;
        const projectedX = dot.x * scale;
        const projectedY = dot.y * scale;
    
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, 3 * scale, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Recalculate dot positions
    dots.forEach((dot, i) => {
        const x = i % waveWidth;
        const y = Math.floor(i / waveWidth);
        dot.x = x * (canvas.width / (waveWidth - 1));
        dot.y = y * (canvas.height / (waveHeight - 1));
    });
});

requestAnimationFrame(animate);