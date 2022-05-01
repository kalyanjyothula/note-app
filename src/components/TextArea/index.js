import React from 'react';
import { TextAreaContainer, TextAreaInput } from './elements';

function TextArea(props) {
  return (
    <TextAreaContainer>
      <TextAreaInput {...props} />
    </TextAreaContainer>
  );
}

export default TextArea;
