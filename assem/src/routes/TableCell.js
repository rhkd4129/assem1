import { StyledTh, StyledTd } from './Table.styled';

const TableCell = ({ title, value }) => {
  return (
    <>
      <StyledTh>{title}</StyledTh>
      <StyledTd>{value}</StyledTd>
    </>
  );
};

export default TableCell;