import React from 'react'
import { useRef,useState } from 'react'



const TheApp = () => {
    const inputRef=useRef(null)
    const secondRef=useRef(null)
    const [result,setResult]=useState(0);

    function handleAdd(e){
        e.preventDefault()
        const a=Number(inputRef.current.value);
        const b=Number(secondRef.current.value);
        setResult(a+b)

    }
    function handleMultiply(e){
        e.preventDefault()
        const a=Number(inputRef.current.value);
        const b=Number(secondRef.current.value);
        setResult(a*b)
    }
    function handleDivide(e){
        e.preventDefault()
        const a=Number(inputRef.current.value);
        const b=Number(secondRef.current.value);
        setResult(a/b)
    }


  return (
    <>
    <h1>MY LAZY CALCULATOR</h1>

    
        <input ref={inputRef} placeholder='first value'/>
        <input ref={secondRef} placeholder='second value'/>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
        <p> {result} </p>
    
    
    
    </>
  )
}

export default TheApp