import React from 'react'
import { Paper } from '@mui/material'

function Footer() {
  return (
    <Paper sx={{
        marginTop: 'calc(10% + 60px)',
        position: 'fixed',
        bottom: 0,
        padding: 2,
        width: '100%'
    }} square variant='outlined'>
        Footer
    </Paper>
  )
}

export default Footer
