import { selectArticles } from '../redux/articleSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectFavorites, updateFavorites } from '../redux/userSlice';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Starred = ({}) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorites);
    const articles = useAppSelector(selectArticles).filter((article) => favorites.includes(article.id));

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
                                        <StarIcon sx={{ color: '#FE7139', width: '14px', margin: '0 2px' }} />
                                    ) : (
                                        <StarBorderIcon sx={{ width: '14px', margin: '0 2px' }} />
                                    )}
                                    {favorites.includes(article.id) ? ` saved` : ` save`}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </>
    );
};
export default Starred;
