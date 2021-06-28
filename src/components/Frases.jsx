import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorFrase = styled.div ` 
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: -1rem;
            top:-2;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;

    }
`;

const Frases = ({frase}) => {

    if(Object.keys(frase).length === 0) return null;



    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </ContenedorFrase>
        
     );
}
Frases.propTypes = {
    frase: PropTypes.object.isRequired
}
 
export default Frases;