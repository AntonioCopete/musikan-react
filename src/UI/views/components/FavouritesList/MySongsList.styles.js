import styled from 'styled-components'
import ListItemText from '@mui/material/ListItemText'

export const ItemText = styled(ListItemText)`
  color: ${({ theme }) => theme.colors.text};
`
