
import React from "react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import pexel from "../images/pexels-djordje-petrovic-2102416.jpg"
import pexel1 from "../images/pexels-ge-yonk-1152077.jpg"
import pexel2 from "../images/pexels-kevin-ku-577585.jpg"
import pexel3 from "../images/pexels-lukas-574071.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Carousel() {
    return (
        <div className="w-[100%] h-[700px] p-3 pt-20   md:pr-[138px] md:pl-[138px]">
            <div className="w-full h-auto">
                <Swiper
                    // install Swiper modules
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            className="w-[100%] h-[500px] object-cover"
                            src={pexel}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-[100%] h-[500px] object-cover"
                            src={pexel1}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-[100%] h-[500px] object-cover"
                            src={pexel2}
                            alt=""
                        />
                    </SwiperSlide>


                </Swiper>
            </div>

        </div>
    )
}

export default Carousel