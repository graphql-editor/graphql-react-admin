import { Main } from './Main';
import React from 'react';
import { render } from 'react-dom';

const appMount = document.querySelector('#app');
if (appMount) render(<Main />, appMount);
