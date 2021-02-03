import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Reg } from './src/components/Reg.js';
import { Main } from './src/components/Main.js';

// const axios = require('axios').default;

// axios
//     .get('/user?ID=12345')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });

export default function App() {
    const [account, setAccount] = useState(false);

    const newUserRegistration = (date) => {
        console.log(date);
        setAccount({
            date,
            name: 'Nikita',
        });
    };

    return account ? (
        <Main></Main>
    ) : (
        <Reg newUserRegistration={newUserRegistration}></Reg>
    );
}
