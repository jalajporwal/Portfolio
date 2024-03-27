import SchoolIcon from "@material-ui/icons/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";

const Education = () => {
  const items = [
    {
      cardTitle:
        "Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology (S.P.I.T.), Mumbai",
      cardSubtitle: "Master in Computer Applications - CGPA: 7.4",
      //cardDetailedText: "CGPA: 7.4",
      coursesHead: "Courses:",
      cardDetailedText: [
        "Java Programming",
        "Data Structures & Algorithms",
        "Data Warehousing & Mining",
        "Machine Learning",
        "Operating Systems",
        "Advanced Database Management Systems",
        "Computer Communication Networks",
        "Software Testing",
        "Advanced Mathematics",
      ].map(function (course) {
        return <li>{course}</li>;
      }),
      date: "January 2022 - December 2023",
    },
    {
      cardTitle: "Rajiv Gandhi Govt. P.G. College, Mandsaur",
      cardSubtitle: "Bachelor in Computer Applications",
      cardDetailedText: "Percentage: 70.33%",
      date: "2017 - 2020",
    },
    {
      cardTitle: "Dashpur Vidyalaya, Mandsaur",
      cardSubtitle: "CBSE 12th in Science with Computer Science",
      cardDetailedText: "Percentage: 67%",
      date: "2015 - 2017",
    },
    {
      cardTitle: "Acharya Nanesh Academy, Nanesh Nagar (Danta), Chittorgarh",
      cardSubtitle: "CBSE 10th",
      cardDetailedText: "Percentage: 72.2%",
      date: "2013 - 2015",
    },
  ];

  return (
    <section id="education" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Education</h2>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  date={data.date}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                  icon={<SchoolIcon />}
                >
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "14",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "350",
                      color: "#7e8890",
                      marginTop: "5px",
                    }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <h5
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1em",
                      fontWeight: "250",
                      color: "#7e8890",
                      marginTop: "5px",
                    }}
                  >
                    {data.coursesHead}
                  </h5>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
