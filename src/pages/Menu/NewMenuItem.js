import React, { useState, useEffect } from 'react';
import MenuEditForm from './MenuEditForm'
import { axiosWithAuth } from "../../utils/axiosWithAuth.js"
import { useParams } from 'react-router-dom'


export default function NewMenuItem(props) {
    const { menuItems, setMenuItems } = props;
    const [isEditing, setIsEditing] = useState(false)
    const [formValues, setFormValues] = useState ({
        item_name: '',
        item_description: '',
        item_price: '',
        item_photos: '',
    })
    const [errors, setErrors] = useState({name:''})

    useEffect(() => {}, [menuItems])

    const { truck_id } = useParams();
  
   const addDish = (newDish, originalDish) => {
       console.log(newDish, originalDish)
        const existingDish = menuItems.find((menuItem) => (
            menuItem.item_name === originalDish.item_name))
        let filteredMenuItems;
        if(existingDish){
        filteredMenuItems = menuItems.filter(menuItem => (menuItem.item_name !== originalDish.item_name))
        console.log(filteredMenuItems)
        }
        filteredMenuItems ? setMenuItems([...filteredMenuItems, newDish]) : setMenuItems([...menuItems, newDish])
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log( typeof truck_id);
        axiosWithAuth().post('https://truck-server.herokuapp.com/menu/item', {...formValues, truck_id:Number(truck_id)})
        .then((res) => {
            console.log(res.data)

        })
        .catch((err) => {
            console.log("MENU ERROR: ", err)
        })
        addDish(formValues)

        setFormValues({
            item_name: '',
            item_description: '',
            item_price: '',
            item_photos: '',
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
                                name="item_name"
                                onChange={onChange}
                                value={formValues.item_name}
                            />
                        </label>
                        <p>{errors.item_name}</p>
                        <label>
                            Dish Description:
                            <input
                            type="text"
                            name="item_description"
                            onChange={onChange}
                            value={formValues.item_description}
                            />
                        </label>


                        <label>
                            Price:
                        <input
                            type="number"
                            name="item_price"
                            onChange={onChange}
                            value={formValues.item_price}
                        />
                        </label>
                        <p>{errors.item_price}</p>

                        <label>
                            Picture:
                            <input
                            type="text"
                            name="item_photos"
                            onChange={onChange}
                            value={formValues.item_photos}
                            />
                        </label>
                        <p>{errors.item_photos}</p>

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
                            <p>{menuItem.item_name}</p>
                            <p>{menuItem.item_description}</p>
                            <p>{menuItem.item_price}</p>
                            <p>{menuItem.item_photos}</p>
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
