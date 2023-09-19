import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";

const Contact = () => {

    const[data, setData] = useState([])
    const[initialValues, setInitialValues] = useState([])
    const[row, setRow] = useState(null)

    // const SignupSchema = Yup.object().shape({
    //   name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Enter Your Name '),
    //   maths: Yup.number().min(0, 'Too Short!').max(100, 'Too Long!').required('Enter Your Maths Marks '),
    //   sci: Yup.number().min(0, 'Too Short!').max(100, 'Too Long!').required('Enter Your Science Marks '),
    //   eng: Yup.number().min(0, 'Too Short!').max(100, 'Too Long!').required('Enter Your English Marks '),
    // });

    const remove = (idx) => {
      const copy = [...data]
      copy.splice(idx, 1)
      setData(copy)
    }

    const update = (idx,a,b,c,d,e) => {
      setRow(idx)
      let copy = {fname: a,lname: b,contact: c,city: d,country: e}
      setInitialValues(copy)
      console.log(initialValues);
    }

  return (
    <div className='body'>
      <Formik
        initialValues={{fname: '',lname: '',contact: '',city: '',country: '', ...initialValues}}

        // validationSchema={SignupSchema}
        enableReinitialize={true}

        onSubmit={async (values,action) => {
          if(row === null){
            console.log(values);
            const copy = [...data, values]
            setData(copy)
            setInitialValues()
            // action.resetForm()
          }
          else{
            const copy = [...data, ]
            copy[row] = values
            setData(copy)
            console.log(values);
            setRow(null)
            setInitialValues()
            action.resetForm()
          }
        }}
      >

        <div className='box'>

          <h2>Contact</h2>

          <Form>
            <label className='label1' htmlFor="fname">First Name : </label>
            <Field id="fname" name="fname" placeholder="First Name" /> <br />

            <label className='label1' htmlFor="lname">Last Name : </label>
            <Field id="lname" name="lname" placeholder="Last Name" /> <br />

            <label className='label1' htmlFor="contact">Contact : </label>
            <Field id="contact" name="contact" placeholder="Contact" /> <br />

            <label className='label1' htmlFor="city">City :  </label>
            <Field id="city" name="city" placeholder="City" /> <br />

            <label className='label1' htmlFor="country">Country : </label>
            <Field id="country" name="country" placeholder="Country" /> <br />

            <button type="submit"><span>Submit</span></button>

          </Form>

        </div>

      </Formik>


        <div className='table'>
        <h2>Contact</h2>
        <table border={'1'} width={'70%'} align='center'>

          <thead>
            <tr>
              <th>fname</th>
              <th>lname</th>
              <th>contact</th>
              <th>city</th>
              <th>country</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((ele,index) => {
              
                  return <tr key={index}>
                    <td>{ele.fname}</td>
                    <td>{ele.lname}</td>
                    <td>{ele.contact}</td>
                    <td>{ele.city}</td>
                    <td>{ele.country}</td>
                    <td onClick={()=> remove(index)} className='point'>Delete</td>
                    <td onClick={()=> update(index,ele.fname,ele.lname,ele.contact,ele.city,ele.country)} className='point'>Update</td>
                  </tr>
              })
            }
          </tbody>

        </table>
        </div>

    </div>
  )
}

export default Contact