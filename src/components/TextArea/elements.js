import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: stretch;
  border-radius: 0.25rem;
  border: 0;
  margin-bottom: 1rem;
  transition: box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  color: #adb5bd;
  :focus-within {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #8898aa;
  }
`;

export const TextAreaInput = styled.textarea`
  border-radius: 0.25rem;
  background-color: #fff;
  background-clip: padding-box;
  padding: 0.625rem 0.75rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: #8898aa;
  line-height: 1.5;
  display: block;
  position: relative;
  width: 1%;
  margin-bottom: 0;
  flex: 1 1 auto;
  font-size: 0.875rem;
  border: 0;
  ::placeholder {
    opacity: 0.4;
  }
`;
