import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../counterSlice'

function Counter() {
    const [amount,setAmount] = useState(0)
    const dispatch = useDispatch()
    const count = useSelector(state=>state.counterReducer.count)
    const handleIncrementByAmount = ()=>{
        if(amount){
            dispatch(incrementByAmount(amount))
        }else{
            alert('Enter a valid amount')
        }
    }
    return (
        <>
            <div className='mt-5'>
                <h1 className='text-center' style={{ color: 'white' }}>COUNTER APP</h1>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='counter text-center p-3 mt-3'>
                    {/* <input style={{ fontSize: '100px' }} className='display text-center' type="text" disabled/> */}
                    <h1 className='display text-center' style={{fontSize:'130px',color:'white'}}>{count}</h1>
                    <div className='container d-flex justify-content-between p-3'>
                        <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
                        <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
                    </div>
                    <div className='d-flex p-3'>
                        <input onChange={e=>setAmount(e.target.value)} style={{ border: '1px solid white' }} className='w-75 text-center form-control' type="text" placeholder='Enter the amount to be incremented' />
                        <button onClick={handleIncrementByAmount} className='btn btn-primary ms-3'>Increment by Amount</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter