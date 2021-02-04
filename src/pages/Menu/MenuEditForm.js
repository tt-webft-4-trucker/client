import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom' 
import NewMenuItem from './NewMenuItem'

//TODO: all of this 

export default function MenuEditForm( props ){
    const { dishname, dishdescription, price, image } = props.itemToEdit
    const [menuItem, setMenuItem] = useState( {
        dishname: dishname,
        dishdescription: dishdescription,
        price: price,
        image: image,
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
            dishname: dishname,
            dishdescription: dishdescription,
            price: price,
            image: image,
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
                            <label>Dish Name: {dishname} 
                                <input type='text' name='dishname' value={menuItem.dishname} onChange={onChange}/>
                            </label>
                            <label>Dish Description: {dishdescription}
                                <input type='text' name='dishdescription' value={menuItem.dishdescription} onChange={onChange}/>
                            </label>
                            <label>Price: {price}
                                <input type='number' name='price' value={menuItem.price} onChange={onChange}/>
                            </label>
                            <label>Image: {image}
                                <input type='text' name='image' value={menuItem.image} onChange={onChange}/>
                            </label>
                            <button className='' type='submit'>Submit Edits</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}