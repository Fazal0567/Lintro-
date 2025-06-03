import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1\n}`)
  const [review, setReview] = useState('')
  const [isLoading, setIsLoading] = useState(false) // <-- Loading state

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    setIsLoading(true) // <-- Start loading
    try {
      const response = await axios.post('https://lintro.onrender.com/ai/get-review',  { code })
      setReview(response.data)
    } catch (error) {
      setReview('⚠️ Error fetching review. Please try again.')
    } finally {
      setIsLoading(false) // <-- Stop loading
    }
  }

  const editorStyle = {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: '16px',
    height: '100%',
    width: '100%',
    backgroundColor: '#1e1e1e',
    color: '#fff',
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={editorStyle}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review"
            disabled={isLoading}
          >
            {isLoading ? 'Reviewing...' : 'Review'}
          </div>
        </div>

        <div className="right">
          {isLoading ? (
            <div className="loading">
              🕐 Analyzing your code...
            </div>
          ) : (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          )}
        </div>
      </main>

      {/* Optional: Full-screen loader overlay */}
      {isLoading && (
        <div className="loader-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </>
  )
}

export default App