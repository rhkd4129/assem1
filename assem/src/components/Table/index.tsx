import Icon from '../../components/Icon';
import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Pagination from './Pagination'

const TableWrapper = styled.div`
	background: #fff;
	position: relative;
`
const SelectHeader = styled.div`
	height: 0;
	width: calc(100% - 60px);
	position: absolute;
	padding-left: 60px;
	top: 0;
	left: 0;
	overflow: hidden;
	background: #F8FAFF;
	border-radius: 6px 6px 0px 0px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	transition: height 0.3s ease-in;
	&.active {
		height: 62px;
	}
	& .count {
		font-family: Noto Sans;
		font-style: normal;
		font-weight: 400;
		font-size: 13px;
		line-height: 18px;
		margin-right: 19px;
		padding: 22px 0;
		& span {
			font-weight: bold;
			color: #416CFF;
		}
	}
`

const STable = styled.table`
	width: 100%;
`

interface ICell {
	width?: string;
	align?: 'center' | 'left' | 'right';
}

const Th = styled.th<ICell>`
	padding: 22px 0;
	width: ${props => props.width ? props.width : 'auto'};
	text-align: ${props => props.align ? props.align : 'center'};
	font-family: Noto Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 18px;
	color: #4A516A;
`
const Td = styled.td<ICell>`
	padding: 22px 0;
	width: ${props => props.width ? props.width : 'auto'};
	text-align: ${props => props.align ? props.align : 'center'};
	font-family: Noto Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 18px;
	color: #5A617B;
`
const Tr = styled.tr`
	border-bottom: 1px solid #E3E5F1;
`

const CheckBox = styled.div`
	position: relative;
	width: 18px;
	height: 18px;
	margin: 0 auto;
	& input {
		width: 1px;
		height: 1px;
		visibility: hidden;
		margin: 0;
	}
	& label {
		position: relative;
		cursor: pointer;
		&::before {
			content: "";
			width: 18px;
			height: 18px;
			position: absolute;
			left: 0;
			top: 0;
			background: url("/images/check_false.svg") no-repeat 100% center;
		}
		&.checked::before {
			background: url("/images/check_true.svg") no-repeat 100% center;
		}
		&.checkAll::before {
			background: url("/images/check_all_false.svg") no-repeat 100% center;
		}
		&.checkAll.checked::before {
			background: url("/images/check_all_true.svg") no-repeat 100% center;
		}
	}
`

export interface ICol {
	title: string | Element;
	dataIndex: string;
	align?: 'center' | 'left' | 'right';
	width?: string;
	render?: (value: any, data: any) => JSX.Element;
	sort?: boolean
}

interface ITable {
	data: any[];
	col:ICol[];
	total?: number;
	onPageChange?: (page: number, size?: number) => void;
	current?: number;
	checkable?: boolean;
	keyItem: string;
	onChangeCheck?: (data: number[]) => void;
	selectHeaderElement?: JSX.Element;
}

const Table = ({data, col, total, onPageChange, current, checkable, keyItem, onChangeCheck, selectHeaderElement} : ITable) => {
	const [internalCurrent, setInternalCurrent] = useState(1)
	const [pageSize, setPageSize] = useState(10)
	const [selected, setSelect] = useState<number[]>([] as number[])
	const [checkedAll, setCheckedAll] = useState(false)
	const [tableData, setTableData] = useState<any[]>([] as any[])
	const [sortInfo, setSortInfo] = useState<any>({})
	useEffect(()=>{
		setTableData(data)
		let newSortInfo = {};
		col.length > 0 && col.forEach(el => {
			if(el.sort){
				newSortInfo[el.dataIndex] = false
			}
		})
		setSortInfo(newSortInfo)
	}, [])
	useEffect(()=>{
		initCheck()
		if(tableData !== data){
			setTableData(data)
		}
	}, [data])
	const initCheck = () => {
		setCheckedAll(false)
		setSelect([] as number[])
	}
	const handleCheckbox = (key) => {
		const indexKey = selected.indexOf(key)
		const newSelect = [...selected]
		if(indexKey > -1){
			newSelect.splice(indexKey, 1)
		}else{
			newSelect.push(key)
		}
		console.log(newSelect.length, pageSize)
		if(newSelect.length === pageSize || tableData.length === newSelect.length){
			setCheckedAll(true)
		}else{
			setCheckedAll(false)
		}
		setSelect(newSelect)
		if(onChangeCheck) onChangeCheck(newSelect)
	}
	const handleCheckAll = () => {
		setCheckedAll(!checkedAll)
		if(!checkedAll){
			const count = total === undefined ? (internalCurrent * pageSize): pageSize;
			let newArr = []
			tableData.forEach((el, j)=> {
				if(total === undefined && j < pageSize*(internalCurrent-1)){
					return;
				}else if(j < count){
					newArr.push(el[keyItem])
				}else{
					return;
				}
			})
			setSelect(newArr)
			if(onChangeCheck) onChangeCheck(newArr)
		}else{
			setSelect([] as number[])
			if(onChangeCheck) onChangeCheck([])
		}
	}
	const renderPage = (el, j) => {
		const count = total === undefined ? (internalCurrent * pageSize): pageSize;
		if(total === undefined && j < pageSize*(internalCurrent-1)){
			return null
		}else if(j < count){
			const checked = selected.includes(el[keyItem])
			return (
				<Tr key={el[keyItem]}>
					{checkable && <Td>
						<CheckBox>
							<input type="checkbox" readOnly checked={checked} id={`checkbox${el[keyItem]}`}/>
							<label htmlFor={`checkbox${el[keyItem]}`} onClick={handleCheckbox.bind(this, el[keyItem])} className={checked ? 'checked' : ''}></label>
						</CheckBox>
					</Td>}
					{col.map(renderCell.bind(this, el))}
				</Tr>
			)
		}else{
			return null
		}
	}
	const renderCell = (el, elm, k) => {
		if(elm.render !== undefined){
			return (
				<Td key={el[keyItem] + elm.dataIndex + k} align={elm.align ? elm.align : null}>{elm.render(el[elm.dataIndex], el)}</Td>
			)
		}else{
			return (
				<Td key={el[keyItem] + elm.dataIndex + k} align={elm.align ? elm.align : null}>{el[elm.dataIndex]}</Td>
			)
		}
	}

	const handlePageSize = (size: number) => {
		setPageSize(size)
		if(onPageChange){
			onPageChange(current, size)
		}
	}

	const handlePageChange = (page: number, size: number) => {
		if(onPageChange){
			onPageChange(page, size)
		}else{
			setInternalCurrent(page)
		}
		initCheck()
	}

	const sortData = (dataIndex: string) => {
		const target = [...tableData]
		if(sortInfo[dataIndex]){
			target.sort((a, b)=>{
				if(typeof a[dataIndex] === 'number'){
					return b[dataIndex] - a[dataIndex]
				}else{
					let aStr = a[dataIndex].toString()
					let bStr = b[dataIndex].toString()
					return bStr.localeCompare(aStr)
				}
			})
		}else{
			target.sort((a, b)=>{
				if(typeof a[dataIndex] === 'number'){
					return a[dataIndex] - b[dataIndex]
				}else{
					let aStr = a[dataIndex].toString()
					let bStr = b[dataIndex].toString()
					return aStr.localeCompare(bStr)
				}
			})
		}
		setTableData(target)
		setSortInfo({...sortInfo, [dataIndex]: !sortInfo[dataIndex]})
	}

	return (
		<TableWrapper>
			<SelectHeader className={selected.length > 0 ? "active" : ""}>
				<div className="count"><span>{selected.length}</span>건 선택</div>
				{selectHeaderElement && <div>{selectHeaderElement}</div>}
			</SelectHeader>
			<STable>
				<thead>
					<Tr>
						{checkable && <Th width="60px">
							<CheckBox>
								<input type="checkbox" readOnly checked={checkedAll} id={`checkedAll`}/>
								<label htmlFor={`checkedAll`} onClick={handleCheckAll} className={checkedAll ? 'checkAll checked' : 'checkAll'}></label>
							</CheckBox>
						</Th>}
						{col.map((el, i) => 
							<Th 
								key={el.dataIndex + i} 
								width={el.width ? el.width : null} 
								align={el.align ? el.align : null}
							>{el.title}{el.sort && <Icon name="table_sort" size={10.8} onClick={()=>sortData(el.dataIndex)} style={{cursor: 'pointer', marginLeft: '7.5px'}}/>}</Th>)}
					</Tr>
				</thead>
				<tbody>
					{tableData.map(renderPage)}
				</tbody>
			</STable>
			<Pagination 
				total={total ? total : data.length}
				pageSize={pageSize}
				onPageChange={handlePageChange}
				current={current ? current : internalCurrent}
				setPageSize={handlePageSize}
			/>
		</TableWrapper>
	)
}

export default Table;