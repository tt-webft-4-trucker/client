import React, { useState, useEffect } from 'react';
import MenuEditForm from './MenuEditForm'


export default function NewMenuItem(props) {
    const { menuItems, setMenuItems } = props;
    console.log(menuItems)
    const [isEditing, setIsEditing] = useState(false)
    const [formValues, setFormValues] = useState ({
        dishname: '',
        dishdescription: '',
        price: '',
        image: '',
    })
    const [errors, setErrors] = useState({name:''})

    useEffect(() => {}, [menuItems])
  
   const addDish = (newDish, originalDish) => {
       console.log(newDish, originalDish)
        const existingDish = menuItems.find((menuItem) => (
            menuItem.dishname === originalDish.dishname))
        let filteredMenuItems;
        if(existingDish){
        filteredMenuItems = menuItems.filter(menuItem => (menuItem.dishname !== originalDish.dishname))
        console.log(filteredMenuItems)
        }
        filteredMenuItems ? setMenuItems([...filteredMenuItems, newDish]) : setMenuItems([...menuItems, newDish])
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addDish(formValues)
        setFormValues({
            dishname: '',
            dishdescription: '',
            price: '',
            image: '',
        })
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
                            Create Dish
                        </button>
                    </div>
                </form>
                <div>

                    {menuItems && menuItems.map(menuItem => (
                        <div>
                            <p>{menuItem.dishname}</p>
                            <p>{menuItem.dishdescription}</p>
                            <p>{menuItem.price}</p>
                            <p>{menuItem.image}</p>
                            <button onClick={()=> setIsEditing(true)}>Edit Dish</button>
                            {isEditing && 
                                <MenuEditForm itemToEdit={menuItem} addDish={addDish} setIsEditing={setIsEditing}/>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
