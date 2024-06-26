import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "January 2023 - June 2023",
      cardTitle: "BNP Paribas",
      cardSubtitle: "Intern",
      cardDetailedText: [
        "Conducted functional testing to evaluate individual software application functions through manual and automation testing.",
        "Designed comprehensive test plans, test cases, setup test environment and executed test cases to validated software functionality and identified defects throughout the testing process.",
        "Collaborated with development team to resolve issues and ensure product quality.",
        "Enhanced Agile frameworks productivity by streamlining project coordination and providing ongoing support in Software Development Life Cycle (SDLC), resulting in a 50% increase in efficiency.",
        "Maintained database systems to track and analyse operational data. Developed and updated tracking spreadsheets for process monitoring and reporting.",
        "Perform Sanity testing, Black box testing, Regression testing, participate in Smoke testing and SCRUM.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "October 2022 - December 2022",
      cardTitle: "Abhyadaya - SPJIMR",
      cardSubtitle: "Mentor",
      cardDetailedText: [
        "A non-profit organization focused on providing experiential learning opportunities to B-school students.",
        "Responsibilities included guiding and advising students on personal and professional development, offering insights into career pathways, and facilitating workshops or training sessions to enhance skill sets.",
        "Collaborated with fellow mentors and program coordinators to ensure the successful implementation of initiatives aimed at fostering leadership, teamwork, and social responsibility among students. ",
        "Contributed to the organization's mission of empowering future business leaders through mentorship and practical learning experiences.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    // {
    //   date: "September 2019 – October 2019",
    //   cardTitle: "Techskills IT Consultants",
    //   cardSubtitle: "Backend Developer",
    //   cardDetailedText: [
    //     "Developed applications using Spring Framework for Backend Restful API’s.",
    //     "Wrote SQL/JPQL queries for Data persistence using Spring Data JPA.",
    //   ].map(function (text) {
    //     return <li>{text}</li>;
    //   }),
    // },
    // {
    //   date: "August 2018 – January 2019",
    //   cardTitle: "TechSkills IT Consultants",
    //   cardSubtitle: "Fullstack Developer Intern",
    //   cardDetailedText:
    //     "Developed a Meeting App website which handles all the data that happens in a meeting. In this project I developed several REST API's using Spring Boot and used the MVC architecture. These API's are being consumed in the frontend.",
    // },
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
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
                    icon={<WorkIcon />}
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
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
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
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
