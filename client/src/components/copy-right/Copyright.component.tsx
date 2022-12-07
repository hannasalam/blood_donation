import { Link, Typography } from '@mui/material'
import { CopyrightContainer } from './Copyright.styles'

function CopyRight() {
  return (
    <CopyrightContainer>
      <Typography variant="body2" align="center">
        {'Made By '}
        <Link href="https://adarsonmez.com/">Adar Sönmez</Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </CopyrightContainer>
  )
}

export default CopyRight
