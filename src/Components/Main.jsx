import react ,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Style.css';
import Card from "./Card";
import axios from "axios";
import Sidebar from "./Sidebar";


const Main=()=>{

  const [search,setSearch]=useState("");
  const [bookData,setBookData] = useState([]);
  const searchBook=(evt)=>{
      if(evt.key==="Enter")
      {
         axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA46tQgFCR3fB2uBNCOfjm4hiut9xecnuM'+'&maxResults=40')
         .then(res=>setBookData(res.data.items))
         .catch(err=>console.log(err))
      }
  }
   
    return(
        <>
            <div className="header">
              <div>
                <Sidebar/>
              </div>
                <div className="row1">
                    <h1>A reader lives <br/> a thousand lives.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <img src="./images/bookBg.jpg" alt="" />
                </div>
            </div>
            <div className="container">
              {
                 <Card book={bookData}/>
              }
            </div>
        </>
    )
}
export default Main;