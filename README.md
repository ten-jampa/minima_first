# Dog or Cat Classifier - ML Model Demo

A minimal static GitHub Pages site that demonstrates a dog/cat classification model using Hugging Face Gradio.

## Overview

This repository contains a simple, elegant web interface for classifying images as either dogs or cats. The site is designed to be deployed as a static GitHub Pages site and integrates with a Hugging Face ML model that returns probability dictionaries.

## Features

- 🎨 Modern, responsive design
- 📁 Drag & drop image upload
- 🔄 Real-time image classification
- 📊 Probability bars showing confidence levels
- 📱 Mobile-friendly interface
- ⚡ Fast and lightweight
- 🐕🐱 Dog and cat demo images

## Model Information

The site integrates with the Hugging Face model: `Ten-Jampa/minima_first`

### Model Output
The model takes images as input and returns a dictionary of probabilities, for example:
```json
{
  "dog": 0.85,
  "cat": 0.15
}
```

### Using the Model with Python

```python
from gradio_client import Client, handle_file

client = Client("Ten-Jampa/minima_first")
result = client.predict(
    img=handle_file('https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png'),
    api_name="/predict"
)
print(result)
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/your-username/minima_first.git
cd minima_first
```

2. Open `index.html` in your web browser or serve it locally:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## How It Works

1. **Upload Image**: Users can upload or drag-and-drop an image
2. **API Call**: The image is converted to base64 and sent to the Hugging Face Gradio API
3. **Classification**: The model analyzes the image and returns probability scores
4. **Display Results**: The interface shows:
   - Main prediction (Dog or Cat)
   - Confidence percentage
   - Visual probability bars for each class

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to your repository settings
3. Scroll down to "GitHub Pages" section
4. Select "Deploy from a branch"
5. Choose the branch (usually `main` or `master`)
6. Your site will be available at `https://your-username.github.io/minima_first`

### Other Static Hosting

This site can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## Project Structure

```
minima_first/
├── index.html          # Main application file with UI and API integration
├── README.md          # This file
└── .gitignore         # Git ignore rules
```

## API Integration Details

The site makes POST requests to the Hugging Face Gradio API endpoint:
```
https://ten-jampa-minima-first.hf.space/api/predict/
```

The request format:
```json
{
  "data": [
    "data:image/jpeg;base64,<base64-encoded-image>"
  ],
  "fn_index": 0
}
```

## Customization

### Styling
The site uses vanilla CSS with a modern gradient design. You can customize the colors by modifying the CSS variables in the `<style>` section of `index.html`.

### Model Integration
To integrate with a different Hugging Face model, update the API endpoint in the JavaScript code within `index.html`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub. 