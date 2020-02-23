import styled from '@xstyled/styled-components'

export const Select = styled.select`
  height: 32px;
  width: 100%;
  border: 2px solid #d8d8d8;
  border-radius: 0;
  transition: 0.2s;
  font-size: 1rem;
  cursor: pointer;
  background: none;
  padding: 0 5 0 3;
  font-family: serif;
  appearance: none;
  -webkit-border-radius: 0px;
  color: body.6;
  font-size: 4;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position: 91% 50%, calc(91% + 5px) 50%;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;

  option {
    color: body.7;
    font-family: serif;
  }
`