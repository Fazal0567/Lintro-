# Lintro - AI Code Review Tool

Lintro is a web application that provides AI-powered code reviews. It allows developers to paste their code and receive instant feedback, suggestions, and improvements from an AI code reviewer.

## Features

- Real-time code editing with syntax highlighting
- AI-powered code review using Google's Gemini 2.0 Flash model
- Markdown rendering of review results with code highlighting
- Responsive design for desktop, tablet, and mobile devices

## Project Structure

The project is divided into two main parts:

### Frontend

- Built with React 19 and Vite
- Code editor with syntax highlighting using Prism.js
- Markdown rendering with react-markdown and rehype-highlight

### Backend

- Node.js server using Express 5
- Google Generative AI integration (Gemini 2.0 Flash)
- RESTful API for code review requests

## Getting Started

### Prerequisites

- Node.js (version 18+ recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies for both frontend and backend

```bash
# Install frontend dependencies
cd Frontend
npm install

# Install backend dependencies
cd ../Backend
npm install
```

3. Create a `.env` file in the Backend directory with your Google Gemini API key:

```
GOOGLE_GEMINI_KEY=your_api_key_here
```

### Running the Application

#### Frontend

```bash
cd Frontend
npm run dev
```

The frontend will be available at http://localhost:5173

#### Backend

```bash
cd Backend
node server.js
```

The backend will run on http://localhost:3000

## API Endpoints

- `POST /ai/get-review` - Submit code for review

## Deployment

- Frontend is configured for deployment with Vite
- Backend includes a Vercel configuration for serverless deployment

## License

ISC