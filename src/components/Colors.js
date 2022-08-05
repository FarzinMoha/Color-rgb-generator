import React, { useEffect, useState } from 'react'
import rgbToHex from './rgb'
import './Colors.css'

function Colors(props) {
    const [alert , setAlert] = useState(false)
    const color = props.color
    const rgb = color.rgb
    const hex = rgbToHex(rgb[0],rgb[1],rgb[2])



    const copy = () =>{
        setAlert(true)
        navigator.clipboard.writeText(hex)
    }

    useEffect(()=>{
        const time = setTimeout(()=>{setAlert(false)},1000)
        return () => clearTimeout(time)
    },[alert])

  return (
    <div onClick={()=>copy()} className='color' style={{backgroundColor:`rgb(${rgb})`}}>
        <p>{color.weight}%</p>
        <p>{hex}</p>
        <p className='clipboard'>{alert ? 'copy on clipboard' : null}</p>
    </div>
  )
}

export default Colors