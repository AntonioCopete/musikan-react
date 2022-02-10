import styled from 'styled-components'
import { RiMore2Fill } from 'react-icons/ri'
import MenuItem from '@mui/material/MenuItem'

export const IconOpen = styled(RiMore2Fill)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
`

export const Item = styled(MenuItem)`
  span {
    margin-right: 1rem;
  }
`
