import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
        .required( 'Truck name is required.' )
        .min( 3, 'Truck name must be at least 3 characters long.' ),

    cuisine_type: yup.string()
        .required( 'Cuisine type is required.' )
        .min( 3, 'Cuisine type must be 3 characters or longer.' ),

    img_url: yup.string()
} )