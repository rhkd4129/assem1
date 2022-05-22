import React from 'react'
import styled from "styled-components";

interface ICol {
	width?: number | string;
	mr?: number;
	ml?: number;
}

const Col = styled.div<ICol>`
	min-width: ${props => props.width ? `${typeof props.width === 'number' ? props.width+ 'px' : props.width}` : 'auto'};
	margin-right: ${props => props.mr ? `${props.mr}px` : '0'};
	margin-left: ${props => props.ml ? `${props.ml}px` : '0'};
	height: auto;
`

export default Col;