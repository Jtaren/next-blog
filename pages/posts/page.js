import Header from '../../components/header'
import Footer from '../../components/footer'
import Author from '../../components/child/author'
import Image from 'next/image';
import Related from '../../components/child/related';

export default function page() {
  return (
    <div>
        <Header></Header>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                <Author></Author>
            </div>
            <div className="post py-10">
                <h1 className="font-bold text-4xl text-center pb-5">
                  Fuga aspernatur quasi possimus vel aperiam voluptas enim officia!
                </h1>
                <p className="text-gray-500 text-xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sunt vero, impedit aspernatur odit voluptas alias repellat, corrupti possimus, saepe voluptates enim illo suscipit ipsam quidem quo. Et, numquam optio.</p>
                <div className="py-0 flex justify-center">
                <Image src={"/images/bamba.jpg"} alt={"bamba"} width={300} height={200}/>

                </div>
                <div className="content text-gray-600 text-lg flex-col gap-4">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed unde minus. Mollitia, debitis unde. Consequuntur itaque aspernatur doloremque officia et quam consequatur, dignissimos aut laborum. Quasi ipsam perferendis veritatis?
                  </p><br/>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quae repellat blanditiis autem voluptate necessitatibus ad eius consequuntur rem! Necessitatibus ea tempora fuga sint unde a vero repellendus ipsum nulla.
                  </p><br/>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam explicabo excepturi illo quidem, eius placeat, velit provident iste est possimus consequatur nihil fugit. Aperiam quaerat enim, cumque odit vel laboriosam.
                  </p><br/>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a odit dolorum, dolorem neque nemo laudantium aperiam id quos minima quasi ea ut voluptatem tempora delectus in praesentium temporibus adipisci!
                  </p><br/>

                </div>
            </div>
        </section>
        <Related></Related>
        <Footer></Footer>
    </div>
  )
}
