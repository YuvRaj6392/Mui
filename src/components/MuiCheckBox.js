import React, { useState } from 'react'

export default function MuiCheckBox() {
    const [items,setItems]=useState([])
    const onFormSubmit=(e)=>{
        e.preventDefault();
        
        if(document.getElementById('tea').checked)
        {
            var item=items;
            item.push('tea')
            setItems(item);
           
        }
       
        if(document.getElementById('coffee').checked)
        {
            var item=items;
            item.push('coffee')
            setItems(item);
           
        }
      
    }
  return (
    <div>
    <form onSubmit={onFormSubmit}>
    <input type="checkbox" id='tea'/>Tea
        <input type="checkbox"  id='coffee'/>Coffee
  
       
        <br />
        <input type="submit" />
        </form>
    </div>
  )
}
