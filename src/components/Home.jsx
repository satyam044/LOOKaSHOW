import React, { useRef } from 'react';
import { CiPlay1, CiBookmark } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
    const nextDom = useRef(null);
    const prevDom = useRef(null);
    const carouselDom = useRef(null);
    const listItemDom = useRef(null);
    const thumbnailDom = useRef(null);

    const itemSliderDom = useRef([]);
    const itemThumbnailDom = useRef([]);

    const handleNextClick = () => {
        showSlider('next');
    };

    function showSlider(type) {
        if (type === 'next') {
            if (listItemDom.current && itemSliderDom.current.length > 0) {
                listItemDom.current.appendChild(itemSliderDom.current[0]);
                itemSliderDom.current.push(itemSliderDom.current.shift());
            }
            if (thumbnailDom.current && itemThumbnailDom.current.length > 0) {
                thumbnailDom.current.appendChild(itemThumbnailDom.current[0]);
                itemThumbnailDom.current.push(itemThumbnailDom.current.shift());
            }
            if (carouselDom.current) {
                carouselDom.current.classList.add('next');
                setTimeout(() => {
                    carouselDom.current.classList.remove('next');
                }, 1000);
            }
        }
    }

    return (
        <>
            <div className="home" ref={carouselDom}>
                <div className="home-list" ref={listItemDom}>
                    {['Item1', 'Item2', 'Item3', 'Item4'].map((item, index) => (
                        <div className='home-item absolute inset-[0 0 0 0]' key={index} ref={el => itemSliderDom.current[index] = el}>
                            <div className="home-bg w-screen h-screen">
                                <img src="https://images.moneycontrol.com/static-mcnews/2024/06/20240615141314_Untitled-design.png?impolicy=website&width=770&height=431" className='w-[100%] h-[100%] object-cover' alt="carousel" />
                            </div>
                            <div className="home-headings w-[40%] absolute top-[20%] left-[8%] flex flex-col gap-6">
                                <h2 className='text-5xl font-extrabold text-[#fd1212]'>Movie Name</h2>
                                <h3 className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</h3>
                                <div className="heading-btn flex gap-4">
                                    <button className='bg-[#fd1212] flex items-center gap-1 text-white rounded-lg py-2 px-4'><CiPlay1 className='text-xl' /> Watch Now</button>
                                    <button className='bg-[#fd121230] flex items-center gap-1 text-white border-2 border-solid border-black rounded-lg py-2 px-4'><CiBookmark className='text-xl' /> Watch Later</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="home-thumbnail absolute flex gap-6 bottom-4 left-[50%] z-50" ref={thumbnailDom}>
                    {['Thumb1', 'Thumb2', 'Thumb3', 'Thumb4'].map((item, index) => (
                        <div className="home-t-items flex flex-col items-center" key={index} ref={el => itemThumbnailDom.current[index] = el}>
                            <img src="https://images.moneycontrol.com/static-mcnews/2024/06/20240615141314_Untitled-design.png?impolicy=website&width=770&height=431" className='w-[150px] h-[180px] object-cover rounded-xl' alt="thumbnail" />
                            <h3>Movie</h3>
                        </div>
                    ))}
                </div>
                <div className="home-btn absolute top-[75%] left-[8%] flex gap-5 text-2xl z-50">
                    <button className='bg-[#00000080] text-white p-2 rounded-[50%]' ref={prevDom}><IoIosArrowBack /></button>
                    <button className='bg-[#00000080] text-white p-2 rounded-[50%]' ref={nextDom} onClick={handleNextClick}><IoIosArrowForward /></button>
                </div>
                <div className="home-timer"></div>
            </div>
        </>
    );
};

export default Home;
