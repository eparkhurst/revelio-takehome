import { useEffect } from 'react';
import { fetchArticles, selectArticles } from '../redux/articleSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectFavorites, updateFavorites } from '../redux/userSlice';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import './Latest.css';

const Latest = ({}) => {
    const dispatch = useAppDispatch();
    const articles = useAppSelector(selectArticles);
    const favorites = useAppSelector(selectFavorites);

    useEffect(() => {
        if (articles.length === 0) {
            dispatch(fetchArticles({ amount: 12 }));
        }
    }, []);

    return (
        <>
            <ol className="article-list">
                {articles.map((article) => {
                    return (
                        <li key={article.id} className="article">
                            <span className="top-line">
                                <a className="article-link" href={article.url}>
                                    {article.title}
                                </a>
                                <span className="article-domain">({article.domain})</span>
                            </span>
                            <div className="article-info">
                                <span>
                                    {`${article.score} points by ${article.by} | ${article.descendants} comments |   `}
                                </span>
                                <span className="save-button" onClick={() => dispatch(updateFavorites(article.id))}>
                                    {favorites.includes(article.id) ? (
                                        <StarIcon
                                            sx={{ color: '#FE7139', width: '14px', margin: '0 2px', marginTop: '-2px' }}
                                        />
                                    ) : (
                                        <StarBorderIcon sx={{ width: '14px', margin: '0 2px', marginTop: '-2px' }} />
                                    )}
                                    {favorites.includes(article.id) ? ` saved` : ` save`}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ol>
            <Button
                onClick={() => dispatch(fetchArticles({ amount: 12, start: articles.length }))}
                sx={{
                    backgroundColor: '#FE7139',
                    color: '#fff',
                    borderRadius: '0px',
                    textTransform: 'none',
                    marginLeft: '129px',
                    '&:hover': {
                        backgroundColor: '#fe8d60',
                    },
                    marginBottom: '20px',
                }}
            >
                show more
            </Button>
        </>
    );
};
export default Latest;
