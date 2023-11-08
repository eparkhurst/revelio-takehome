import { useEffect } from 'react';
import Header from '../Header/Header';
import { fetchArticles, selectArticles } from '../redux/articleSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import './Latest.css';

const Latest = ({}) => {
    const dispatch = useAppDispatch();
    const articles = useAppSelector(selectArticles);

    useEffect(() => {
        dispatch(fetchArticles(25));
    }, []);

    return (
        <>
            <Header />
            <ol>
                {articles.map((article) => {
                    return (
                        <div>
                            <a className="article-link" href={article.url}>
                                {article.title}
                            </a>
                            <div className="article-info">{`${article.score} points by ${article.by} | ${article.descendants} comments`}</div>
                        </div>
                    );
                })}
            </ol>
        </>
    );
};
export default Latest;
