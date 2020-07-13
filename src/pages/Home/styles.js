import styled from 'styled-components'

export const HomeMain = styled.main`
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 80vh;

	@media(min-width: 768px) {
		height:80vh;
  }	
`

export const LogoContainer = styled.div`
  width: 100%;
	height:22%;
	display: flex;
	align-items: flex-end;
	justify-content: center;

	@media(min-width: 768px) {
		height:35%;
  }
`

export const LogoImg = styled.img`
	width: 160px;
	height:56px;

	@media(min-width: 768px) {
		width: 272px;
		height:92px;
		margin-bottom: 10px;
  }
`