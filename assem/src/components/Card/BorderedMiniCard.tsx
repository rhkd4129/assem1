import React from 'react';
import styled from "styled-components";

interface IBMCard {
	icon?: string;
	iconSize?: number;
	fontSize?: number;
	height?: number;
}

const BorderdMiniCard = styled.div<IBMCard>`
	padding: 0 24px 0 12px;
	border-radius: 6px;
	border: 1px solid #E3E5F1;
	background: #FFFFFF;
	height: ${props => props.height ? props.height : 36}px;
	line-height: ${props => props.height ? props.height : 36}px;
	font-family: Noto Sans;
	font-style: normal;
	font-weight: normal;
	font-size: ${props => props.fontSize ? props.fontSize : 14}px;
	position: relative;
	cursor: pointer;
	&.active {
		border: 1px solid #98A3C7;
	}
	${props => props.icon && `&::before {
		content: '';
		display: block;
		position: absolute;
		right: ${props.iconSize ? 12 - ((props.iconSize - 10)/2) : 12}px;
		top: ${props.iconSize ? 14 - ((props.iconSize - 10)/2) : props.height ? props.height/36*14 : 14}px;
		width: ${props.iconSize ? props.iconSize : 10}px;
		height: ${props.iconSize ? props.iconSize : 7}px;
		background: url('/images/${props.icon}.svg') no-repeat center;
	}`}
	
`

export default BorderdMiniCard;