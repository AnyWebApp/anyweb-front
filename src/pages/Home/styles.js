import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100vh;
`

export const HomeMain = styled.main`
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 800px;
`

export const LogoContainer = styled.div`
  width: 100%;
	height:122px;
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