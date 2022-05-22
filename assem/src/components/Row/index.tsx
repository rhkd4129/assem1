import React from 'react'
import styled from "styled-components";

interface IRow {
	justifyContent?: string;
	alignItem?: string;
	alignContent?: string;
	mb?: number;
}

const Row = styled.div<IRow>`
	display: flex;
	justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
	align-item: ${props => props.alignItem ? props.alignItem : 'center'};
	align-content: ${props => props.alignContent ? props.alignContent : 'stretch'};
	margin-bottom: ${props => props.mb ? props.mb : 18}px;
`

export default Row;