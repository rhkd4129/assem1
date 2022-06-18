import React from "react";

function Post( {post}){
    const { title, photo } = post;
    return( 
        <div style={
            {
                color: "#fff",
                marginTop: "4rem"
            }
        }>
            <img src ={ photo } alt = { title }/>
              {title}
        </div>
        );
}

export default Post;