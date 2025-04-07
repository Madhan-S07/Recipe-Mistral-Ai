#Mistral AI-Powered Recipe Generator

**Chef Claude** is a React-based web app that uses the **Mistral AI** model (via Hugging Face) to generate creative, custom recipes based on ingredients you provide.

## Features

- Input any list of ingredients  
- Get a unique recipe powered by Mistral AI  
- Clean, responsive UI with Tailwind CSS  
- Integrated with Hugging Face Inference API  

## Getting Started

### Prerequisites

- Node.js and npm installed  
- Hugging Face API key with access to the Mistral model  

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/chef-claude.git
   cd chef-claude
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your API key to a `.env` file:
   ```
   VITE_HUGGINGFACE_API_KEY=your_api_key_here
   ```

4. Run the app locally:
   ```bash
   npm run dev
   ```

## How It Works

The app takes your input ingredients and sends a prompt to the **Mistral AI** model via Hugging Faceâ€™s inference endpoint. The model returns a recipe, which is then shown in the UI.

## Tech Stack

- React + Vite   
- Hugging Face (Mistral AI)  
- JavaScript / JSX  


## Roadmap

- Add ability to save/share recipes  
- Integrate image generation for dishes  
- Multilingual support  
- User login & personalized recipe history  

## License

MIT License
