import React, {useState, useEffect, useRef} from 'react';
import styled from "styled-components";
import useOutsideClick from '@hooks/useOutsideClick'
import BorderdMiniCard from "../Card/BorderedMiniCard";

const SelectWrap = styled.div`
	position: relative;
`

interface IOptions {
	open: boolean;
	length: number;
	position: string;
}

const Options = styled.ul<IOptions>`
	background: #FFFFFF;
	z-index: 5;
	border: 1px solid #98A3C7;
	box-sizing: border-box;
	box-shadow: 0px 0px 0px 2px rgba(56, 85, 179, 0.16);
	border-radius: 6px;
	padding: ${props => props.open ? `7px 0` : '0'};
	position: absolute;
	top: ${props => props.open && props.position === 'down' ? 
		`calc(100% + 3px)` 
		: props.position === 'down' ?
			`calc(100% + 3px)` 
			: 0};
	margin-top: ${props => props.position === 'up' && props.open ? `-${props.length * 30 + 17}px` : 0};
	left: 0;
	transition: all 0.3s ease-in;
	height: ${props => props.open && props.length ? `${props.length * 30 + 14}px` : 0};
	max-height: 150px;
	overflow-x: hidden;
	overflow-y: auto;
	visibility: ${props => props.open && props.length > 0 ? `visible` : 'hidden'};
	&::-webkit-scrollbar {
		display: block;
		width: 8px;
	}
	&::-webkit-scrollbar-thumb {
		height: 17%;
		background-color: #C7CFE8;
		border-radius: 10px;
		border: 0;
	}
	&::-webkit-scrollbar-track {
		background-color: #FAFAFC;
		padding: 3px;
	  }
	& li {
		height: 30px;
		line-height: 30px;
		padding: 0 16px;
		cursor: pointer;
		font-family: Noto Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		color: #5A617B;
		text-overflow: elipsis;
		overflow: hidden;
		white-space: nowrap;
		&:hover {
			background: #EBEFFF;
		}
		&.active {
			color: #0D3DFF;
		}
	}
`

interface ISelect {
	onSelect: (data: any) => void;
	options: any[];
	defaultValue: any;
	mini?: boolean;
	selectKey: string;
	labelKey: string;
}

const Select = ({onSelect, options, defaultValue, mini, selectKey, labelKey}: ISelect) => {
	const selectRef = useRef(null);
	const [selected, setSelected] = useState(null)
	const [open, setOpen] = useState(false)
	const [position, setPosition] = useState('down')
	
	const handleSelect = (option) => {
		setSelected(option)
		onSelect(option)
		setOpen(false)
	}
	const handleOpen = (e) => {
		console.log(document.body.scrollHeight - e.clientY)
		if((document.body.scrollHeight - e.clientY) < 200) {
			setPosition('up')
		}else{
			setPosition('down')
		}
		setOpen(!open)
	}
	const clickOutside = () => {
		setOpen(false)
	}
	useOutsideClick(selectRef, clickOutside)
	return (
		<>
		<SelectWrap ref={selectRef}>
			<BorderdMiniCard icon={"icon_dropdown"} className={open ? 'active' : ''} onClick={handleOpen} fontSize={mini? 12 : null} height={mini? 28 : null}>
				{selected ? selected[labelKey] : defaultValue[labelKey]}
			</BorderdMiniCard>
			<Options open={open} length={options.length} position={position}>
				{options && options.map(el => <li key={el[selectKey]} className={selected && selected[selectKey] === el[selectKey] ? 'active' : ''} onClick={() => handleSelect(el)}>{el[labelKey]}</li>)}
			</Options>	
		</SelectWrap>
		
		</>
	)
}
export default Select