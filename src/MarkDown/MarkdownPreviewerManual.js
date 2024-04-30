import React from 'react';

function MarkdownPreviewerManual() {
  return (
    <p className='manual'>
      <ol>
        <li><strong>Headers:</strong> Use hash symbols <code>#</code> to create headings (<code># Heading 1</code>, <code>## Heading 2</code>, etc.).</li>
        <li><strong>Lists:</strong> Use asterisks <code>*</code> or numbers followed by a period to create unordered and ordered lists, respectively.</li>
        <li><strong>Emphasis:</strong> Use asterisks <code>*</code> or underscores <code>_</code> for italics, and double for bold.</li>
        <li><strong>Links:</strong> Enclose link text in square brackets <code>[]</code> and the URL in parentheses <code>()</code>.</li>
        <li><strong>Images:</strong> Use an exclamation mark <code>!</code>, square brackets with alt text, and parentheses with the image URL.</li>
        <li><strong>Blockquotes:</strong> Use a greater than symbol <code>&gt;</code> at the start of a line.</li>
        <li><strong>Code Blocks:</strong> Enclose code in triple backticks <code>`` ` ``</code>.</li>
        <li><strong>Horizontal Rules:</strong> Use three or more asterisks <code>*</code>, hyphens <code>-</code>, or underscores <code>_</code>.</li>
        <li><strong>Preview:</strong> Instantly see your Markdown content rendered as HTML in the preview pane.</li>
        <li><strong>Export:</strong> Copy your Markdown text for saving elsewhere.</li>
        <li><strong>Experiment:</strong> Explore Markdown syntax to create various document styles.</li>
        <li><strong>Enjoy:</strong> Create beautifully formatted content effortlessly!</li>
      </ol>
    </p>
  );
}

export default MarkdownPreviewerManual;
