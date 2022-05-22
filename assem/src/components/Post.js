import React from "react";

function Post( {post}){
    const { title,photo} = post;
    return( 
        <div >
            <img src ={photo} alt = {title}/>
            {title} 
        </div>
        );
}

export default Post;