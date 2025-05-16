import * as React from 'react';

import '../css/BotonBorrar.css';
/*
class BotonBorrarProps {
    OnClick: () => void;
}
*/
const BotonBorrar /*: React.FunctionComponent<BotonBorrarProps>*/ = (props) => {
    return (
        <button className='text-white cuerpo btn btn-danger'
            onClick={props.OnClick}>
            Borrar
        </button>
    );
};

export default BotonBorrar;
