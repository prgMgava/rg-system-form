import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--azure);
	height: 100vh;

	img {
		width: 50%;
	}

	@media (max-width: 1024px){
		display: none; 
	  }
`

