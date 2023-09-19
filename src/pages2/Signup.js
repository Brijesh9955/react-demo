import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';


const Signup = () => {

  
  const SignupUser = async (values) => {
    try {
      const res = await axios.post('http://13.51.56.32:3001/user/signup',values)
      console.log(res.data);
      localStorage.setItem('token',res.data.token)
      
    }
    catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <>

      <Formik
        initialValues={{
          fname: '',
          lname: '',
          uname: '',
          password: '',
          contact: '',
          email: '',
        }}
        onSubmit={async (values) => {
          SignupUser(values);
        }}
      >

        <div className='box'>

          <h2>Sign Up</h2>

          <Form>
            <label className='label1' htmlFor="fname">First Name : </label>
            <Field id="fname" name="fname" placeholder="First Name" /> <br />

            <label className='label1' htmlFor="lname">Last Name : </label>
            <Field id="lname" name="lname" placeholder="Last Name" /> <br />

            <label className='label1' htmlFor="uname">User Name :  </label>
            <Field id="uname" name="uname" placeholder="uname" /> <br />

            <label className='label1' htmlFor="password">Password : </label>
            <Field id="password" name="password" placeholder="Password" /> <br />

            <label className='label1' htmlFor="contact">Contact : </label>
            <Field id="contact" name="contact" placeholder="Contact" /> <br />

            <label className='label1' htmlFor="email">Email : </label>
            <Field
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              type="email"
            />

            <button type="submit">Sign In</button>

          </Form>

        </div>

      </Formik>


    </>
  )
}

export default Signup