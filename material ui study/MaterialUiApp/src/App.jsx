import "./App.css";
import BasicModal from "./BasicModal.jsx";
import ImageCarousel from "./ImageCarousel.jsx";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import logo from "./assets/block-question.png";

const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/034/979/467/small_2x/ai-generated-beautiful-landscape-with-green-meadows-and-blue-sky-with-clouds-photo.jpg",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://media.istockphoto.com/id/583809524/pl/zdj%C4%99cie/pustynia-alberta-w-pobli%C5%BCu-banff.jpg?s=612x612&w=0&k=20&c=G0GFsHOs8n_eUqkL9qr9Gm1T6DDuGDaXyhfXXz-nETg=",
    "https://www.nyip.edu/images/cms/photo-articles/the-best-place-to-focus-in-a-landscape.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/024/692/112/small_2x/ai-generated-ai-generative-beautiful-rhododendron-flowers-over-sunset-mountains-field-landscape-graphic-art-photo.jpg",
];

function App() {
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
            if (scrollY >= screenHeight * 0.1) {
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
                position={isFixed ? "fixed" : "absolute"} // Switch between fixed and static
                sx={{
                    transition: "0.3s", // Smooth transition
                    backgroundColor: isFixed ? "primary.main" : "transparent", // Change background color
                    boxShadow: isFixed ? 1 : "none", // Add shadow when fixed
                    zIndex: "99",
                }}
            >
                <Toolbar className="flex space-between">
                    <div>
                        <img
                            src={logo}
                            style={{ height: "50px", cursor: "pointer" }}
                            onClick={() => scrollToSection(homeRef)}
                        />
                    </div>
                    <div>
                        <Button
                            className="ToolbarButton"
                            onClick={() => scrollToSection(aboutRef)}
                        >
                            O Mnie
                        </Button>
                        <Button
                            className="ToolbarButton"
                            onClick={() => scrollToSection(galleryRef)}
                        >
                            Portfolio
                        </Button>
                        <Button
                            className="ToolbarButton"
                            onClick={() => scrollToSection(contactRef)}
                        >
                            Kontakt
                        </Button>
                    </div>
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
                        backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            height: "100vh",
                            width: "100vw",
                            backgroundColor: "#7E8976",
                        }}
                    >
                        <video
                            className="landingVideo"
                            autoPlay
                            loop
                            muted
                            type="video/mp4"
                            src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                        ></video>
                        <Button
                            className="testButton"
                            onClick={() => scrollToSection(galleryRef)}
                        >
                            co robię
                        </Button>
                    </div>
                </Box>

                {/* About Section */}
                <Box
                    alignContent={"center"}
                    alignItems={"center"}
                    ref={aboutRef}
                    sx={{
                        padding: "100px 0 0 0",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Stack
                        direction={{ xs: "column", xl: "row" }}
                        spacing={{ xs: 1, sm: 2, lg: 6, xl: 13 }}
                        style={{ padding: "0 10px 0 10px" }}
                    >
                        <img
                            src={logo}
                            style={{ height: "25%", width: "25%" }}
                        />
                        <Stack style={{ maxWidth: "600px" }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    wordWrap: "break-word",
                                    overflowWrap: "break-word",
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                }}
                            >
                                Imię Nazwisko
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    textTransform: "uppercase",
                                    wordWrap: "break-word",
                                    overflowWrap: "break-word",
                                }}
                            >
                                robię to, to i to
                            </Typography>
                            <Divider
                                sx={{
                                    borderColor: "#646464",
                                    borderWidth: "1px",
                                    margin: "30px 0 30px 0",
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    wordWrap: "break-word",
                                    overflowWrap: "break-word",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris turpis mauris,
                                scelerisque sit amet mauris nec, semper rutrum
                                dui. Ut sed velit eros.
                                <br />
                                <br />
                                Sed <strong>fringilla</strong> erat magna, nec
                                condimentum lacus malesuada vel. Suspendisse
                                lorem dolor, vulputate sed bibendum eget,
                                fermentum at nisl.
                                <br />
                                <br />
                                Pellentesque dictum feugiat sem, id gravida est
                                tempor at. Donec a mauris blandit, eleifend ex
                                ac, rhoncus ipsum. Integer vel{" "}
                                <b>ullamcorper</b> justo, vel rhoncus erat.
                                Phasellus nec felis dignissim, vehicula dolor
                                ut, ullamcorper turpis.
                                <br />
                                <br />
                                Maecenas mattis neque sit amet lacus hendrerit
                                consequat. Integer eget augue nec lorem
                                consequat euismod. Vestibulum{" "}
                                <b>ante ipsum primis in faucibus</b> orci luctus
                                et ultrices posuere cubilia curae; Aenean
                                sagittis, massa ut euismod
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Typography
                    variant="h2"
                    sx={{
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                    }}
                >
                    Realizacje
                </Typography>
                {/* Gallery Section */}
                <Box
                    ref={galleryRef}
                    sx={{
                        width: "100%",
                        padding: "200px 0px 0 0px",
                    }}
                >
                    <p
                        style={{
                            margin: "0px auto 0px auto",
                            fontSize: "64px",
                        }}
                        className="wordWrap"
                    >
                        Realizacje
                    </p>
                    <Typography
                        className="wordWrap"
                        variant="h2"
                        sx={{
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                        }}
                    >
                        Realizacje
                    </Typography>
                    <Stack
                        className="galleryStack"
                        direction={{ xs: "column", xl: "row" }}
                        spacing={{ xs: 1, sm: 2, lg: 6, xl: 13 }}
                    >
                        <BasicModal imageSrc={images[0]}>
                            <ImageCarousel images={images} />
                        </BasicModal>
                        <BasicModal imageSrc={images[1]}>
                            <ImageCarousel images={images} />
                        </BasicModal>
                        <BasicModal imageSrc={images[2]}>
                            <ImageCarousel images={images} />
                        </BasicModal>
                    </Stack>
                </Box>

                {/* Contact Section */}
                {/* <Box
                    ref={contactRef}
                    sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h2">Contact Section</Typography>
                </Box> */}
            </Box>
        </>
    );
}

export default App;
