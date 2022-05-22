import React from 'react'
// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import ArticleSection from "../components/Article"
import PostList from '../components/PostList'
import HeroImage from '../components/HeroImage'

const Article = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='공지사항' text='API 받아옴 테이블 퍼블리싱 진행 중' />
            {/* <ArticleSection /> */}
            <PostList />
            {/* <Footer /> */}
        </div>
    )
}

export default Article;