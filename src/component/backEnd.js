import CARD from '../component/card'
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
function backEnd({ switcher, setShowDomum }) {
    const backendCardInfor = [{
        url:"domum",
        number:"01",
        name: "1",
        decription: "not ready",
        readMore:setShowDomum
    },{
        url:"",
        number:"01",
        name: "1",
        decription: "not ready"
    },{
        url:"",
        number:"01",
        name: "1",
        decription: "not ready"
    },{
        url:"",
        number:"01",
        name: "1",
        decription: "not ready"
    },]
    return (
        <div>
            <div className="p-5 sm:p-10 flex flex-col md:flex-row justify-center md:items-center text-text-color">
                <div className="md:basis-1/2">
                    <div className="text-2xl px-5 sm:px-16">In general, back-end development can interact with the database,
                        and the most commonly used language is java.<br></br>
                        The main experience is:
                        Full-stack project using Flutter (Vue.js) and Spring Boot (Java). Serve as a leader in the project,
                        using scrum as align framework. Mainly responsible for writing back-end code. I can write a suitable REST API that can be tested by Postman.</div>
                </div>
                <div className="md:basis-1/2">
                    <div class="flex flex-row gap-10 flex-wrap justify-center">
                        <div class="basis-1/3 lg:basis-1/4">
                            <div>Java</div>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "91%" }}> 91%</div>
                            </div>
                        </div>
                        <div class="basis-1/3 lg:basis-1/4">
                            <div>PHP</div>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "87%" }}> 87%</div>
                            </div>
                        </div>
                        <div class="basis-1/3 lg:basis-1/4">
                            <div>Python</div>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "82.6%" }}> 82.6%</div>
                            </div>
                        </div>
                        <div class="basis-1/3 lg:basis-1/4">
                            <div>Database:</div>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "88.25%" }}> 88.25%</div>
                            </div>
                        </div>
                        <div class="basis-1/3 lg:basis-1/4">
                            <div>Scrum project</div>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "83.3%" }}> 83.3%</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-md flex justify-center md:justify-end mt-8'><div className='md:w-1/3'>Percentages represent the average course grade for the programming language used</div></div>
                </div>
            </div>
            <div className='flex w-full justify-center'>
            <div className="px-10 md:px-20 my-5 flex md:block justify-center">
                        <button onClick={switcher} class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Look at frontend
                            </span>
                        </button>
                    </div></div>
            <div className="text-3xl sm:text-5xl px-10 sm:px-20 text-text-color mt-5">Backend work project</div>
            <div className='sec flex overflow-x-scroll scrollbar-none' id="portfolio">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 60
                        }
                    }}
                >
                    {backendCardInfor.map((item) => (
                        <SwiperSlide><div className="flex shrink-0">

                            <CARD
                                url={item.url}                                
                                number={item.number}
                                name={item.name}
                                decription={item.decription}
                                readMore={item.readMore}
                            /></div></SwiperSlide>
                    ))}</Swiper>
            </div>
        </div>
    );
}
export default backEnd;