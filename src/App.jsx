import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Botoes from './components/Botoes';
import Tabuleiro from './components/Tabuleiro';
import Palavras from './components/Palavras';

function App() {
  const [palavrasEncontradas, setPalavrasEncontradas] = useState(new Set());

  return (
    <Container maxWidth="lg" className="container">
      <Typography variant="h4" align="center" gutterBottom>
        Caça-Palavras
      </Typography>
      <Botoes setPalavrasEncontradas={setPalavrasEncontradas} />
      <Palavras palavrasEncontradas={palavrasEncontradas} />
      <Tabuleiro setPalavrasEncontradas={setPalavrasEncontradas} />
    </Container>
  );
}

export default App;
