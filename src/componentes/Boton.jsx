import * as React from 'react';
import '../css/Boton.css';

import { esOperador } from '../funciones';
/*
class BotonProps {
    children: string;
    OnClick: (valor) => void;
}*/

const Boton = (props) => {
    /*
        const esOperador = (texto) => {
            return (isNaN(+texto) && (texto !== '.') && (texto !== '='))
        }*/

    return (
        <button className={`text-white cuerpo btn ${props.NoActivo} ${esOperador(props.children) ? 'btn-success' : 'btn-primary'}`}
            onClick={() => props.OnClick(props.children)} >
            {props.children}
        </button>
    );
};

export default Boton;

