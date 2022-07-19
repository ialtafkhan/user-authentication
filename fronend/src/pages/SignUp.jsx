import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from "formik"
import *as yup from 'yup'
import { useDispatch } from "react-redux"
import { signInAction, signUpAction } from '../store/action/userActon'


export default function SignUp() {
    const [image, setimage] = useState()
    const [preview, setpreview] = useState()
    const dispatch = useDispatch()
    const formik = useFormik({

        initialValues: {
            name: "altaf",
            email: "altaf@gmail.com",
            password: "123",
            cpassword: "123",
        },
        validationSchema: yup.object({

            name: yup.string().required("its requaird filed"),
            email: yup.string().required("its requaird filed").email(),
            password: yup.string().required("its requaird filed"),
            cpassword: yup.string()
                .oneOf([yup.ref("password"), null, "password should be match"])

        }),
        onSubmit: ({
            name, email, password
        }) => {

            let fd = new FormData()
            fd.append("name", name)
            fd.append("email", email)
            fd.append("password", password)
            fd.append("image", image)
            console.log(fd);

            dispatch(signUpAction(fd))

        }
    })
    const handleImage = (e) => {
        setpreview(URL.createObjectURL(e.target.files[0]))
        setimage(e.target.files[0])
    }
    return (

        <>

            <div className="conatiner">
                {JSON.stringify(formik.errors)}
                {JSON.stringify(formik.values)}

                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header text-center">Signup</div>
                            <div className="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='mt-2' >
                                        <label className='form-label' htmlFor="name">Name</label>
                                        <input
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            type="text"
                                            id='name'
                                            placeholder='name'
                                            className={
                                                formik.errors.name
                                                    ? 'form-control is-invalid'
                                                    : 'form-control'
                                            }
                                        />

                                        <span className='invalid-feedback'> {formik.values.name} </span>

                                    </div>
                                    <div className='mt-2' >
                                        <label className='form-label' htmlFor="email">Email</label>
                                        <input
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            type="email"
                                            id='email'
                                            placeholder='pls email'
                                            className='form-control'
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
                                    <div className='mt-2' >
                                        <label className='form-label' htmlFor="cpassword">conrirm password</label>
                                        <input
                                            value={formik.values.cpassword}
                                            onChange={formik.handleChange}
                                            type="password"
                                            id='cpassword'
                                            placeholder='confirm  password'
                                            className='form-control'
                                        />

                                        <span className='invalid-feedback'></span>

                                    </div>

                                    <button className='btn btn-outline-primary' >
                                        uplaod file
                                        <input
                                            type="file"
                                            // hidden
                                            onChange={handleImage}
                                        />
                                    </button>
                                    <img src={preview} alt="" height={100} />


                                    <button className='btn btn-primary mt-3 w-100 ' type='submit' >signup</button>
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
