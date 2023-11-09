import { useEffect } from 'react';
import Header from '../Header/Header';
import { fetchArticles, selectArticles } from '../redux/articleSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import './Latest.css';

const Latest = ({}) => {
    const dispatch = useAppDispatch();
    const articles = useAppSelector(selectArticles);

    useEffect(() => {
        dispatch(fetchArticles(12));
    }, []);

    return (
        <>
            <Header />
            <ol className="article-list">
                {articles.map((article) => {
                    return (
                        <li key={article.id} className="article">
                            <span>
                                <a className="article-link" href={article.url}>
                                    {article.title}
                                </a>
                                <span className="article-domain">({article.domain})</span>
                            </span>
                            <div className="article-info">{`${article.score} points by ${article.by} | ${article.descendants} comments`}</div>
                        </li>
                    );
                })}
            </ol>
        </>
    );
};
export default Latest;
