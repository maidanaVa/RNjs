import React from 'react'
 import { Text, View } from 'react-native';
 import { NativeRouter,Routes, Route} from "react-router-native";
import Characters from './src/componentes/characters/Characters.js';
import Home from './src/componentes/home/Home.js';
import Login from './src/componentes/login/Login.js';
import Register from './src/componentes/register/Register.js';




export default function App () {

    return (
      <NativeRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/logIn" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/characters" element={<Characters/>} />
        </Routes>
      </NativeRouter>
    )
  }


