import React, { useState, useEffect } from 'react';
import {marked} from 'marked';
import './MarkDownStyle.scss';
import MarkdownPreviewerManual from './MarkdownPreviewerManual';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(`
# Welcome to my Markdown Previewer!

## This is a sub-heading...

Here's some inline code: \`<div></div>\`

\`\`\`
// This is a code block:

function greet(name) {
  return 'Hello, ' + name + '!';
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

Here's an image:
![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**Bold text**
  `);

  const updateMarkdown = (event) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div className='MarkDown'>
      <div className='MarkDownInterface'>
        <div className='editorIntreface'>
          <h1>Markdown Editor</h1>
          <textarea id="editor" value={markdown} onChange={updateMarkdown}></textarea>
          <MarkdownPreviewerManual/>
        </div>
        <div className='previewInterface'>
          <h1>Markdown Preview</h1>
          <div id="preview"></div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
