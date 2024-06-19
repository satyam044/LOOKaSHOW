import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-bg w-screen h-screen">
                    <img src="https://images.moneycontrol.com/static-mcnews/2024/06/20240615141314_Untitled-design.png?impolicy=website&width=770&height=431" className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className="home-headings w-[40%] absolute top-[20%] left-[8%] flex flex-col gap-6">
                    <h2 className='text-5xl font-extrabold text-[#fd1212]'>Movie Name</h2>
                    <h3 className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam suscipit harum? Iure soluta aut illo tenetur iusto, voluptatem quasi inventore voluptas dignissimos aliquam assumenda eveniet, eum possimus delectus rerum ratione magni unde harum amet dolores quia, esse ullam? Esse.</h3>
                    <div className="heading-btn flex gap-4">
                        <button className='bg-[#fd1212] flex items-center gap-1 text-white rounded-lg py-2 px-4'><CiPlay1 className='text-xl' /> Watch Now</button>
                        <button className='bg-[#fd121230] flex items-center gap-1 text-white border-2 border-solid border-black rounded-lg py-2 px-4'><CiBookmark className='text-xl' />Watch Later</button>
                    </div>
                </div>
                <div className="home-btn absolute top-[75%] left-[8%] flex gap-5 text-2xl">
                    <button className='bg-[#00000080] text-white p-2 rounded-[50%]'><IoIosArrowBack /></button>
                    <button className='bg-[#00000080] text-white p-2 rounded-[50%]'><IoIosArrowForward /></button>
                </div>
                <div className="home-thumbnail absolute flex gap-6 bottom-4 -right-9">
                    <div className="home-items flex flex-col items-center">
                        <img src="https://images.moneycontrol.com/static-mcnews/2024/06/20240615141314_Untitled-design.png?impolicy=website&width=770&height=431" className='w-32 h-40 object-cover rounded-xl' />
                        <h3>Movie</h3>
                    </div>
                    <div className="home-items flex flex-col items-center">
                        <img src="https://images.moneycontrol.com/static-mcnews/2024/06/20240615141314_Untitled-design.png?impolicy=website&width=770&height=431" className='w-32 h-40 object-cover rounded-xl' />
                        <h3>Movie</h3>
                    </div>
                    <div className="home-items flex flex-col items-center">
                        <img src="https://images.moneycontrol.com/static-mcnews/2024/06/20240615141314_Untitled-design.png?impolicy=website&width=770&height=431" className='w-32 h-40 object-cover rounded-xl' />
                        <h3>Movie</h3>
                    </div>
                    <div className="home-items flex flex-col items-center">
                        <img src="https://images.moneycontrol.com/static-mcnews/2024/06/20240615141314_Untitled-design.png?impolicy=website&width=770&height=431" className='w-32 h-40 object-cover rounded-xl' />
                        <h3>Movie</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home