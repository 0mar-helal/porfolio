import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import SlideCard from "../Components/SlideCard/SlideCard";
import { useContext } from "react";
import { DataContext } from "../App";

const Projects = () => {
  const { projectsData } = useContext(DataContext);
  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="main-heading">
          Let's See My <span className="purple">Projects</span>
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projectsData?.map((project) => (
            <SwiperSlide key={project.id}>
              <SlideCard
                imageLink={project.image}
                demoLink={project.demo_link}
                sourceCodeLink={project.code_link}
                techUsed={project.technologies}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Projects;
