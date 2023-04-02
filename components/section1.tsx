import Image from 'next/image';
import Author from '../components/child/author'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';

export default function section1() {
    SwiperCore.use([Autoplay])
    return(
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pd-12 py-4 text-center"> Trending </h1>
                
    <Swiper
      
      slidesPerView={1}
      loop={false}
      autoplay={{
        delay:2000
      }}
      
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      ...
    </Swiper>
            </div>
        </section>
    )
}

function Slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href="#">
                <Image src={"/images/bamba1.jpg"} alt={"bamba"} width={500} height={600}/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat"> 
                    <Link href="#" className="text-orange-500 hover:text-orange-800">Business, Travel</Link>
                    <Link href="#" className="text-orange-500 hover:text-orange-800">- July 27 2023</Link>
                </div>
                <div className="title">
                    <Link href="#" className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">Lorem ipsum, dolor sit amet!</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellendus quo modi quis quaerat obcaecati qui, provident facere. Quo, reprehenderit nobis sed ab placeat quos ad expedita earum architecto atque.
                </p>
                <h1><Author></Author></h1>
            </div>
        </div>
    )
}