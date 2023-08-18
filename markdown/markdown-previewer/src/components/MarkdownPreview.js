import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

const MarkdownPreview = ({ markdown }) => {
  const getMarkdownText = () => {
    var rawMarkup = marked(markdown, {sanitize: true});
    return { __html: rawMarkup };
  }

  return (
    <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
  );
};

const mapStateToProps = (state) => ({
  markdown: state.markdown
});

export default connect(mapStateToProps)(MarkdownPreview);
