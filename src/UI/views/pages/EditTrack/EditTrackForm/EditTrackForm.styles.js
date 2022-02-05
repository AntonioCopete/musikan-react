import styled from 'styled-components'

// ? MAYBE REFACTOR INTO A FORM GLOBAL COMPONENT
export const FormEdit = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;
`

export const HiddenInput = styled.input`
  display: none;
`
