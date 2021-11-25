import React, { useEffect } from 'react'
import styled from 'styled-components';
import Photo from "../../img/headshot.jpg";

const Container = styled.div`
	height: 75vh;
`;

const Image = styled.div`
	height: 100%;
	width: 100%;
	    background-repeat: no-repeat;
	background-position: calc(50% - -4px) 50%;
	border-radius: 82px;
    box-shadow: 0px 4px 7px 4px rgb(0 0 0 / 25%);
    background-size: cover;
		${({src}) => src && `
			background-image: url('${src}');		
	`};
`;
const Headshot = () => {
	useEffect(() => {
		console.log("here")
	}, [])

		return (
			<Container>

				<Image src={Photo} />
			</Container>
		)
}

export default Headshot;
