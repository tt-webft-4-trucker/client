import React, { useState, useEffect, useContext } from 'react';

import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as yup from 'yup';
import schema from '../validation/addTruckSchema';
import { UserContext } from "../utils/UserContext";


const initFormVals = {
    name: '',
    cuisine_type: '',
    img_url: '',
}
const initFormErrors = {
    name: '',
    cuisine_type: '',
}
const initialTruck = [];
const initialDisabled = true;

export default function AddTruckForm( props ){

 const { user } = useContext(UserContext);

 const [ truck, setTruck ] = useState( initialTruck );
 const [ formVals, setFormVals ] = useState( initFormVals );
 const [ formErrs, setFormErrs ] = useState( initFormErrors );
 const [ disabled, setDisabled ] = useState( initialDisabled );


    const postTruck = newTruck => {
        axiosWithAuth()
        .post( `https://truck-server.herokuapp.com/trucks`, newTruck )
        .then( res => setTruck( res.data ) )
        .catch( err => console.log( err ) );
    }


    const submitForm = ( event ) => {
        event.preventDefault();
        const newTruck = {
            operator_id: user.operator_id,
            name: formVals.name.trim(),
            cuisine_type: formVals.cuisine_type.trim(),
            img_url: formVals.img_url,
        }
        postTruck( newTruck );
    }
    
    const handleChange = ( name, value ) => {
        yup.reach( schema, name )
        .validate( value )
        .then( () => {
          setFormErrs( {
            ...formErrs,
            [name]: "",
          })
        })
        .catch( err => {
          setFormErrs( {
            ...formErrs, 
            [ name ]: err.errors[ 0 ],
          })
        })
        setFormVals({
          ...formVals,
          [name]: value
        })
      }

      const onChange = event => {
          const { name, value } = event.target;
          handleChange( name, value );
      }
    useEffect( () => {
        schema.isValid( formVals ).then( valid => setDisabled( !valid ) )
    }, [ formVals ])
  return(
      
    <div>
        <div id="main-wrapper">
            <div className="container">
                <div className="row gtr-200">
                    <div className="col-8 col-12-large imp-medium">
                        <div id="content">
                            <section className="last">
                                <h2>Add Truck</h2>
                                <form onSubmit={ submitForm }>
                                <div className='errors'>
                                    <div>{formErrs.name}</div>
                                    <div>{formErrs.cuisine_type}</div>
                                </div>
                                <label>Truck name:&nbsp;
                                    <input type='text' name='name' onChange={ onChange } value={ formVals.name } />
                                </label>
                                <label>Cuisine Type:&nbsp;
                                    <input type='text' name='cuisine_type' onChange={ onChange } value={ formVals.cuisine_type } />
                                </label>
                                
                                <label>Image URL:&nbsp;
                                    <input type='text' name='img_url' onChange={ onChange } value={ formVals.img_url } />
                                </label>
                                <button className="button icon solid fa-arrow-circle-right" type="submit" disabled={ disabled }>Submit</button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}