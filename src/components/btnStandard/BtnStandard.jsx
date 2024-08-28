/* eslint-disable react/prop-types */

import './BtnStandard.css'

function BtnStandard({titulo,...props}) {
  return (

    <>
    <button 
    className='btnStandard-p'
    type="button" 
    {...props} >{titulo}</button>
    </>
  )
}

export default BtnStandard