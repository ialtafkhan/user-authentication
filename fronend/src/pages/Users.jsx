import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUserAction } from '../store/action/userActon';
function Users() {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.Allusers)
    console.log(users);
    useEffect(() => {

        dispatch(getAllUserAction())

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-xl-4 offset-xl-4 offset-sm-2">
                    {
                        users.map((item, index) => <div key={index} className="card mt-5">
                            <div className="card-header text-center text-capitalize text-black">user profile</div>

                            <div className="card-body">
                                <div className='d-flex justify-content-center align-items-center '  >
                                    <img src={`http://localhost:4000/${item?.image}`} alt='please' className='rounded-circle w-75' />
                                </div>
                                <p className='text-center text-black text-capitalize'>my profile</p>
                                <div className='text-black d-flex justify-content-center align-items-center  gap-5  '  >
                                    <p> {item?.name} </p>
                                    <p>(+91)- {item?.mobile} </p>
                                </div>
                                <hr style={{ color: 'grey' }} />
                                <div>
                                    <p className='text-black ms-3 ' >{item?.email} </p>
                                </div>
                                <hr style={{ color: 'grey' }} />
                                <button className=' align-items-center w-50 btn btn-success ' style={{ marginLeft: "25%" }}  >save</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Users    