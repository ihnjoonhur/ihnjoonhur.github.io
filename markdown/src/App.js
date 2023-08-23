import React, { Component } from "react"; // Added React and Component import
import ReactDOM from "react-dom"; // Added ReactDOM import
import marked from 'marked'; // Fixed the marked import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// // Set breaks option to true
// marked.setOptions({
//   breaks: true,
// });

// function App() {
//   // Default markdown text satisfying all specified elements
//   const defaultMarkdown = `
// # Header (H1 size)

// ## Sub Header (H2 size)

// [Google](https://google.com)

// \`Inline code\`

// \`\`\`
// Block code
// \`\`\`

// - List item

// > Blockquote


// **Bolded Text**
//   `;

//   const [text, setText] = useState(defaultMarkdown);

//   return (
//     <div className="App container mt-5">
//       <h1 className="text-center mb-4">Markdown Previewer</h1>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="card mb-4">
//             <div className="card-header bg-info text-white">Editor</div>
//             <div className="card-body">
//               <textarea 
//                 id="editor" 
//                 onChange={(event) => {
//                   setText(event.target.value);
//                 }}
//                 value={text}
//                 className="form-control"
//                 style={{height: '400px'}}
//               ></textarea>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-header bg-success text-white">Previewer</div>
//             <div className="card-body">
//               <div id="preview" className="p-2" style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={{__html: marked(text)}}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

class Application extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12"> {/* Updated Bootstrap class */}
            <h1 className="text-center">Markdown Live Preview</h1>
            <hr />
          </div>
        </div>
        <UserInput />
      </div>
    )
  }
}

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      md: '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### Created by:\n[IhnJoon Hur](https://ihnjoonhur.github.io \"IhnJoon hur\'s Website")'
    };
    this.updatePreview = this.updatePreview.bind(this); // Binding the method in the constructor
  }
  
  updatePreview(e) {
    this.setState({
      md: e.target.value
    });
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">Enter Markdown</h3>
          <textarea type="text" className="md-input" value={this.state.md} onChange={this.updatePreview} />
        </div>
        <div className="col-md-6">
          <h3 className="text-center">Result</h3>
          <MarkdownPreview markdown={this.state.md} />
        </div>
      </div>
    )
  }
}

class MarkdownPreview extends Component {
  
  createMarkup() {
    return { __html: marked(this.props.markdown) }
  }
  
  render() {
    return (
      <div className="well" dangerouslySetInnerHTML={this.createMarkup()}></div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));