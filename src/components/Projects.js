import Card2 from "./Card2";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.less'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css";
import ProjectsItem from "../components/ProjectsItem";
function Projects()
{
    const projects = ProjectsItem;

    return (
    <div className="services">
        <p className="text-muted text-sub-title text-center">These are some projects made by me</p>
        <h2 className="sub-title text-muted">PROJECTS</h2>
        <br></br>
        <div className="row">
        <Swiper pagination={{
  "clickable": true
}} slidesPerView={2}  navigation={true} spaceBetween={20}>
                  {projects.map((projects) => (
                           <SwiperSlide className="mySwiper"> <Card2 
       
                            key={projects.id}
                            text={projects.text}
                            img={projects.img}
                            description={projects.description}
                            /></SwiperSlide>
               )
            )}

      ...
    </Swiper>

            
        </div>
     </div>
    )
}
export default Projects