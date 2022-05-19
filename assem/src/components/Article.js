import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Post from '../../actions/Post';

const apiUrl = "http://localhost:8000/notice/api/posts";

export default function Article () {
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
return(
    <div>
        <h2>PostList</h2>
        {postList.map(post  =>(
            <Post post={post} key={post.id}/>// 
        ))}
    </div>
);
}