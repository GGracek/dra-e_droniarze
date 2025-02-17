/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handlers for navigation
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Box sx={{ width: "100%", textAlign: "center" }}>
            {/* Main Image */}
            <Box
                sx={{
                    width: "800px",
                    height: "400px",
                    position: "relative",
                    overflow: "hidden",
                    mb: 2,
                }}
            >
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease-in-out",
                    }}
                />
                {/* Navigation Buttons */}
                <Button
                    onClick={goToPrev}
                    endIcon={<ArrowBackIosNewIcon />}
                    sx={{
                        color: "white",
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                    }}
                ></Button>
                <Button
                    onClick={goToNext}
                    endIcon={<ArrowForwardIosIcon />}
                    sx={{
                        color: "white",
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                    }}
                ></Button>
            </Box>

            {/* Thumbnail Navigation */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    overflowX: "auto",
                    pb: 1,
                }}
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        onClick={() => goToImage(index)}
                        sx={{
                            width: "80px",
                            height: "60px",
                            border:
                                currentIndex === index
                                    ? "2px solid #1976d2"
                                    : "2px solid transparent",
                            cursor: "pointer",
                            transition: "border 0.3s ease",
                        }}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index}`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ImageCarousel;
