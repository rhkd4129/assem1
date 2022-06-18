import React from 'react';

const ArticleTableColumn = ({ children }) => {
  return (
    <td className="common-table-column">
      {
        children
      }
    </td>
  )
}

export default ArticleTableColumn