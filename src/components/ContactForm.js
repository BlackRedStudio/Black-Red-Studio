// import React from 'react';

// const functionURL = 'https://emerald-markhor-6035.twil.io/send-email';

// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: { fromEmail: '', subject: '', body: '' },
//       submitting: false,
//       error: null,
//     };
//   }

//   onClick = async (event) => {
//     event.preventDefault();
//     this.setState({ submitting: true });
//     const {
//       message: { fromEmail, subject, body },
//     } = this.state;

//     const response = await fetch(functionURL, {
//       method: 'post',
//       headers: {
//         'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//       },
//       body: new URLSearchParams({ fromEmail, subject, body }).toString(),
//     });
//     if (response.status === 200) {
//       this.setState({
//         error: null,
//         submitting: false,
//         message: {
//           fromEmail: '',
//           subject: '',
//           body: '',
//         },
//       });
//     } else {
//       const json = await response.json();
//       this.setState({
//         error: json.error,
//         submitting: false,
//       });
//     }
//   };

//   onChange = (event) => {
//     const { message } = this.state;
//     const name = event.target.getAttribute('name');
//     this.setState({
//       message: { ...message, [name]: event.target.value },
//     });
//   };

//   render() {
//     const {
//       error,
//       message: { fromEmail, subject, body },
//       submitting,
//     } = this.state;
//     return (
//       <>
//         <div>{error}</div>
//         <form
//           style={{
//             display: `flex`,
//             flexDirection: `column`,
//             maxWidth: `500px`,
//           }}
//           method="post"
//           action={functionURL}
//         >
//           <label htmlFor="fromEmail">
//             Your email address:
//             <input
//               type="email"
//               name="fromEmail"
//               id="fromEmail"
//               value={fromEmail}
//               onChange={this.onChange}
//             />
//           </label>
//           <label htmlFor="subject">
//             Subject:
//             <input
//               type="text"
//               name="subject"
//               id="subject"
//               value={subject}
//               onChange={this.onChange}
//             />
//           </label>
//           <label htmlFor="body">
//             Message:
//             <textarea
//               style={{
//                 height: `125px`,
//               }}
//               name="body"
//               id="body"
//               value={body}
//               onChange={this.onChange}
//             />
//           </label>
//           <button
//             style={{
//               marginTop: `7px`,
//             }}
//             type="submit"
//             disabled={submitting}
//             onClick={this.onClick}
//           >
//             Send message
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// export default ContactForm;
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { TextInput, Checkbox } from './FormFields';

const ContactForm = ({ form }) => {
  const initialValues = {};
  const formFieldList = form.map(
    ({
      contentful_id,
      isMandatory,
      title,
      placeholder,
      type,
      nameAttribute,
    }) => {
      if (type === 'text' || type === 'textarea' || type === 'email') {
        initialValues[nameAttribute] = '';
        return (
          <TextInput
            key={contentful_id}
            label={title}
            name={nameAttribute}
            type={type}
            placeholder={placeholder}
            isMandatory={isMandatory}
          />
        );
      }
      if (type === 'checkbox') {
        initialValues[nameAttribute] = false;
        return (
          <Checkbox
            key={contentful_id}
            name={nameAttribute}
            isMandatory={isMandatory}
            placeholder={placeholder}
          />
        );
      }
      return null;
    }
  );
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            JSON.stringify(values, null, 2);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          {formFieldList}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
