import React from 'react'
import PropTypes from 'prop-types'

export default function Alerts(props) {
    const capitalize = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
  return (
  <div class="alert-height">
  { props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong> {capitalize(props.alert.type)}: </strong>{props.alert.msg}
</div>}
</div>
  )
}
