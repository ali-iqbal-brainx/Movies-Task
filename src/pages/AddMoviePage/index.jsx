import React, { useState } from "react";
import footer_img from '../../assets/images/footer_img.png';
import dropIcon from '../../assets/images/drop.png';
import './styles.scss';
import { MIN_FILE_SIZE } from "../../constants";
import { getBase64 } from "../../services/utilities";
import { useNavigate, useParams } from "react-router-dom";

const AddMoviePage = () => {
    const { id } = useParams();
    const [poster, setPoster] = useState();
    const [posterImage, setPosterImage] = useState();
    const [title, setTitle] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!poster || !title || !publishYear) {
            window.alert("Required data is missing");
            return;
        }

        console.log({ poster, title, publishYear });
    };

    const handleCancel = () => {
        navigate('/empty-view');
    };

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile?.size >= MIN_FILE_SIZE) {
            window.alert("File Size should be less than 5MB");
            return;
        }
        const file = await getBase64(selectedFile);
        setPosterImage(file);
        if (file) {
            setPoster(selectedFile);
        }
    };

    const handleDrop = async (event) => {
        event.preventDefault();
        const selectedFile = event.dataTransfer.files[0];
        if (selectedFile?.size >= MIN_FILE_SIZE) {
            window.alert("File Size should be less than 5MB");
            return;
        }
        const file = await getBase64(selectedFile);
        setPosterImage(file);
        if (file) {
            setPoster(selectedFile);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="new-movie-container">
            <div className="new-movie-heading">{id ? "Edit" : "Create a new Movie"}</div>
            <div className="movie-content">
                <div
                    className="file-picker"
                    role="button"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    style={{
                        border: "2px dashed #ccc",
                        borderRadius: "5px",
                        padding: "25px",
                        textAlign: "center",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                    onClick={() => document.getElementById("file-input").click()}
                >
                    {posterImage && (
                        <div className="movie-image-container">
                            <img src={posterImage} alt="" className="movie-image" />
                        </div>
                    )}
                    <div className="text-and-icon">
                        <img className="drop-img" src={dropIcon} alt="drop-icon" />
                        <div className="drop-text">
                            Browse file or drop an image here
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                            id="file-input"
                        />
                    </div>
                </div>

                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            required
                        />
                    </div>
                    <div className="form-group publish-year">
                        <input
                            type="text"
                            id="publishYear"
                            value={publishYear}
                            onChange={(e) => setPublishYear(e.target.value)}
                            placeholder="Publishing Year"
                            required
                        />
                    </div>
                    <div className="buttons-container">
                        <button onClick={handleCancel} className="button cancel-button">Cancel</button>
                        <button onClick={handleSubmit} className="button submit-button">{id ? "Update" : "Submit"}</button>
                    </div>
                </form>
            </div>
            <img src={footer_img} alt="Footer" className="footer-img" />
        </div>
    )
}

export default AddMoviePage;
