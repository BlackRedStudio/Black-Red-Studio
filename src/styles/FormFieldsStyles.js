import styled from 'styled-components';

import { media, colors } from './styles-utils';

const inputStyles = `
    width: 100%;
    font-size: 1.4rem;
    color: #fff;
    background: none;
    border: 1px solid #fff;
    padding: 12px 20px;
    margin-top: 10px;
    resize: none;
    &::placeholder {
        color: ${colors.gray};
    }
    @media(${media.medium}) {
        font-size: 1.6rem;
    }
`;

export const InputS = styled.input`
  ${inputStyles}
  ${p =>
    p.templateAlt &&
    `background: #fff;
  border-color: ${colors.lightGrayAlt};
  color: #000;
  &::placeholder {
    color: #000;
  }`}
`;
export const TextareaS = styled.textarea`
  ${inputStyles}
  ${p =>
    p.templateAlt &&
    `background: #fff;
  border-color: ${colors.lightGrayAlt};
  color: #000;
  &::placeholder {
    color: #000;
  }`}
`;
export const FormInputWrapperS = styled.div`
  margin-bottom: 30px;
`;
export const LabelS = styled.label`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${p => (p.templateAlt ? `#000` : `#fff`)};
  text-align: ${p => p.align || `center`};
  display: block;
  letter-spacing: 0.7px;
  @media (${media.medium}) {
    font-size: 1.6rem;
  }
`;
export const ErrorS = styled.div`
  color: ${colors.red};
  position: absolute;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-top: 3px;
`;
export const CheckboxS = styled.input`
  background-color: ${p => (p.templateAlt ? `#fff` : colors.lightGray)};
  border: 1px solid ${colors.darkGray};
  box-shadow: 0 1px 2px rgba(0 0 0 0.05),
    inset 0px -15px 10px -12px rgba(0 0 0 0.05);
  padding: 9px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  appearance: none;
  &:focus {
    outline: none;
  }
  &:checked:after {
    content: '✓';
    font-size: 14px;
    position: absolute;
    top: 0px;
    left: 3px;
    color: ${colors.darkRed};
  }
`;
