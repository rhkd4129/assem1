import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Article.module.css";

function Article() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
                const response = await axios.get(
                    'http://localhost:8000/notice/api/posts'
                );
                setUsers(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        useEffect(() => {
            fetchUsers();
        }, []);

    if (loading) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!users) return null;
    return (
        <React.Fragment>
            <div className="ArticleSection">
                <h2 className="ArticleTitle">
                공지사항
                </h2>
            </div>
        </React.Fragment>
    );
}

export default Article;