import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from '../store/action/userActon'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate()
    const { login, users } = useSelector(state => state.Allusers)
    const dispatch = useDispatch()

    useEffect(() => {

        login?.name ? navigate("/") : navigate("/signin")

    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            {
                                login?.name
                                    ? <>
                                        <Link className="nav-link active" to={"/"}  >Home</Link>
                                        <Link className="nav-link name" to={'/'}  > {login?.name} </Link>
                                        <Link onClick={e => {
                                            dispatch(logoutAction())
                                        }} className="nav-link" to={"/signin"}>Logout</Link>
                                    </>
                                    : <>
                                        <Link className="nav-link" to={"/signup"}>signup</Link>
                                        <Link className="nav-link" to={"/signin"}>login</Link>
                                    </>
                            }
                            {
                                login?.isAdmin && (<Link className="nav-link text-capitalize" to={"/admin/all-user"}>all users</Link>)

                            }



                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}
