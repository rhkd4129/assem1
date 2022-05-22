import React, {useEffect, useState} from "react";
import Axios from "axios";
import Post from "./Post"
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
            {postList.map(post => (
                <Post post={post} key={post.id}/>// 
            ))}
            </div>
         </React.Fragment>

       
    );
}
export default PostList;