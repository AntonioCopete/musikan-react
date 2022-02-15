import styled from 'styled-components'
import ListItemText from '@mui/material/ListItemText'

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 90vh;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) =>
    theme ? theme.colors.background : 'transparent'};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  border: 3px solid ${({ theme }) => theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.md} {
    height: 100%;
    border: 0;
  }
`

export const FormModal = styled.form`
  width: 100%;
  padding: 4rem;
  overflow: auto;
`

export const FooterModal = styled.footer`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 2rem;
  }
`

export const ItemText = styled(ListItemText)`
  color: ${({ theme }) => theme.colors.text};
`

export const Image = styled.img`
  display: inline-block;
  width: 8rem;
  height: 8rem;
  border-radius: 5px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 6rem;
    height: 6rem;
  }
`
