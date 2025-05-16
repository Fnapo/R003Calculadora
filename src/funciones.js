const OPERADORES = ['+', '-', '/', '*'];

export const esOperador = (caracter) => {
    return OPERADORES.includes(caracter + '');
};
