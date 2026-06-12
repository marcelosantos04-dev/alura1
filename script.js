// Elementos dos olhos e pupilas
const leftEye = document.querySelector('.left-eye');
const rightEye = document.querySelector('.right-eye');
const leftPupil = document.querySelector('.left-pupil');
const rightPupil = document.querySelector('.right-pupil');
const svg = document.querySelector('.monalisa-svg');

// Função para calcular o ângulo entre dois pontos
function getAngleBetweenPoints(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}

// Função para calcular a distância entre dois pontos
function getDistanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Função para mover a pupila em direção ao cursor
function movePupil(pupil, eyeX, eyeY, mouseX, mouseY) {
    // Raio máximo de movimento da pupila
    const pupilRadius = 5;
    
    // Calcular o ângulo em relação ao cursor
    const angle = getAngleBetweenPoints(eyeX, eyeY, mouseX, mouseY);
    
    // Calcular novas coordenadas da pupila
    const newX = eyeX + Math.cos(angle) * pupilRadius;
    const newY = eyeY + Math.sin(angle) * pupilRadius;
    
    // Aplicar as novas coordenadas
    pupil.setAttribute('cx', newX);
    pupil.setAttribute('cy', newY);
}

// Event listener para movimento do mouse
document.addEventListener('mousemove', (event) => {
    // Pegar a posição do SVG
    const svgRect = svg.getBoundingClientRect();
    
    // Converter coordenadas do mouse para coordenadas do SVG
    const svgX = (event.clientX - svgRect.left) * (400 / svgRect.width);
    const svgY = (event.clientY - svgRect.top) * (500 / svgRect.height);
    
    // Coordenadas dos olhos no SVG (mesmas do HTML)
    const leftEyeX = 175;
    const leftEyeY = 200;
    const rightEyeX = 225;
    const rightEyeY = 200;
    
    // Mover as pupilas
    movePupil(leftPupil, leftEyeX, leftEyeY, svgX, svgY);
    movePupil(rightPupil, rightEyeX, rightEyeY, svgX, svgY);
});

// Event listener para quando o mouse sai da tela
document.addEventListener('mouseleave', () => {
    // Retornar as pupilas ao centro
    leftPupil.setAttribute('cx', 175);
    leftPupil.setAttribute('cy', 200);
    rightPupil.setAttribute('cx', 225);
    rightPupil.setAttribute('cy', 200);
});

// Event listener para touch em dispositivos móveis
document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    
    // Pegar a posição do SVG
    const svgRect = svg.getBoundingClientRect();
    
    // Converter coordenadas do toque para coordenadas do SVG
    const svgX = (touch.clientX - svgRect.left) * (400 / svgRect.width);
    const svgY = (touch.clientY - svgRect.top) * (500 / svgRect.height);
    
    // Coordenadas dos olhos no SVG
    const leftEyeX = 175;
    const leftEyeY = 200;
    const rightEyeX = 225;
    const rightEyeY = 200;
    
    // Mover as pupilas
    movePupil(leftPupil, leftEyeX, leftEyeY, svgX, svgY);
    movePupil(rightPupil, rightEyeX, rightEyeY, svgX, svgY);
});

// Event listener para quando o toque sai da tela
document.addEventListener('touchend', () => {
    // Retornar as pupilas ao centro
    leftPupil.setAttribute('cx', 175);
    leftPupil.setAttribute('cy', 200);
    rightPupil.setAttribute('cx', 225);
    rightPupil.setAttribute('cy', 200);
});

console.log('✨ Monalisa Interativa carregada com sucesso!');
console.log('Mova o cursor sobre a obra para ver os olhos acompanharem seu movimento.');