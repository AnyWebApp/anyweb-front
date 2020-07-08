import styled from 'styled-components'

export const Footer = styled.footer`
  background: #F2F2F2;
  height: 80px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content: space-around;
`

export const Button = styled.button`
  border: none;
  color:#5f6368;
  cursor:pointer;
  font-size: 13px;

  @media(min-width: 768px) {
		font-size: 15px;
  }
`

export const Disabled = styled.p`
  font-size: 13px;
  color:#5f6368;  

  @media(min-width: 768px) {
		font-size: 16px;
  }
`


