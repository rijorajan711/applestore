

import Button from '../../Components/UsersComponents/Button'
import HomeCategory from '../../Components/UsersComponents/HomeCategory'
import SeperationContent from '../../Components/UsersComponents/SeperationContent'
import VideoCard from '../../Components/UsersComponents/VideoCard'
import NewLaunch from '../../Components/UsersComponents/NewLaunch'
import HomeNavbar from '../../Components/UsersComponents/HomeNavbar'

function Home() {


    return (
       
        <>
            <div className='flex-col items-center'>

                <div>

                    <div className='rijo h-screen min-h-full lg:bg-no-repeat lg:bg-cover flex flex-col w-full bg-[url("https://static.itavisen.no/wp-content/uploads/2023/08/Screenshot-2023-08-15-at-20.14.57.png")] lg:hover:scale-[1.05] duration-1000'>
                        <div className='w-full h-auto grid mt-72 lg:grid-cols-2 '>
                            <div className='text-center lg:hover:scale-[1.1] hover:skew-x-12 duration-1000'>
                                <span className='font-Lobster text-9xl text-white'>Apple Store</span>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <span className='font-secondStyle text-2xl ml-11 text-white'>“Your time is limited, so don’t waste it living someone else’s life.”</span>
                                <Button />
                            </div>
                        </div>
                    </div>

                </div>
                <HomeCategory />
                <SeperationContent />
                <VideoCard />
                <NewLaunch />
            </div>

        </>
    )
}

export default Home





























