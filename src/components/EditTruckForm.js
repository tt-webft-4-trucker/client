import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';
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
export default function EditTruckForm( props ){
    const { truck } = props;
  return(
    <div id="main-wrapper">
            <div className="container">
                <div className="row gtr-200">
                    <div className="col-8 col-12-large imp-medium">
                        <div id="content">
                            <section className="last">
                                <h2>Edit Truck</h2>
                                <form>
                                <div className='errors'>
                                    <div></div>
                                    <div></div>
                                </div>
                                <label>Truck name:&nbsp;
                                    <input type='text' name='name'/>
                                </label>
                                <label>Cuisine Type:&nbsp;
                                    <input type='text' name='cuisine_type'/>
                                </label>
                                
                                <label>Image URL:&nbsp;
                                    <input type='text' name='img_url' />
                                </label>
                                <button className="button icon solid fa-arrow-circle-right" type="submit">Submit</button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}