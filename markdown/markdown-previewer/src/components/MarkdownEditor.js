import React from 'react';
import { connect } from 'react-redux';

const MarkdownEditor = ({ markdown, updateMarkdown }) => {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={(event) => updateMarkdown(event.target.value)}
    />
  );
};

const mapStateToProps = (state) => ({
  markdown: state.markdown
});

const mapDispatchToProps = (dispatch) => ({
  updateMarkdown: (markdown) => dispatch({ type: 'UPDATE_MARKDOWN', payload: markdown })
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownEditor);
