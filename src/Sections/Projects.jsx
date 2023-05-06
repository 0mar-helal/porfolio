import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { projectsData } from "../utils/constants";
import SlideCard from "../Components/SlideCard/SlideCard";

const Projects = () => {
    return ( 
        <Container className='projects' id="projects" fluid>
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
            {projectsData.map((item)=> (
                <SwiperSlide key={item.id}>
                    <SlideCard
                    title={item.title}
                    description={item.description}
                    imageLink={item.imageLink}
                    demoLink={item.demoLink}
                    sourceCodeLink={item.sourceCodeLink}
                    />
                </SwiperSlide>
            ))}
            </Swiper>
        </Container>
    );
}

export default Projects;