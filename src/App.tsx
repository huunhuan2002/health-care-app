import React from 'react';
import './App.scss';
import logo from './asset/image/logo.svg';
import { Button, Stack } from '@mui/material';

function App() {
  return (
    <div>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
