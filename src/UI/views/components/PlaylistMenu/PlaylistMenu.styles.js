import styled from 'styled-components'
import { RiMore2Fill } from 'react-icons/ri'
import MenuItem from '@mui/material/MenuItem'
export const IconOpen = styled(RiMore2Fill)`
  color: ${({ theme }) => theme.colors.text};
`

export const Item = styled(MenuItem)`
  span {
    margin-right: 1rem;
  }
`
