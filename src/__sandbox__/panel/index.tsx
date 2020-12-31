import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const appMount = document.querySelector('#app');
if (appMount) render(<App />, appMount);
