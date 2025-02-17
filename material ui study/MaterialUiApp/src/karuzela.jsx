// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import MobileStepper from "@mui/material/MobileStepper";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// export default function DotsMobileStepper() {
//     const theme = useTheme();
//     const [activeStep, setActiveStep] = React.useState(0);

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     return (
//         <MobileStepper
//             variant="dots"
//             steps={6}
//             position="static"
//             activeStep={activeStep}
//             sx={{ maxWidth: 400, flexGrow: 1 }}
//             nextButton={
//                 <Button
//                     size="small"
//                     onClick={handleNext}
//                     disabled={activeStep === 5}
//                 >
//                     {theme.direction === "rtl" ? (
//                         <KeyboardArrowLeft />
//                     ) : (
//                         <KeyboardArrowRight />
//                     )}
//                 </Button>
//             }
//             backButton={
//                 <Button
//                     size="small"
//                     onClick={handleBack}
//                     disabled={activeStep === 0}
//                 >
//                     {theme.direction === "rtl" ? (
//                         <KeyboardArrowRight />
//                     ) : (
//                         <KeyboardArrowLeft />
//                     )}
//                 </Button>
//             }
//         />
//     );
// }
{
    /* Sticky Header */
}
<AppBar
    position="fixed"
    sx={{
        backgroundColor: "transparent",
        color: "black",
    }}
>
    <Toolbar className="toolbar">
        <Button color="inherit" onClick={() => scrollToSection(homeRef)}>
            Home
        </Button>
        <Button color="inherit" onClick={() => scrollToSection(aboutRef)}>
            About
        </Button>
        <Button color="inherit" onClick={() => scrollToSection(galleryRef)}>
            Gallery
        </Button>
        <Button color="inherit" onClick={() => scrollToSection(contactRef)}>
            Contact
        </Button>
    </Toolbar>
</AppBar>;
{
    /* Page Sections */
}
<Container className="container">
    {/* Home Section */}
    <Box ref={homeRef}>
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
            <Button className="testButton">This is a test</Button>
        </div>
    </Box>

    {/* About Section */}
    <Box
        ref={aboutRef}
        sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#817689",
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#817689",
        }}
    >
        <Stack
            className="galleryStack"
            direction={{ xs: "column", xl: "row" }}
            spacing={{ xs: 1, sm: 2, lg: 6, xl: 13 }}
        >
            <BasicModal imageSrc={images[0]} className="chuj">
                <ImageCarousel images={images} />
            </BasicModal>
            <BasicModal imageSrc={images[1]}>
                <ImageCarousel images={images} />
            </BasicModal>
            <BasicModal imageSrc={images[2]}>
                <ImageCarousel images={images} />
            </BasicModal>
        </Stack>
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
            backgroundColor: "#817689",
        }}
    >
        <Typography variant="h2">Contact Section</Typography>
    </Box>
</Container>;
