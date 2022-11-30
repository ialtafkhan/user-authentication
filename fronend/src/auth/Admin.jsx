import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Admin({ element }) {
    const navigate = useNavigate()
    const x = localStorage.getItem("signin")
    const localdata = JSON.parse(localStorage.getItem("signin"))

    React.useEffect(() => {
        if (!x || !localdata?.isAdmin) {
            navigate('/signin')
        }
    }, [])

    if (!x || !localdata?.isAdmin) {
        return 'you are not authorized'
    }
    return element

}
