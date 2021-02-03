import React, { useState, useEffect } from 'react';


export default function NewMenuItem(props) {
    const { menuItems, setMenuItems } = props;
    const [formValues, setFormValues] = useState ({})
    const [errors, setErrors] = useState({name:''})
    
    

    const onSubmit = (e) => {
        e.preventDefault()
        setMenuItems( [...menuItems, formValues] )
    }

    const onChange = (e) => {
        const { name, value, type } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
          });
    }
    
    return(
        <div>
            <h1>Add Menu Item</h1>

            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>
                            Dish Name: 
                            <input
                                type="text"
                                name="dishname"
                                onChange={onChange}
                                value={formValues.dishname}
                            />
                        </label>
                        <p>{errors.dishname}</p>
                        
                        <label>
                            Dish Description:
                            <input
                            type="text"
                            name="dishdescription"
                            onChange={onChange}
                            value={formValues.dishdescription}
                            />
                        </label>


                        <label>
                            Price:
                        <input
                            type="number"
                            name="price"
                            onChange={onChange}
                            value={formValues.price}
                        />
                        </label>
                        <p>{errors.price}</p>

                        <label>
                            Image:
                            <input
                            type="text"
                            name="image"
                            onChange={onChange}
                            value={formValues.image}
                            />
                        </label>
                        <p>{errors.image}</p>

                    </div>
                    <div>
                        <button type="submit">
                            Submit Dish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
