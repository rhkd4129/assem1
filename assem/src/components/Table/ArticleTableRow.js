import React from 'react';

const ArticleTableRow = ({ children }) => {
  return (
    <tr className="common-table-row">
      {
        children
      }
    </tr>
  )
}

export default ArticleTableRow;