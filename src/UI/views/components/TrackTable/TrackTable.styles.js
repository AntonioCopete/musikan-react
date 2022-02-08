import styled from 'styled-components'
import ListItemText from '@mui/material/ListItemText'

export const ItemText = styled(ListItemText)`
  color: ${({ theme }) => theme.colors.text};
`

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid white;

  span {
    padding: 8px 4px;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
  }
`
