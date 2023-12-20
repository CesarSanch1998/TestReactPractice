import React from 'react';
import {ModButton} from './components/atoms/button/buttons';
import { ModInput } from './components/atoms/input/input';


export function App() {
  return (
    <>
      <ModButton iconbutton='4' typebutton="primary" sizebutton="middle" >Details</ModButton>
      <ModInput widthinput= 'form-small' placeholder='Serial Ont' ></ModInput>
    </>
  );
}

