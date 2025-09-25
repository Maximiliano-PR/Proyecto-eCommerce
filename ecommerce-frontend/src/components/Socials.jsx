import React from 'react'
import { Link } from '@mui/material';//hay uno de router
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Socials() {
  return (
    <div>
      <Link href="https://google.com" target="_blank">
        <FacebookIcon></FacebookIcon>
      </Link>
      <Link href="https://google.com" target="_blank">
        <InstagramIcon></InstagramIcon>
      </Link>
      <Link href="https://google.com" target="_blank">
        <XIcon></XIcon>
      </Link>
      <Link href="https://google.com" target="_blank">
        <LinkedInIcon></LinkedInIcon>
      </Link>
    </div>
  )
}

export default Socials
