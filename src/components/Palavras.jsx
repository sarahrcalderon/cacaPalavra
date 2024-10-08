import React from 'react';
import { Box, Typography} from '@mui/material';
import Grid from '@mui/joy/Grid';



const palavras = ['DAENERYS', 'RHAENYRA', 'ALICENT', 'DAEMON', 'AEGON', 'AEMOND', 'VISERYS',
                  'VISENYA', 'AENYS, AERYS', 'RHAENYS', 'HELAENA', 'JAEHAERYS', 'VISENYA', 
                  'RHAENA', 'MAEGOR', 'LUCERYS', 'RHAELLA'];

export default function Palavras({ palavrasEncontradas }) {
  return (
    <Box id="palavras-encontradas" mt={10}>
      <Typography>
        {Array.from(palavrasEncontradas).join(', ')}
      </Typography>
      <Grid container spacing={1}>
        {palavras.map((palavra, index) => (
          <Grid item xs={5} key={index}>
            <Typography>{palavra}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
