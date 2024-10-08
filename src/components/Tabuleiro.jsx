import React, { useState, useEffect } from 'react';
import {  Box } from '@mui/material';
import Grid from '@mui/joy/Grid';

const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const palavras = ['DAENERYS', 'RHAENYRA', 'ALICENT', 'DAEMON', 'AEGON', 'AEMOND', 'VISERYS',
    'VISENYA', 'AENYS, AERYS', 'RHAENYS', 'HELAENA', 'JAEHAERYS', 'VISENYA', 
    'RHAENA', 'MAEGOR', 'LUCERYS', 'RHAELLA'];

export default function Tabuleiro({ setPalavrasEncontradas }) {
  const [grid, setGrid] = useState(Array.from({ length: 23 }, () => Array(18).fill('')));
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);

  useEffect(() => {
    criarTabuleiro();
  }, []);

  const criarTabuleiro = () => {
    let novoGrid = Array.from({ length: 23 }, () => Array(18).fill(''));
    palavras.forEach(palavra => {
      colocarPalavraNaMatriz(novoGrid, palavra);
    });
    setGrid(novoGrid);
  };

  const colocarPalavraNaMatriz = (matriz, palavra) => {
    const orientacao = Math.random() < 0.5; 
    const linha = Math.floor(Math.random() * (orientacao ? 23 : 23 - palavra.length));
    const coluna = Math.floor(Math.random() * (orientacao ? 18 - palavra.length : 18));

    for (let i = 0; i < palavra.length; i++) {
      if (orientacao) {
        matriz[linha][coluna + i] = palavra[i]; // Coloca horizontalmente
      } else {
        matriz[linha + i][coluna] = palavra[i]; // Coloca verticalmente
      }
    }
  };

  const gerarLetraAleatoria = () => letras.charAt(Math.floor(Math.random() * letras.length));

  const selecionarLetra = (letra, posicao) => {
    setLetrasSelecionadas(prevState => [...prevState, { letra, posicao }]);
    verificarPalavraSelecionada([...letrasSelecionadas, { letra, posicao }]);
  };

  const verificarPalavraSelecionada = (selecoes) => {
    const palavraSelecionada = selecoes.map(item => item.letra).join('');
    
    if (palavras.includes(palavraSelecionada)) {
      setPalavrasEncontradas(prev => new Set([...Array.from(prev), palavraSelecionada]))
      setLetrasSelecionadas([]);
    }
  };

  const isSelecionada = (posicao) => {
    return letrasSelecionadas.some(selecao => selecao.posicao === posicao);
  };

  return (
    <Grid container spacing={1}>
      {grid.map((linha, i) =>
        linha.map((letra, j) => (
          <Grid item key={`${i}-${j}`} xs={1}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor={isSelecionada(`${i}-${j}`) ? 'rgba(10, 10, 10, 0.863)' : '#2b2b2b'}
              color={isSelecionada(`${i}-${j}`) ? 'rgb(218, 215, 215)' : 'white'}
              width={30}
              height={30}
              sx={{ cursor: 'pointer', border: '1px solid #8686861c' }}
              onClick={() => selecionarLetra(letra || gerarLetraAleatoria(), `${i}-${j}`)}
            >
              {letra || gerarLetraAleatoria()}
            </Box>
          </Grid>
        ))
      )}
    </Grid>
  );
}
