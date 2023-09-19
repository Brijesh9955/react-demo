import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Formik, Field, Form } from 'formik';
import { FaGooglePlusG } from 'react-icons/fa';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Login = () => {

  const history = useHistory()
  const LoginUser = async (values) => {
    try {
      const res = await axios.post('http://13.51.56.32:3001/user/login',values)
      console.log(res.data);
      localStorage.setItem('token',res.data.token)
      history.push('/contact')
    }
    catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <>

      <Formik
        initialValues={{
          uname: '',
          password: '',
        }}
        onSubmit={async (values) => {
          LoginUser(values);
        }}
      >

        <div className='box'>

          <h2>Log in</h2>

          <Form>

            <label className='label' htmlFor="uname">User Name : </label> <br />
            <Field id="uname" name="uname" placeholder="uname" /> <br />

            <label className='label' htmlFor="password">Password : </label> <br />
            <Field id="password" name="password" placeholder="Password" /> <br />

            <button type="submit">Login</button>

          </Form>

        </div>

      </Formik>


    </>
  )
}

export default Login