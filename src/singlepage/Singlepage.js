import React, { useState } from 'react'
import Img from "../images/img.png"
import Img1 from "../images/img1.png"
import Img2 from "../images/img2.png"
import Img3 from "../images/img3.png"


import { AiFillStar, AiOutlineCheck } from "react-icons/ai"
import { MdStars } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Accordian from './Accordian'
import { Link, Outlet } from 'react-router-dom'




function Singlepage({ product }) {
  const [open, setOpen] = useState(false)
  const AccordionFunc = () => {
    setOpen(!open)


  }

  return (
    <div className='pt-[10px] pb-[10px]  '>

      <div className='w-[100%]  pt-[10px] pb-[10px]  lg:flex xl:flex'>
        <div className='w-[100%] p-[5px]  lg:pl-[20px] lg:w-[62%]'>
          <div className='w-[100%] h-[500px]   xl:h-[700px]'>
            <Swiper navigation={true} modules={[Navigation]} className="h-[100%]">
              <SwiperSlide><img src={Img} alt="" /></SwiperSlide>
              <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
              <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
              {/* 
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
          </div>
          <div className="w-[100%] p-[5px]   flex items-center">
            <div className="w-[200px] h-[100%]  flex items-center">

              <h2 className='text-[35px] font-[500]'>10,671 <span className='text-[27px] font-[400]'>reviews</span></h2>
            </div>
            <div className="w-[150px] h-[90%]  flex items-center text-[25px] mt-[10px] ">

              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <div className="w-[100%] p-[5px]  flex items-center">
            <div className="w-[300px] h-[80%]  flex items-center">
              <Link to="/singlepage/:id/itemcommit">Reviews for this item</Link>
            </div>
            <div className="w-[300px] h-[80%]  flex items-center">
              <a href="shopcommit">Reviews for this shop</a>
            </div>
          </div>
          <Outlet />


        </div>



        <div className='w-[100%] h-[100%]  flex flex-col items-center lg:w-[38%]'>
          <div className="w-[90%] p-[5px]  pt-[20px] ">
            <p className='text-[18px] text-amber-800 font-[500]'>In demand. 71 people bought this in the last 24 hours.</p>
            <h1 className='text-[35px] text-green-600 font-[600]'>USD 36.00 <del className='text-[16px] text-black font-[400]'>USD 120.00</del></h1>
            <p className='text-[18px] text-green-600 font-[500]'>70% off sale for a limited time</p>
            <p className='text-[16px] font-[300]'>Local taxes included (where applicable)</p>
            <p className='text-[18px]  font-[500] mt-[10px]'>Handmade Damascus Pocket Knife Rose Wood Handle Birthday Gift Folding Knife Groomsmen Gift Anniversary Wedding Personalized Gift for Men  <p className='flex'> <AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /></p> </p>
            <p className='text-[16px]  font-[400] mt-[10px] flex'><AiOutlineCheck className='mt-[5px]' />Arrives soon! Get it by Nov 15-18 if you order today</p>
            <p className='text-[16px]  font-[400] mt-[10px] flex'><AiOutlineCheck className='mt-[5px]' />Arrives soon! Get it by Nov 15-18 if you order today</p>
          </div>
          <div className="w-[90%] h-[800px] ">
            <p className='text-[14px]  font-[500] '>Chose Personalization </p>
            <select id="countries" className="w-[90%] h-[50px] mt-[5px] shadow-sm outline-none bg-gray-50  rounded-[6px]  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected >kursni tanlang</option>
              <option value="">Veb dasturlash</option>
              <option value="">Ingilz tili</option>
              <option value="">Matematika</option>
              <option value="">Biologiya</option>
              <option value="">Kimyo</option>
              <option value="">Tarix</option>
              <option value="">Rus tili</option>

            </select>
            <p className='text-[14px]  font-[500] mt-[10px] '>Chose Personalization </p>
            <select id="countries" className="w-[90%] h-[50px] mt-[5px] shadow-sm outline-none bg-gray-50  rounded-[6px]  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected >kursni tanlang</option>
              <option value="">Veb dasturlash</option>
              <option value="">Ingilz tili</option>
              <option value="">Matematika</option>
              <option value="">Biologiya</option>
              <option value="">Kimyo</option>
              <option value="">Tarix</option>
              <option value="">Rus tili</option>

            </select>
            <div className="w-[300px]  mt-[20px] ">






              {/* <h2 id="accordion-collapse-heading-1" onClick={() => AccordionFunc()}>
                <button type="button" class="outline-non  flex items-center justify-between w-full pl-[5px] pr-[5px] pb-[10px] pt-[10px] font-medium rtl:text-right rounded-[50px] gap-3 hover:bg-slate-200" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                  <span>Add your personalization (optional)</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
                <div id="accordion-collapse-body-1" className=' rounded-b-xl' style={open ? { display: "block" } : { display: "none" }} class="hidden" aria-labelledby="accordion-collapse-heading-1">
                  <div class="p-2 ">
                    <p class="mb-2 ">Dear Buyer! Please provide Mono Number For Personalization and max characters limit is 15.</p>
                  </div>
                </div>
              </h2> */}

              <Accordian text={"Dear Buyer! Please provide Mono Number For Personalization and max characters limit is 15."} />





            </div>
            <div className="w-[100%] h-[170px]  flex flex-col justify-center">
              <button className='w-[90%] h-[45px] hover:bg-gray-900  bg-black  text-white text-[20px] rounded-[50px]'>Add to card</button>
              <div className="w-[100%] h-[100px]  flex items-center ">
                <div className="w-[12%] h-[100%]  flex items-center ">
                  < MdStars className='text-[40px] text-blue-700' />
                </div>
                <div className="w-[80%] h-[100%]  flex items-center ">

                  <p>Star Seller. This seller consistently earned 5-star reviews, shipped on time, and replied quickly to any messages they received</p>
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[220px]  ">

              <Accordian  text={"Handmade Damascus pocket knife rosewood handle birthday gift folding knife groomsman gift anniversary wedding father's day gift for lover This Beautiful folding Pocket knife have Razor sharp cutting edge come with leather sheath...     Overall Length : 6.5 inchesBlade Length: 3 inches Handle Length: 3.5 Inches Knife Type: Folding knife/Pocket knife Lock Type : Back Lock HRC : 55-58"} />
              <Accordian text={"Orklo knives are handmade you will get the same knife as in the photo. A slight difference can be there in color and patterns because these are handmade items and we use natural material.The knife have perfect grip sharp cutting edge and beautiful shape which makes Orklo knives more durable."} />
              <Accordian text={"Dear Buyer! Please provide Mono Number For Personalization and max characters limit is 15."} />
              <Accordian text={"Dear Buyer! Please provide Mono Number For Personalization and max characters limit is 15."} />
            </div>



          </div>


        </div>
      </div>
      <div className="w-[100%] p-[5px] ">
        <div>
          <h1 className="text-3xl sm:ml-2 ml-10">More from this shop</h1>
          <div className="flex gap-5 flex-wrap justify-center  ml-0 lg:ml-9 ">
            <div className="w-[226px] h-[277px] rounded-[10px]  flex flex-col items-center mt-7 xl:hover:shadow-2xl xl:hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white  rounded-full hidden  justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>

          </div>
        </div>
        <div>
          <h1 className="text-3xl ml-10 mt-[20px]">More from this shop</h1>
          <div className="flex gap-5 flex-wrap ml-9">
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>
            <div className="w-[226px] h-[277px] rounded-[10px] flex flex-col items-center mt-5 hover:shadow-2xl hover:xshadow-black-500/40 group">
              <div className="w-10 h-10 bg-white rounded-full hidden justify-center items-center absolute mt-2 ml-40 group-hover:flex">
                <AiOutlineHeart />
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[207px] h-[165px] rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-sm mt-2">Handmale Damascus Steel Poc...</h5>
                <p className="text-sm text-gray-600">OrkloKnife</p>
                <h3 className="text-green-700 font-semibold">USD 24.00</h3>
                <span className="text-sm text-gray-600">
                  <del>USD 80.00</del> (70% discount)
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Singlepage