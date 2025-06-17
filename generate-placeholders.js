const fs = require('fs');
const path = require('path');

const createSvg = (text, width, height) => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0891b2"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial" font-size="24">
    ${text}
  </text>
</svg>`;

const images = [
  { path: 'public/images/services/physical-exam.jpg', text: 'Physical Exam', width: 800, height: 600 },
  { path: 'public/images/services/vision-hearing.jpg', text: 'Vision & Hearing', width: 800, height: 600 },
  { path: 'public/images/services/dental-care.jpg', text: 'Dental Care', width: 800, height: 600 },
  { path: 'public/images/testimonials/principal.jpg', text: 'Principal', width: 200, height: 200 },
  { path: 'public/images/testimonials/doctor.jpg', text: 'Doctor', width: 200, height: 200 },
  { path: 'public/images/testimonials/nurse.jpg', text: 'Nurse', width: 200, height: 200 }
];

images.forEach(({ path: imgPath, text, width, height }) => {
  const svg = createSvg(text, width, height);
  fs.mkdirSync(path.dirname(imgPath), { recursive: true });
  fs.writeFileSync(imgPath.replace('.jpg', '.svg'), svg);
});

console.log('Generated placeholder images');
