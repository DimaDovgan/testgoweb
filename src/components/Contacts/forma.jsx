import React, { useState } from 'react';
 import { useFormik } from 'formik';
 import s from './Contacts.module.css'
 import cogoToast from 'cogo-toast';

 const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };
 
 const ContactForm = () => {
   const formik = useFormik({
     initialValues: {
        name:'',
       email: '',
     },
     validate ,
     onSubmit: (values,{resetForm})=> {
      cogoToast.success(`${values.name} we have accepted your request, please wait for our call!`);
      resetForm();
     },

     
   });
   return (
    <div className={s.formaPath} >
    <h2 className={s.contactTitle}>Request Callback</h2>
     <form onSubmit={formik.handleSubmit} className={s.formContainer}>
        <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
         placeholder="Enter your name"
        className={s.contactInput}
       />
       {formik.errors.name ? <div className={s.erorMessage}>{formik.errors.name}</div> : null}
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder="Enter email*"
         className={s.contactInput}
       />
       {formik.errors.email ? <div className={s.erorMessage} >{formik.errors.email}</div> : null}
       <button type="submit" className={s.submitButton}>Submit</button>
     </form>

    </div>
    
   );
 };
 export default ContactForm;