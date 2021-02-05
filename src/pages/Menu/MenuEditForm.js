import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom' 
import NewMenuItem from './NewMenuItem'

//TODO: all of this 

export default function MenuEditForm( props ){
    const { item_name, item_description, item_price, item_photos } = props.itemToEdit
    const [menuItem, setMenuItem] = useState( {
        item_name: item_name,
        item_description: item_description,
        item_price: item_price,
        item_photos: item_photos,
    } )

    const onChange = (e) => {
        const { name, value, type } = e.target
        setMenuItem({
            ...menuItem,
            [name]: value,
          });
    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.addDish(menuItem, {
            item_name: item_name,
            item_description: item_description,
            item_price: item_price,
            item_photos: item_photos,
        })
        props.setIsEditing(false)
    }

    return(
        <div id='wrapper'>
            <div>
                <div id='content'>
                    <section>
                        <h2>Edit Menu</h2>
                        <form onSubmit={onSubmit}>
                            <div className='errors'>
                                <div></div>
                            </div>
                            <label>Dish Name: {item_name} 
                                <input type='text' name='item_name' value={menuItem.item_name} onChange={onChange}/>
                            </label>
                            <label>Dish Description: {item_description}
                                <input type='text' name='item_description' value={menuItem.item_description} onChange={onChange}/>
                            </label>
                            <label>item_price: {item_price}
                                <input type='number' name='item_price' value={menuItem.item_price} onChange={onChange}/>
                            </label>
                            <label>item_photos: {item_photos}
                                <input type='text' name='item_photos' value={menuItem.item_photos} onChange={onChange}/>
                            </label>
                            <button className='' type='submit'>Submit Edits</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}