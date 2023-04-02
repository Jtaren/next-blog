import { ImFacebook,ImTwitter, ImYoutube } from "react-icons/im";
import Newsletter from '../components/child/newsletter'

export default function footer(){
  return (
    <footer className="bg-gray-50">
      <Newsletter></Newsletter>
      <div className="container mx-auto justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
             <a href={"/"}><ImFacebook color="#888888"/></a>
             <a href={"/"}><ImTwitter color="#888888"/></a>
             <a href={"/"}><ImYoutube color="#888888"/></a>
          </div>
          <p className="py-5 text-gray-400 text-center">Copyright @2022 All right reserves</p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}


