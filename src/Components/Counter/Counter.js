import React from 'react';
import './counter.css';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { MdRefresh } from 'react-icons/md';

// redux implement on my app
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, resNumber } from '../../Redux/action/index'

export default function Counter() {

   // const [count, setCount] = useState(0);

   const myState = useSelector((state) => state.changeNumber);

   const dispatch = useDispatch();
    
    const increment = () => {
        dispatch(incNumber());
    }

    const decrement = () => {

        if(myState !== 0) {
            dispatch(decNumber());
        }
    }


    const resetvalue = () => {
        dispatch(resNumber());
    }

    return (

        <div className='counter'> 
            <div className='counterWrapper'>
                <button className='counterNegative' onClick={decrement}><AiOutlineMinusCircle /></button>
                <div className='counterNum' >{myState}</div>
                <button className='counterPlus' onClick={increment}><AiOutlinePlusCircle /></button>
            </div>
            <div className='reset'>
                <button className='counterReset' onClick={resetvalue}><MdRefresh className='icon' /> Reset</button>
            </div>
        </div>
    )
}
