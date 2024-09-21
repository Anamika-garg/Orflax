// Import Tesseract.js
const Tesseract = require('tesseract.js');

// Path to the image

const imagePath = './1726058758415_Screenshot 2024-09-10 224728.png';

// Function to perform OCR
Tesseract.recognize(
    imagePath,
    'eng',  // Language (you can specify other languages)
    {
        logger: (m) => console.log(m),  // Log progress
    }
)
.then(({ data: { text } }) => {
    console.log('Extracted Text:');
    console.log(text);  // Output the extracted text
})
.catch((err) => {
    console.error('Error:', err);  // Handle errors
});
