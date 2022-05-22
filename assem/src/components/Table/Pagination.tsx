import React from 'react'
import styled from "styled-components";
import Select from '../../components/Select';

const PaginationWrapper = styled.div`
	padding: 22px 30px;
	position: relative;
`

const Total = styled.div`
	font-family: Noto Sans KR;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	color: #3A4056;
	position: absolute;
	left: 30px;
`

const SelectWrap = styled.div`
	position: absolute;
	right: 30px;
	width: 98px;
	top: calc(50% - 14px);
`

const PageWrap = styled.div`
	display: flex;
	justify-content: center;
	align-item: center;
	width: 100%;
	& a {
		display: flex;
		width: 20px;
		height: 20px;
		margin-right: 10px;
		justify-content: center;
		align-item: center;	
		cursor: pointer;
		&.page {
			background: #F8FAFF;
			border-radius: 4px;
			font-family: Noto Sans;
			font-style: normal;
			font-weight: 500;
			font-size: 10px;
			line-height: 20px;
			text-align: center;
			color: #789FFF;
			&.active {
				background: #335CF8;
				color: #F8F8FC;
			}
		}
		&.arrow {
			background-position: center;
			background-repeat: no-repeat;
			background-size: 6px auto;
			&.next {
				background-image: url('/images/page_next.svg');
			}
			&.prev {
				background-image: url('/images/page_prev.svg');
			}
		}
	}
`

interface IPagination {
	total?: number;
	pageSize?: number;
	onPageChange?: (page: number, size: number) => void;
	current?: number;
	setPageSize: (size: number) => void;
}

const Pagination = ({total, pageSize, onPageChange, current, setPageSize}: IPagination) => {
	const amount = total%pageSize === 0 ? Math.floor(total/pageSize) : Math.floor(total/pageSize) + 1;
	const pageArr = new Array(amount).fill(undefined)
	const pageOptions = [
		{
			label: '10개 보기',
			value: 10
		},{
			label: '20개 보기',
			value: 20
		},{
			label: '30개 보기',
			value: 30
		},{
			label: '50개 보기',
			value: 40
		}
	]
	if(pageArr.length === 0){
		return null
	}else{
		return (
			<PaginationWrapper>
				<Total>총 <b>{total}</b>건</Total>
				<PageWrap>
					<a className='prev arrow' onClick={()=>onPageChange(1, pageSize)}></a>
					{pageArr.map((el, i) => <a key={i} className={current === i+1 ? 'active page' : 'page'} onClick={()=>onPageChange(i+1, pageSize)}>{i+1}</a>)}
					<a className='next arrow' onClick={()=>onPageChange(amount, pageSize)}></a>
				</PageWrap>
				<SelectWrap>
					<Select 
						onSelect={(data)=>setPageSize(data.value)} 
						options={pageOptions} 
						defaultValue={{label: '보기 개수', value: 0}} 
						selectKey="value"
						labelKey="label"
						mini={true}
					/>
				</SelectWrap>
			</PaginationWrapper>
		)
	}
	
}

export default Pagination;