import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem'

export const IconOpen = styled.i`
  :before {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const Item = styled(MenuItem)`
  i:before {
    margin-left: 2rem;
  }
`
