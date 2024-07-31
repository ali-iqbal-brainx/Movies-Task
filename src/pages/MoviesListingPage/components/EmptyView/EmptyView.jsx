import React, { useEffect } from "react";
import footer_img from '../../../../assets/images/footer_img.png';
import './styles.scss';
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../../../services/movieService";

const EmptyViewPage = () => {
    const navigate = useNavigate();
    const createMovie = () => {
        navigate('/movie');
    };

    useEffect(() => {
        getMovies()
            .then((data) => {
                if (data?.movies?.length) {
                    navigate('/movies_listing');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="empty-view-container">
            <div className="empty-view-heading">Your movie list is empty</div>
            <button onClick={createMovie} className="add-movie-btn">Add a new movie</button>
            <img src={footer_img} alt="Footer" className="footer-img" />
        </div>
    )
}

export default EmptyViewPage;
