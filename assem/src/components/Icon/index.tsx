import React from 'react';
import styled from "styled-components";

interface IconProps {
	name: string;
	size: number;
}

const Icon = styled.span<IconProps>`
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	background-image: url('/images/${props => props.name}.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: auto 100%;
	display: inline-block;
`

export default Icon