import styled from 'styled-components/macro'
import { Button as RebassButton } from 'rebass/styled-components'

const Base = styled(RebassButton)`
  padding: ${({ padding }) => (padding ? padding : '16px')};
  width: ${({ width }) => (width ? width : '100%')};
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
    pointer-events: none;
  }

  will-change: transform;
  transition: transform 450ms ease;
  transform: perspective(1px) translateZ(0);

  &:hover {
    transform: scale(0.99);
  }

  > * {
    user-select: none;
  }

  > a {
    text-decoration: none;
  }
`

export const ButtonSecondary = styled(Base)`
  color: #2172E5;  
  background-color: ${({ BGColor }) => (BGColor ? BGColor : 'transparent')};
  font-size: 16px;
  font-family: inherit;
  border-radius: 12px;
  padding: ${({ padding }) => (padding ? padding : '5px')};
  margin: ${({ margin }) => (margin ? margin : '')};
  width: ${({ width }) => (width ? width : '50px')};
  border: ${({ border }) => (border ? border : '1px solid #376bad70')};
  color: ${({ color }) => (color ? color : '#ffffff')};

  &:focus {
    box-shadow: 0 0 0 1pt #376bad70;
    border: 1px solid #4D8FEA;
  }
  &:hover {
    border: 1px solid #f2c945;
  }
  &:active {
    box-shadow: 0 0 0 1pt #376bad70;
    border: 1px solid #4D8FEA; /* #4D8FEA */
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 590px) {
    width: 100% !important;
    margin-left: px;
    margin-right: 10px;
  }
  @media screen and (max-width: 980px) {
    width: 100% !important;
    margin-left: 10px;
    margin-right: 10px;
  }
`