import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "CLI Package - Data Protection",
      cardDetailedText: [
        "Automated data transfer between on-premises & AWS cloud using shell script CLI package.",
        "Bundled & encrypted data in transit with OpenSSL, decrypted at destination.",
        "Created a secure channel using OpenSSH & stored data in AWS S3 bucket.",
        "Developed a key management service(KMS) using EC2 Instance for encryption / decryption keys.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Shell Script", "AWS", "OpenSSL", "OpenSSH"],
      links: [
        {
          url: "https://github.com/Suyog-007/Barcalays-Data-Protection-CLI-Package",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "KRYPT - Cryptocurrency Website",
      cardDetailedText: [
        "Developed a website that enables users to conduct transactions using the Ethereum cryptocurrency",
        "Also providing real-time access to market data & news related to cryptocurrencies.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: [
        "ReactJS",
        "Tailwind",
        "ExpressJS",
        "NodeJS",
        "Solidity",
        "MetaMask",
      ],
      links: [
        {
          url: "https://gilded-madeleine-f072d2.netlify.app/",
          text: "Website Link",
        },
        {
          url: "https://github.com/Suyog-007/CryptoExhangePlatform",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "REAL TIME PERSON FINDER USING FACE RECOGNITION SYSTEM",
      cardDetailedText: [
        "Creating dataset a facial image dataset involves capturing images of individuals under various conditions like lighting, angles, and expressions. MATLAB's image acquisition and processing tools streamline the process, ensuring a diverse dataset.",
        "Preprocessing the dataset, standardizing and enhancing the images is crucial. This involves tasks like normalization, resizing, and noise reduction to improve image quality and prepare them for feature extraction.",
        "Feature Extraction involves extracting discriminative features from facial images to differentiate individuals. Techniques like PCA, LBP, and HOG are commonly used for this purpose.",
        "Extracted features are used to train machine learning models or classifiers. MATLAB offers diverse algorithms and libraries for this purpose, including SVM, KNN, and CNN.",
        "The trained model undergoes testing on a separate set of facial images to evaluate its performance. Metrics like accuracy, precision, recall, and F1-score are computed to gauge the effectiveness of the face recognition system.",
        "Real-time implement the trained model is deployed for face recognition in real-time using MATLAB's tools for interfacing with cameras and video streams.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["MATLAB", "CNN", "AlexNET", "LaTeX"],
      links: [
        {
          url: "https://drive.google.com/file/d/10gRGc8x_2mW4p7ZQ1xEFPwU6Dwd3p5i6/view?usp=sharing",
          text: "Research Paper Link",
        },
        {
          url: "https://drive.google.com/file/d/1m5bqopLios_qTd0bTAwGQqpwfq8MLXjT/view?usp=sharing",
          text: "View Certification",
        },
      ],
    },
    // {
    //   cardTitle: "Finance Assistant Chatbot",
    //     cardDetailedText: [
    //       "Created a chatbot for Fin-tech companies for helping students regarding finances.",
    //       "Tech stack comprises of Django, Rasa NLU and Postgresql.",
    //     ].map(function (text) {
    //       return <li>{text}</li>;
    //     }),
    //       technologies: ["Python", "Django", "Rasa"],
    //         links: [
    //           {
    //             url: "https://github.com/Sitanshuk/HackPython",
    //             text: "View Source Code",
    //           },
    //         ],
    //     },
    // {
    //   cardTitle: "Text Summarization",
    //     cardDetailedText: [
    //       "It summarizes the given text into number of sentences or words in English and Punjabi.",
    //       "Created in Flask and deployed on Google App Engine.",
    //     ].map(function (text) {
    //       return <li>{text}</li>;
    //     }),
    //       technologies: ["Python", "GCP"],
    //         links: [
    //           {

    //           },
    //         ],
    //     },
    // {
    //   cardTitle: "Meeting App",
    //     cardDetailedText:
    //   "This project was created while I was working as a Full Stack Developer Intern. Created API's using Spring Boot and used the MVC architecture, and consumed these API's in the frontend.",
    //     technologies: ["HTML", "CSS", "JS", "PHP"],
    //       links: [
    //         {

    //         },
    //       ],
    //     },
    // {
    //   cardTitle: "Justalk",
    //     cardDetailedText: "A chat application made using React and Firebase Auth",
    //       technologies: ["React JS", "Firebase"],
    //         links: [
    //           {

    //           },
    //           {

    //           },
    //         ],
    //     },
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  const addButton = () => (
    <Fab color="primary blue" aria-label="add">
      <AddIcon />
    </Fab>
  );

  return (
    <section id="projects" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
