import { React, useContext, useEffect, useRef, useState } from 'react';
import './ArticleList.css';
import axios from 'axios';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    const didGetArticle = useRef(false);
    useEffect(() => {
        if (!didGetArticle.current) {
            didGetArticle.current = true;
            const fetchArticles = async () => {
                const response = await axios.get(
                    process.env.REACT_APP_baseURL + 'article'
                );
                setArticles(response.data);
                console.log(response.data);
            };
            fetchArticles();
        }
    }, []);

    return (
        <div className='article-list'>
            <div className='article-list-side'></div>
            <div className='article-list-center'>
                {articles.map((article) => (
                    <div className='article-list-item'>
                        <h3 className='article-list-item__title'>
                            {article.title}
                        </h3>

                        <div className='article-category-list'>
                            {article.category.map((value) => (
                                <div className='article-category'>
                                    <img
                                        src={
                                            process.env.REACT_APP_categoryURL +
                                            value +
                                            '.jpg'
                                        }
                                        className='article-category__icon'
                                    />
                                    <p className='article-category__name'>
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='article-list-side'></div>
        </div>
    );
};

export default ArticleList;
