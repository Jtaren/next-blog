import Link from 'next/link';
import Image from 'next/image';
import Author from '../../components/child/author'

export default function related() {
  return (
    <section className="pt-20 justify-center">
        <h1 className="font-bold text-3xl py-10 ">Related</h1>
        <div className="flex flex-col gap-10">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>
    </section>
  )
}

function Post() {
    return(
        <div className="flex justify-center gap-5">
          <div className="image flex flex-col">
            <Link href="#">
                <Image src={"/images/bamba1.jpg"} alt={"bamba"} width={180} height={200}/>
            </Link>
          </div>
          <div className="info flex justify-center flex-col">
          <div className="cat"> 
                    <Link href="#" className="text-orange-500 hover:text-orange-800">Business, Travel</Link>
                    <Link href="#" className="text-orange-500 hover:text-orange-800">- July 27 2023</Link>
                </div>
                <div className="title">
                    <Link href="#" className="text-1xl md:text-1xl font-semibold text-gray-800 hover:text-gray-600">Lorem ipsum, dolor sit amet!</Link>
                </div>
            <Author></Author>
          </div>
        </div>
    )
    
}

