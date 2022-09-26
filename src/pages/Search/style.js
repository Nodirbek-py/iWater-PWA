import styled from '@emotion/styled'

export const SuggestionWrapper = styled.ul`
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  overflow-y: scroll;
`

export const Suggestion = styled.li`
  list-style: none;
  padding: 5px 15px;
  background: none;
  transition: background 0.7s;
  &:hover {
    background: #0000000f;
    transition: background 0.7s;
  }
`
