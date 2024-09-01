/* eslint-disable react/prop-types */

import './BtnStandard.css'

function BtnStandard({titulo,tipo,...props}) {
  
  let claseBtn = "btnStandard-p";
 
  if(tipo=="normal"){
    claseBtn="btnStandard-p"
  }
  if(tipo=="small"){
    claseBtn="btnStandard-p-small"
  }


  return (

    <>
    <button 
    className={claseBtn}
    type="button" 
    {...props} >{titulo}</button>
    </>
  )
}

export default BtnStandard