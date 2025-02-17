import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";

const DeepSeek = () => {
    const [isFixed, setIsFixed] = useState(false);

    // Refs for each section
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const galleryRef = useRef(null);
    const contactRef = useRef(null);

    // Function to scroll to a section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const screenHeight = window.innerHeight;

            // Set the header to fixed if scrolled down by one screen height
            if (scrollY >= screenHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Header */}
            <AppBar
                position={isFixed ? "fixed" : "static"} // Switch between fixed and static
                sx={{
                    transition: "0.3s", // Smooth transition
                    backgroundColor: isFixed ? "primary.main" : "transparent", // Change background color
                    boxShadow: isFixed ? 1 : "none", // Add shadow when fixed
                }}
            >
                <Toolbar>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection(homeRef)}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection(aboutRef)}
                    >
                        About
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection(galleryRef)}
                    >
                        Gallery
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection(contactRef)}
                    >
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Page Sections */}
            <Box>
                {/* Home Section */}
                <Box
                    ref={homeRef}
                    sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h2">Home Section</Typography>
                </Box>

                {/* About Section */}
                <Box
                    ref={aboutRef}
                    sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h2">About Section</Typography>
                </Box>

                {/* Gallery Section */}
                <Box
                    ref={galleryRef}
                    sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h2">Gallery Section</Typography>
                </Box>

                {/* Contact Section */}
                <Box
                    ref={contactRef}
                    sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h2">Contact Section</Typography>
                </Box>
            </Box>
        </>
    );
};

export default DeepSeek;
