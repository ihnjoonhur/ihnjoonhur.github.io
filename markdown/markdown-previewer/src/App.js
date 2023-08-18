import React, { useState } from 'react';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <div className="App container">
      <textarea id="editor" value={markdown} onChange={e => setMarkdown(e.target.value)}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
    </div>
  );
}

const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Here's a [link](https://www.freecodecamp.com)

\`Inline code\`

\`\`\`
// Code block

console.log('Hello, world!');
\`\`\`

1. First list item
2. Second list item
3. Third list item

> This is a blockquote.

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**Bolded text**
`;

export default App;

