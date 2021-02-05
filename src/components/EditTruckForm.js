import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as yup from 'yup';
import schema from '../validation/addTruckSchema';
import styled from 'styled-components';


const initFormVals = {
    name: '',
    cuisine_type: '',
    img_url: '',
}
const initFormErrors = {
    name: '',
    cuisine_type: '',
}
const initialDisabled = true;

export default function EditTruckForm( props ){
    const [ truck, setTruck ] = useState( {} );
    const [ formVals, setFormVals ] = useState( initFormVals );
    const [ formErrs, setFormErrs ] = useState( initFormErrors );
    const [ disabled, setDisabled ] = useState( initialDisabled );

    const { id } = useParams();

    const getTruckById = ( truckID ) => {
        axiosWithAuth()
        .get( `https://truck-server.herokuapp.com/trucks/${truckID}` )
        .then( res => {
            setTruck( res.data );
            setFormVals({
                truck_id: res.data.truck_id,
                name: res.data.name,
                cuisine_type: res.data.cuisine_type,
                img_url: res.data.img_url,
            })
        })
        .catch( err => console.log( err ) )
    }
    
    const editTruck = modifiedTruck => {
        axiosWithAuth()
        .put( `https://truck-server.herokuapp.com/trucks`, modifiedTruck )
        .then( res => setTruck( res.data ) )
        .catch( err => console.log( err ) )
    }

    const submitEdit = ( event ) =>{
        event.preventDefault();
        const modifiedTruck = {
            truck_id: id,
            name: formVals.name.trim(),
            cuisine_type: formVals.cuisine_type.trim(),
            img_url: formVals.img_url,
        }
        editTruck( modifiedTruck );

    }

    useEffect( () => {
        getTruckById(id);
    }, [ id ])

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

    if(!truck){
        return <div>Loading Truck Info...</div>;
    }

  return(
    <div id="main-wrapper">
        <EditStyle>
            <div className="container">
                <div className="row gtr-200">
                    <div className="col-8 col-12-large imp-medium">
                    <h2>Edit Truck</h2>

                        <div id="content">
                            <section className="last">
                                {/* <h2>Edit Truck</h2> */}
                                <form onSubmit={ submitEdit }>
                                <div className='errors'>
                                    <div>{formErrs.name}</div>
                                    <div>{formErrs.cuisine_type}</div>
                                </div>
                                <label>Truck name:&nbsp;
                                    <input type='text' name='name' onChange={ onChange } value={ formVals.name }/>
                                </label>
                                <label>Cuisine Type:&nbsp;
                                    <input type='text' name='cuisine_type' onChange={ onChange } value={ formVals.cuisine_type }/>
                                </label>
                                
                                <label>Image URL:&nbsp;
                                    <input type='text' name='img_url' onChange={ onChange } value={ formVals.img_url } />
                                </label>
                                <button className="button icon solid fa-arrow-circle-right" type="submit" disabled={ disabled }>Save</button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </EditStyle>
    </div>
  );
}

const EditStyle = styled.div`
    width: 34rem;
    margin: auto;

    #content {
        background-color: #F8F8F8;
        padding: 2rem;
        border: 1px solid #CDCDCD;
        border-radius: 8px;
        margin-top:-14px;
    }

    button {
        margin-top: 14px;
    }
`