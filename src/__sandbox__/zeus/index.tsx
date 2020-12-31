import { ZeusApp } from './ZeusApp';
import React from 'react';
import { render } from 'react-dom';

const appMount = document.querySelector('#app');
if (appMount) render(<ZeusApp />, appMount);
