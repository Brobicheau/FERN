import React from 'react';
import App from '../components/App';
import styled from '@emotion/styled';

export default () => {
    function handleClick() {}
    function handleInputChange({ target: { value } }) {
        console.log(value);
    }
    return <App>Firebase app</App>;
};
