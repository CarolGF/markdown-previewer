import React, { Component } from "react";
import "./App.css";

const marked = require("marked");

marked.setOptions({
  breaks: true,
  gfm: true,
});

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends Component {
  state = {
    markdown: placeholder,
  };

  updateMarkdown = (markdown) => {
    this.setState({ markdown });
  };

  handleChange = (event) => {
    this.updateMarkdown(event.target.value);
  };

  render() {
    const { markdown } = this.state;
    return (
      <div>
        <div>
          <h1>Editor</h1>
          <textarea
            id='editor'
            value={markdown}
            placeholder='Enter Markdown'
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div>
          <h1>Previewer</h1>
          <div
            id='preview'
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
