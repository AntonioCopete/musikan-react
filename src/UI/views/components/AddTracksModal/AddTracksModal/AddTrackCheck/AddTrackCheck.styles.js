import styled from 'styled-components'
import { BsPlusSquare, BsPlusSquareFill } from 'react-icons/bs'

export const IconLine = styled(BsPlusSquare)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

export const IconFill = styled(BsPlusSquareFill)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`
