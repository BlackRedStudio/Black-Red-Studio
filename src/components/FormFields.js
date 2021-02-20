import React from 'react';
import { useField } from 'formik';

import {
  FormInputWrapperS,
  LabelS,
  InputS,
  TextareaS,
  CheckboxS,
  ErrorS,
} from '../styles/FormFieldsStyles';

export const TextInput = ({ label, name, placeholder, type, isMandatory }) => {
  const [field, meta] = useField({ name });

  return (
    <FormInputWrapperS>
      <LabelS htmlFor={name}>{label}</LabelS>
      {type !== 'textarea' ? (
        <InputS
          {...field}
          type={type}
          placeholder={placeholder}
          required={isMandatory}
        />
      ) : (
        <TextareaS
          {...field}
          type={type}
          placeholder={placeholder}
          rows={10}
          required={isMandatory}
        />
      )}
      {meta.touched && meta.error ? (
        <ErrorS className="error">{meta.error}</ErrorS>
      ) : null}
    </FormInputWrapperS>
  );
};

export const Checkbox = ({ name, placeholder, isMandatory }) => {
  const [field, meta] = useField({ name, type: 'checkbox' });
  return (
    <FormInputWrapperS>
      <LabelS>
        <CheckboxS
          type="checkbox"
          {...field}
          name={name}
          required={isMandatory}
        />
        <span dangerouslySetInnerHTML={{ __html: placeholder }} />
      </LabelS>
      {meta.touched && meta.error ? <ErrorS>{meta.error}</ErrorS> : null}
    </FormInputWrapperS>
  );
};
