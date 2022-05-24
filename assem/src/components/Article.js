import React, { useState, useEffect } from 'react';
import Axios  from 'axios';
import ArticleTable from './Table/ArticleTable';
import ArticleTableColumn from './Table/ArticleTableColumn';
import ArticleTableRow from './Table/ArticleTableRow';
import Post from './Post';
import { Link } from 'react-router-dom';

const apiUrl = "http://localhost:8000/notice/api/posts";

const Article = props => {
    const [postList, setPostList] = useState([]);
    
        useEffect(() => {
            Axios.get(apiUrl)
                .then(response=>{
                    const {data}  = response;
                    console.log("loaded response", response);    
                    setPostList(data)
                })
                .catch(error => {})
            console.log("mounted");
        }, []);

  return (
    <div className='Article-table'>
        <ArticleTable headersName={['#', '제목', '등록일', '작성자']}>
      {
          postList ? postList.map(( post ) => {
              return (
                  <ArticleTableRow key={post}>
                      <ArticleTableColumn>{ post.id }</ArticleTableColumn>
                      <ArticleTableColumn>
                          <Link to={`/ArticleViews/${post.id}`}>{ post.title }</Link>
                      </ArticleTableColumn>
                      <ArticleTableColumn>{ post.created_at }</ArticleTableColumn>
                      <ArticleTableColumn>Assem</ArticleTableColumn>
                  </ArticleTableRow>
              )
          }) : ''
      }
      </ArticleTable>
    </div>
  )
  }

export default Article;	