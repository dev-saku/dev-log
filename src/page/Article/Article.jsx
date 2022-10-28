import { React, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
    const didGetArticle = useRef(false);
    const params = useParams();
    const id = params.id;
    console.log(id);

    useEffect(() => {
        if (!didGetArticle.current) {
        }
    }, []);

    return <div>{id}</div>;
};

export default Article;
