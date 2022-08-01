import React from 'react'
import { LinearProgress } from '@mui/material';

interface Props {
    value : number
  }

function ProgressBar({value} : Props) {
    return (
        <LinearProgress variant="buffer" value={value}  style={{width: 200}}/>
      );
}

export default ProgressBar