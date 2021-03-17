import React from 'react';
import { useField, ErrorMessage } from 'formik';

import {
  FormInputWrapperS,
  LabelS,
  InputS,
  TextareaS,
  CheckboxS,
  ErrorS,
} from '../styles/FormFieldsStyles';

export const TextInput = ({
  label,
  name,
  placeholder,
  type,
  templateAlt,
  validateProps: { minLength, error1, maxLength, error2 },
}) => {
  const validate = value => {
    if (type === 'email') {
      if (!value) return error1;
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        return error2;
    } else {
      if (value.length < minLength) return error1;
      if (value.length > maxLength) return error2;
    }
    return null;
  };
  const [field] = useField({ name, validate });
  return (
    <FormInputWrapperS>
      <LabelS htmlFor={name} templateAlt={templateAlt}>
        {label}
      </LabelS>
      {type !== 'textarea' ? (
        <InputS
          {...field}
          type={type}
          placeholder={placeholder}
          templateAlt={templateAlt}
        />
      ) : (
        <TextareaS
          {...field}
          type={type}
          placeholder={placeholder}
          rows={10}
          templateAlt={templateAlt}
        />
      )}
      <ErrorMessage component={ErrorS} name={name} />
    </FormInputWrapperS>
  );
};

export const Checkbox = ({
  name,
  placeholder,
  errorMsg,
  additionalData,
  templateAlt,
}) => {
  const validate = value => {
    if (!value) return errorMsg;
    return null;
  };
  const [field] = useField({ name, validate });

  return (
    <FormInputWrapperS>
      <LabelS templateAlt={templateAlt} align="left">
        <CheckboxS
          {...field}
          type="checkbox"
          name={name}
          templateAlt={templateAlt}
        />
        <span dangerouslySetInnerHTML={{ __html: placeholder }} />
        {additionalData && (
          <>
            <br />
            <br />
            <span dangerouslySetInnerHTML={{ __html: additionalData }} />
          </>
        )}
      </LabelS>
      <ErrorMessage component={ErrorS} name={name} />
    </FormInputWrapperS>
  );
};
