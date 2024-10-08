import React from 'react';
import { Button, Box } from '@mui/material';

export default function Botoes({ setPalavrasEncontradas }) {
  const iniciarJogo = () => {
    setPalavrasEncontradas(new Set());

  };

  const reiniciarJogo = () => {
    setPalavrasEncontradas(new Set());
  };

  return (
    <Box display="flex" justifyContent="center" gap={2}>
      <Button variant="contained" color="primary" onClick={iniciarJogo}>
        Iniciar
      </Button>
      <Button variant="contained" color="neutral" onClick={reiniciarJogo}>
        Reiniciar
      </Button>
    </Box>
  );
}
