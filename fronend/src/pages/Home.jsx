import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"

import { getAllUserAction } from '../store/action/userActon'

export default function Home() {
    const dispatch = useDispatch()
    const { login, users } = useSelector(state => state.user)
    console.log(users);
    useEffect(() => {
        dispatch(getAllUserAction())
    }, [])
    return (
        <>


            {/* {

                users?.map((item, index) => (<div key={index} >

                    <div  > name: {item?.name} </div>
                    <img src={`http://localhost:4000/${item?.image}`} alt="" height={100} />
                </div >


                ))
            } */}



        </>
    )
}
