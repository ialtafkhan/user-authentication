import React from 'react'
import { useFormik } from 'formik';
import *as yup from 'yup'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { signInAction } from '../store/action/userActon';


export default function SignIn() {

    const dispatch = useDispatch()
    const formik = useFormik({

        initialValues: {
            email: "altaf@gmail.com",
            password: "123",

        },
        validationSchema: yup.object({
            email: yup.string().required("its requaird filed").email("emial req"),
            password: yup.string().required("its requaird filed"),

        }),
        onSubmit: (values) => {

            console.log(values);
            dispatch(signInAction(values))

        }

    })

    return (

        <>
            <div className="conatiner">
                {JSON.stringify(formik.errors)}
                {JSON.stringify(formik.values)}

                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header text-center">Login</div>
                            <div className="card-body">
                                <form onSubmit={formik.handleSubmit}>

                                    <div className='mt-2' >
                                        <label className='form-label' htmlFor="email">Email</label>
                                        <input

                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            type="email"
                                            id='email'
                                            placeholder='pls email'
                                            className={
                                                formik.errors.email
                                                    ? 'form-control is-invalid'
                                                    : 'form-control'
                                            }
                                        />

                                        <span className='invalid-feedback'></span>

                                    </div>
                                    <div className='mt-2' >
                                        <label className='form-label' htmlFor="password">password</label>
                                        <input

                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            type="password"
                                            id='password'
                                            placeholder='enter password'
                                            className='form-control'
                                        />

                                        <span className='invalid-feedback'></span>

                                    </div>

                                    <button className='btn btn-primary mt-3 w-100 ' type='submit' >login</button>
                                    <p className='text-center' >
                                        already have acount? <Link to={'/signin'} >Login</Link>
                                    </p>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
