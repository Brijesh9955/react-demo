import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './pages2/Signup';
import Login from './pages2/Login';
import Contact from './pages2/Contact';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route exact path='/'>
            <Signup />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;





// import { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios';
// import { Formik, Field, Form, ErrorMessage } from 'formik';

// function App() {

//   const [data, setData] = useState([]);
//   const [initialValues, setInitialValues] = useState([]);
//   const [row, setRow] = useState(null);


//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>{
//       setData(res.data)
//     })
//     .catch((res)=>{
//       console.log('Error');
//     })
//   }, [])

//   function remove(id,index){
//     axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
//     .then((res)=>{
//       console.log(res.data);
//     })
//     .catch((res)=>{
//       console.log('Error');
//     })
//   }

//   function update(id,index,a,b,c){
//     setRow(index)
//       const copy = {userId: a, id: id, title: b, body: c}
//       setInitialValues(copy)
//   }

//   return (
//     <div className="App">

//        <Formik
//         initialValues={{userId: '', title: '', body: '', ...initialValues}}

//         enableReinitialize={true}
        
//         onSubmit={async (values,id) => {

//           if(row === null){
//             axios.post('https://jsonplaceholder.typicode.com/posts', values)
//             .then((res)=>{
//               setData([...data, res.data])
//               console.log(res.data);
//             })
//             .catch((res)=>{
//               console.log('Error');
//             })
//           }
//           else{
//             axios.put('https://jsonplaceholder.typicode.com/posts/'+parseInt(row+1))
//             .then((res)=>{
//               let copy = [...data,]
//               copy[row] = values
//               console.log(copy);
//               setData(copy)
//               setRow(null)
//             })
//             .catch((res)=>{
//               console.log('Errorrrrrrr');
//             })
//           }
            
//         }}
//       >



//       <Form>
//         <label htmlFor="userId">userId :- </label>
//         <Field id="userId" name="userId" placeholder="userId" />

//         <label htmlFor="title">Title :- </label>
//         <Field id="title" name="title" placeholder="Title" /><br />

//         <label htmlFor="body">Body :- </label>
//         <Field id="body" name="body" placeholder="Body" />

        
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>


//          <div className="App">

//         <h2>Student Result</h2>

//         <table border={'1'} width={'70%'} align='center'>

//           <thead>
//             <tr>
//               <th>userId</th>
//               <th>id</th>
//               <th>title</th>
//               <th>body</th>
//               <th>Delete</th>
//               <th>Update</th>
//             </tr>
//           </thead>

//           <tbody>
//             {
//                data.map((ele,index) => {
                
//                    return <tr key={index}>
//                      <td>{ele.userId}</td>
//                      <td>{ele.id}</td>
//                      <td>{ele.title}</td>
//                      <td>{ele.body}</td>
//                      <td onClick={()=> remove(ele.id,index)} className='point'>Delete</td>
//                      <td onClick={()=> update(ele.id,index,ele.userId,ele.title,ele.body)} className='point'>Update</td>
//                    </tr>
//                })
//              }
//          </tbody>

//        </table>

//     </div>

//     </div>
    
//   );
// }

// export default App;




// import { useEffect, useState } from 'react';
// import './App.css';
// import Abc from './pages/abc';
// import axios from 'axios';

// function App() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://rickandmortyapi.com/api/character')
//     .then((res)=>{
//       console.log(res.data.results);
//       setData(res.data.results)
//     })
//     .catch((res)=>{
//       console.log(res.data);
//     })
//   }, [])

//   return (
//     <div className="App">

//        {
//         data.map((el)=>{
//           return <>
//             <Abc props={el} />
//           </>
//         })
//        }

//     </div>


//     // <div className="App">

//     //    <h2>Student Result</h2>

//     //    <table border={'1'} width={'50%'} align='center'>

//     //      <thead>
//     //        <tr>
//     //          <th>userId</th>
//     //          <th>id</th>
//     //          <th>title</th>
//     //          <th>body</th>
//     //        </tr>
//     //      </thead>

//     //      <tbody>
//     //        {
//     //            data.map((ele) => {
                
//     //                return <tr>
//     //                  <td>{ele.userId}</td>
//     //                  <td>{ele.id}</td>
//     //                  <td>{ele.title}</td>
//     //                  <td>{ele.body}</td>
//     //                </tr>
//     //            })
//     //          }
//     //      </tbody>

//     //    </table>

//     // </div>

    
//   );
// }

// export default App;




// import { useState } from 'react';
// import './App.css';
// import Abc from './pages/abc';

// function App() {

//   const [data, setData] = useState([
//       { url: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
//         title: 'Agency Director',
//         location: 'Earth (Replacement Dimension)',
//         seen: 'Pickle Rick',
//       },
//       { url: 'https://rickandmortyapi.com/api/character/avatar/129.jpeg',
//         title: 'Fulgora',
//         location: 'Interdimensional Cable',
//         seen: 'Rixty Minutes',
//       },
//       { url: 'https://rickandmortyapi.com/api/character/avatar/719.jpeg',
//         title: 'Diesel Weasel',
//         location: 'Earth (Replacement Dimension)',
//         seen: 'A Rickconvenient Mort',
//       },
//       { url: 'https://rickandmortyapi.com/api/character/avatar/647.jpeg',
//         title: 'Troy',
//         location: 'Glorzo Asteroid',
//         seen: 'Promortyus',
//       },
//       { url: 'https://rickandmortyapi.com/api/character/avatar/779.jpeg',
//         title: 'Young Memory Rick',
//         location: 'Ricks Memories',
//         seen: 'Rickternal of the Spotless Mort',
//       },
//       { url: 'https://rickandmortyapi.com/api/character/avatar/129.jpeg',
//         title: 'Fulgora',
//         location: 'Interdimensional Cable',
//         seen: 'Rixty Minutes',
//       },
//   ]);

//   return (

//     <div className="App">
//       {data.map((el) => (
//         <Abc props={el} />
//       ))}
//     </div>

    
//   );
// }

// export default App;





// import { useState } from 'react';
// import './App.css';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from "yup";

// function App() {

//   const[data, setData] = useState([])
//   const[initialValues, setInitialValues] = useState([{name: 'cvbn',maths: '45',sci: '76',eng: '56'}])
//   const[row, setRow] = useState(null)

//   const SignupSchema = Yup.object().shape({
//     name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Enter Your Name '),
//     maths: Yup.number().min(0, 'Too Short!').max(100, 'Too Long!').required('Enter Your Maths Marks '),
//     sci: Yup.number().min(0, 'Too Short!').max(100, 'Too Long!').required('Enter Your Science Marks '),
//     eng: Yup.number().min(0, 'Too Short!').max(100, 'Too Long!').required('Enter Your English Marks '),
//   });

//   const remove = (idx) => {
//     const copy = [...data]
//     copy.splice(idx, 1)
//     setData(copy)
//   }

//   const update = (idx,a,b,c,d) => {
//     setRow(idx)
//     let copy = {name: a,maths: b,sci: c,eng: d}
//     setInitialValues(copy)
//     console.log(initialValues);
//   }

  

//   return (
//     <div className="App">

//       <h2>Fill Detail</h2>

//       <Formik
//         initialValues={{name: '',maths: '',sci: '',eng: '', ...initialValues}}
        
//         validationSchema={SignupSchema}
//         enableReinitialize={true}

//         onSubmit={async (values, action) => {
//           if(row === null){
//             console.log(values);
//             const copy = [...data, values]
//             setData(copy)
//             setInitialValues()
//             action.resetForm()
//           }
//           else{
//             const copy = [...data, ]
//             copy[row] = values
//             setData(copy)
//             console.log(values);
//             setRow(null)
//             setInitialValues()
//             action.resetForm()
//           }
//         }}
//       >



//       <Form>
//         <label htmlFor="name">Name :- </label>
//         <Field id="name" name="name" placeholder="Name" /><ErrorMessage name="name" className='error' />

//         <label htmlFor="maths">Maths :- </label>
//         <Field id="maths" name="maths" placeholder="Maths" /><ErrorMessage name="maths" className='error' /><br />

//         <label htmlFor="sci">Science :- </label>
//         <Field id="sci" name="sci" placeholder="sci" /><ErrorMessage name="sci" className='error' />

//         <label htmlFor="eng">english :- </label>
//         <Field id="eng" name="eng" placeholder="eng" /><ErrorMessage name="eng" className='error' />

        
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>


//       <h2>Student Result</h2>

//       <table border={'1'} width={'50%'} align='center'>

//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Maths</th>
//             <th>English</th>
//             <th>Science</th>
//             <th>Delete</th>
//             <th>Update</th>
//           </tr>
//         </thead>

//         <tbody>
//           {
//               data.map((ele,index) => {
                
//                   return <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{ele.name}</td>
//                     <td>{ele.maths}</td>
//                     <td>{ele.sci}</td>
//                     <td>{ele.eng}</td>
//                     <td onClick={() => remove(index)} className='point'>Delete</td>
//                     <td onClick={() => update(index, ele.name, ele.maths, ele.sci, ele.eng)} className='point'>Update</td>
//                   </tr>
//               })
//             }
//         </tbody>

//       </table>



//     </div>
//   );
// }

// export default App;










// import { useState } from 'react';
// import './App.css';

// function App() {
  
//   const[data, setData] = useState([])
//   const[result, setResult] = useState([{name: '', maths: '', sci: '', eng: ''}])
//   const[row, setRow] = useState(null)
  
//   const inputhandler = (evt) =>{
//     setResult({...result, [evt.target.name]: evt.target.value})
//   }

//   const add = () =>{
//     if(row === null){
//       if(result.name && result.maths && result.sci && result.eng !== ''){
//         setData([...data, result])
//         // setResult({name: '', maths: '', sci: '', eng: ''})
//       }
//     }
//     else{
//       const copy = [...data]
//       copy[row] = result
//       setData(copy)
//       setRow(null)
//       setResult({name: '', maths: '', sci: '', eng: ''})
//     }
//   }

//   const remove = (idx) =>{
//     const copy = [...data]
//     copy.splice(idx,1)
//     setData(copy)
//   }

//   const update = (idx,a,b,c,d) =>{
//     setRow(idx)
//     setResult({name: a, maths: b, sci: c, eng: d})
//   }


//   const enter = (aa) => {
//     if(aa.key === 'Enter'){
//       add()
//     }
//   }

//   return (
//     <div className="App">

//       <h2>Fill Detail</h2>

//       Name :- <input type='text' name='name' onKeyDown={enter} value={result.name} onChange={inputhandler} placeholder='Name' />&nbsp;&nbsp;
//       Maths :- <input type='text' name='maths' onKeyDown={enter} value={result.maths} onChange={inputhandler} placeholder='maths' /><br />
//       Sci :- <input type='text' name='sci' onKeyDown={enter} value={result.sci} onChange={inputhandler} placeholder='sci' />&nbsp;&nbsp;
//       Eng :- <input type='text' name='eng' onKeyDown={enter} value={result.eng} onChange={inputhandler} placeholder='eng' /><br />

//       <button onClick={add}>Submit</button>

//       <h2>Student Result</h2>

//       <table border={'1'} width={'50%'} align='center'>

//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Maths</th>
//             <th>English</th>
//             <th>Science</th>
//             <th>Delete</th>
//             <th>Update</th>
//           </tr>
//         </thead>

//         <tbody>
//           {
//               data.map((ele,index) => {
                
//                   return <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{ele.name}</td>
//                     <td>{ele.maths}</td>
//                     <td>{ele.sci}</td>
//                     <td>{ele.eng}</td>
//                     <td onClick={() => remove(index)} className='point'>Delete</td>
//                     <td onClick={() => update(index, ele.name, ele.maths, ele.sci, ele.eng)} className='point'>Update</td>
//                   </tr>
//               })
//             }
//         </tbody>

//       </table>



//     </div>
//   );
// }

// export default App;








// import { useState } from 'react';
// import './App.css';

// function App() {
//   const[Result, setResult] = useState([])
//   const[Name, setName] = useState([])
//   const[Subject, setSubject] = useState([])
//   const[Marks, setMarks] = useState([])
//   const[Row, setRow] = useState([NULL])

//   let b2
  
  
//   function add(){
    
    

//     if(Row===Null){
//       if(Name && Subject && Marks != ''){
//         const newR = {Name, Subject, Marks: parseInt(Marks)}
        
//         setResult([...Result, newR])
//         // setName('')
//         // setSubject('')
//         // setMarks('')
//       }
//     }

//     else if(row!=NULL){
//       document.write('Demo')
//     }
    
//   } 
  
//   function delte(b){
//     const copy = [...Result]
//     copy.splice(b,1)
//     setResult(copy)
//   }
  
//   const update = (u,a,b,c) => {

//     setRow[u](Row)
    
//     const copy = [...Result]
//     copy[u] = {Name:setName(a) , Subject:setSubject(b) , Marks:setMarks(c)}
    
//       // setResult(copy)
//   }
  
//     function nn(aaa) {
//     if(aaa.key === "Enter"){
//         add();
//       }
//     }

    
  
//   return (
//     <div className="App">

//           <h2>Fill Detail</h2>

//         Name :- <input type='text' onKeyDown={nn} placeholder='Name' value={Name} onChange={(e) => {setName(e.target.value)}} />&nbsp;&nbsp;
//         Subject :- <input type='text' onKeyDown={nn} placeholder='Subject' value={Subject} onChange={(e) => {setSubject(e.target.value)}} /> <br />
//         Marks :- <input type='number' onKeyDown={nn} placeholder='Marks' value={Marks} onChange={(e) => {setMarks(e.target.value)}} /><br />

//         <button onClick={add}>Submit</button>

//           <h2>Student Result</h2>

//       <table border={1} width='60%' align='center'>
//         <tr>
//           <th>Name</th>
//           <th>Subject</th>
//           <th>Total</th>
//           <th>Delete</th>
//           <th>Update</th>
//         </tr>
        
//           {
//             Result.map((e,e2) => (
//               <tr>
//                 <td>{e.Name}</td>
//                 <td>{e.Subject}</td>
//                 <td>{e.Marks}</td>
//                 <td onClick={() => delte(e2)} className='point'>Delete</td>
//                 <td onClick={() => update(e2, e.Name, e.Subject, e.Marks)} id='b1' className='point' >Update</td>
//               </tr>
//             ))
//           }
        
//       </table>


//     </div>
//   );
// }

// export default App;




// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [Result, setResult] = useState([]);
//   const [Name, setName] = useState('');
//   const [Subject, setSubject] = useState('');
//   const [Marks, setMarks] = useState('');
//   const [Row, setRow] = useState(null);

//   function add() {

//     if (Row === null) {
//       if (Name && Subject && Marks !== '') {
//         const newR = { Name, Subject, Marks: parseInt(Marks) };
//         setResult([...Result, newR]);
//         setName('');
//         setSubject('');
//         setMarks('');
//       }
//     } 

//     else {
//       const copy = [...Result];
//       copy[Row] = { Name, Subject, Marks: parseInt(Marks) };
//       setResult(copy);
//       setRow(null);
//       setName('');
//       setSubject('');
//       setMarks('');
//     }
//   }

//   function delte(b) {
//     const copy = [...Result];
//     copy.splice(b, 1);
//     setResult(copy);
//   }

//   const update = (u, a, b, c) => {
//     setRow(u);
//     setName(a);
//     setSubject(b);
//     setMarks(c);
//   };

//   function nn(aaa) {
//     if (aaa.key === 'Enter') {
//       add();
//     }
//   }

//   return (
//     <div className="App">
//       <h2>Fill Detail</h2>
//       Name :-{' '}
//       <input
//         type="text"
//         onKeyDown={nn}
//         placeholder="Name"
//         value={Name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       &nbsp;&nbsp;
//       Subject :-{' '}
//       <input
//         type="text"
//         onKeyDown={nn}
//         placeholder="Subject"
//         value={Subject}
//         onChange={(e) => setSubject(e.target.value)}
//       />{' '}
//       <br />
//       Marks :-{' '}
//       <input
//         type="number"
//         onKeyDown={nn}
//         placeholder="Marks"
//         value={Marks}
//         onChange={(e) => setMarks(e.target.value)}
//       />
//       <br />
//       <button onClick={add}>Submit</button>
//       <h2>Student Result</h2>
//       <table border={1} width="60%" align="center">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Subject</th>
//             <th>Total</th>
//             <th>Delete</th>
//             <th>Update</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Result.map((e, e2) => (
//             <tr key={e2}>
//               <td>{e.Name}</td>
//               <td>{e.Subject}</td>
//               <td>{e.Marks}</td>
//               <td onClick={() => delte(e2)} className="point">
//                 Delete
//               </td>
//               <td
//                 onClick={() => update(e2, e.Name, e.Subject, e.Marks)}
//                 className="point"
//               >
//                 Update
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;














// import { useState } from 'react';
// import './App.css';

// function App() {
//   const[text, setText] = useState(["Monday", "Tuesday", "Wednesday"]);
//   const[data, setData] = useState([])

//   function add(){
//     const copy = [...text]
//     copy.push(data)
//     setText(copy)
//     setData('')
//   }
//   function remove(){
//     const copy = [...text]
//     copy.pop(data)
//     setText(copy)
//     setData('')
//   }

//   function nn(aaa) {
//     if(aaa.key === "Enter"){
//       add();
//     }
//   }
//   function nnn(aaaa) {
//     if(aaaa.key === "Backspace"){
//       remove();
//     }
//   }

//   return (
//     <div className="App">

//       <input type='text' onKeyDown={nn} onKeyUp={nnn} value={data} onChange={(u) => {setData(u.target.value)}} />
//       <button onClick={add}>add</button>
//       <button onClick={remove}>remove</button>
      
//       {
//         text.map((e) => (
//           <h1>{e}</h1>
//         ))
//       }

//     </div>
//   );
// }

// export default App;




// import './App.css';

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// import Home from './pages/Home';

// function App() {
//   return (
//     <div className="App">
      
//       <Router>
//         <Switch>

//           <Route path='/'>
//             <Home />
//           </Route>

//         </Switch>
//       </Router>

//     </div>
//   );
// }

// export default App;