import React from 'react';
import { TextBlockView } from 'volto-slate/blocks/Text';

const TextWithBackgroundColorView = (props) => {
  return (
    <div className="textWithBackgroundColorWrapper">
      <TextBlockView {...props} />
    </div>
  );
};

export default TextWithBackgroundColorView;
