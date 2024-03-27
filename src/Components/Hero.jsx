import img from "./images/Jalaj_Porwal.jpg";
import Typed from "react-typed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export default function Hero() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <Container data-aos="zoom-in" data-aos-delay="500">
        <Row>
          <Col lg={6} className="item-center">
            <h1>Jalaj Porwal</h1>
            <br />
            <p>
              I'm a&nbsp;
              <span
                class="typed"
                data-typed-items="Competitive Programmer, Developer, Data Science Enthusiast"
              >
                <Typed
                  strings={[
                    "Competitive Programmer",
                    "Developer",
                    "Data Science Enthusiast",
                  ]}
                  loop
                  typeSpeed={90}
                  backSpeed={60}
                  smartBackspace
                  shuffle={false}
                  backDelay={500}
                  fadeOut={true}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
            </p>
            <div class="social-links">
              {/* <a target ="_blank" href="https://www.youtube.com/channel/UC8TXgNmZW2hMis074yGOTUQ">
                <i class="bx bxl-youtube"></i>
              </a> */}
              <a target="_blank" href="https://www.instagram.com/jalaj_porwal/">
                <i class="bx bxl-instagram"></i>
              </a>
              <a target="_blank" href="https://github.com/jalajporwal">
                <i class="bx bxl-github"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jalaj-porwal/"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              <a target="_blank" href="mailto:porwaljalaj@gmal.com">
                <i class="bx bx-envelope"></i>
              </a>
            </div>
            <br />
            <Button
              variant="outlined"
              target="_blank"
              href="https://drive.google.com/file/d/1xEJYExKP0rzTdgevIBagTbqKGFIUxjby/view?usp=share_link"
              startIcon={<CloudDownloadIcon />}
              style={{
                color: "rgb(116, 128, 138)",
                borderColor: "rgb(116, 128, 138)",
              }}
            >
              Download Resume
            </Button>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <img
              src={img}
              height="100%"
              width="90%"
              style={{
                borderRadius: "25px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
