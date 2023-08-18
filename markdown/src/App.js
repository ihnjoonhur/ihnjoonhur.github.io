import { useState } from "react";
import { marked } from 'marked'; // Fixed the import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Set breaks option to true
marked.setOptions({
  breaks: true,
});

function App() {
  // Default markdown text satisfying all specified elements
  const defaultMarkdown = `
# Header (H1 size)

## Sub Header (H2 size)

[Google](https://google.com)

\`Inline code\`

\`\`\`
Block code
\`\`\`

- List item

> Blockquote


**Bolded Text**
  `;

  const [text, setText] = useState(defaultMarkdown);

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">Markdown Previewer</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header bg-info text-white">Editor</div>
            <div className="card-body">
              <textarea 
                id="editor" 
                onChange={(event) => {
                  setText(event.target.value);
                }}
                value={text}
                className="form-control"
                style={{height: '400px'}}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-success text-white">Previewer</div>
            <div className="card-body">
              <div id="preview" className="p-2" style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={{__html: marked(text)}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
