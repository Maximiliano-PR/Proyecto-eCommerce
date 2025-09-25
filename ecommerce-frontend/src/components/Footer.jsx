import React from 'react'
import { Paper} from '@mui/material'
import Socials from './Socials'

function Footer() {
  return (
    <Paper sx={{
      marginTop: 'calc(10% + 60px)',
      position: 'fixed',
      bottom: 0,
      padding: 2,
      width: '100%',
      textAlign: 'center',
      }} square variant='outlined'>
      <Socials></Socials>
    </Paper>
  )
}

export default Footer
