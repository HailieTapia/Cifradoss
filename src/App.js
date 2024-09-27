import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './componentes/MainLayout';
import Principal from './componentes/Principal';
import Cesar from './componentes/Cesar';
import Escitala from './componentes/Escitala';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Principal />} />  {/* Página principal */}
                <Route path="cesar" element={<Cesar />} /> {/* Página de Cifrado César */}
                <Route path="escitala" element={<Escitala />} /> {/* Página de Cifrado Escítala */}
            </Route>
        </Routes>
    );
}

export default App;
