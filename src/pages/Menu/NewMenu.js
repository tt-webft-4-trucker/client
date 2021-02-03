import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import NewMenuItem from './NewMenuItem';

//TODO: import items from backend to populate menu
//TODO: schema
//TODO: make the menu populate when accessed
//TODO: also route everything

function NewMenu({ menuValues, setMenuValues }){
    const [formValues, setFormValues] = useState ({})
    const [errors, setErrors] = useState({})
    const [disabled, setDisabled] = useState(true)
    const [menuItems, setMenuItems] = useState([])


const onFormSubmit = event => {
    
}


return(
<div>
    <div>
        
        <NewMenuItem
            menuItems={menuItems}
            setMenuItems={setMenuItems}
        />
    </div>
</div>
    )
}
export default NewMenu