import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
// import { redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { firebase } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignIn = (props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
        email: 'emarhdureal@gmail.com',
        password: 'Azerty123',
    },
    validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('The email address is required'),
        password: Yup.string().required('The password is required'),
    }),
    onSubmit: (values) => {
        setLoading(true);
        // console.log(values);
        submitForm(values);
    }
  });

  const submitForm = async(values) => {
    // e.preventDefault();
    try {
        firebase.auth().signInWithEmailAndPassword(values.email, values.password);
        toast('Wow so easy');
        navigate('/dashboard');
    } catch(error) {
        setLoading(false);
        // alert(error);
        toast(error);
    };
  }
  return (
    <div className='container'>
        <div className="signin_wrapper" style={{ margin: '100px' }}>
            <form onSubmit={formik.handleSubmit}>
                <h2>Please, Login</h2>
                
                <input 
                    type='email' 
                    placeholder='Email'
                    name='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? 
                    <div className='error_label'>
                        {formik.errors.email}
                    </div>
                    : null
                }

                <input 
                    type='password' 
                    placeholder='Password'
                    name='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? 
                    <div className='error_label'>
                        {formik.errors.password}
                    </div>
                    : null
                }

                {loading ? <CircularProgress color='secondary' className='progress' /> : <button>Log in</button>}
            </form>
        </div>
    </div>
  )
}

export default SignIn;
