import React, {useEffect, useState} from "react";
import Axios from "axios";
import Post from "./Post"
import "./ArticleStyles.css";
const apiUrl = "http://localhost:8000/notice/api/posts";

function PostList(){
const [postList,setPostList] = useState([]);
    useEffect(() => {
        Axios.get(apiUrl)
            .then(response=>{
                const {data}  = response;
                console.log("loaded response",response);
                setPostList(data)
            })
            .catch(error => {})
        console.log("mounted");
    }, []);
    return(
        <React.Fragment>
            <div className="ArticleSection">
            <h1 className="ArticleTitle">
            PostList</h1>
            
            {postList.map(post  =>(
                <Post post={post} key={post.id}/>// 
            ))}
            </div>
         </React.Fragment>

       
    );
}
export default Article