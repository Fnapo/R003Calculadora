import * as React from 'react';

import '../css/Pantalla.css';
/*
class PantallaProps {
    cadena: string;
}
*/
const Pantalla = (props) => {
    return (
        <div className='d-flex valores justify-content-end align-items-center border-3 border-white rounded-3'>
            {props.cadena}
        </div>
    );
};

export default Pantalla;
