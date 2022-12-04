
import {useState,useEffect} from "react"
const ShowNote = () => {

    
 const [dataNote, setDataNote] = useState(null);
 const [isLoading, setLoading] = useState(false);

 const url = "http://localhost:3005/note/3";
 //const url = `https://quran-sharif-server.onrender.com/note/3`;
 useEffect(() => {
   setLoading(true);
   fetch(url)
     .then((res) => res.json())
     .then((dataNote) => {
       setDataNote(dataNote);
       setLoading(false);
     });
 }, [dataNote]);
console.log(dataNote)
    return (
      <div>
        <h3 className="text-center m-10">Your Recent Notes</h3>
        <div className="text-gray-700 text-center   overflow-y-auto h-96 ">
          {dataNote
            ? dataNote.map((info, idx) => (
                <div className="shadow-sm" key={idx}>
                  <div dangerouslySetInnerHTML={{ __html: info.note }}></div>
                  <span className="text-slate-300 ml-2">
                    Time : {info.date}
                  </span>
                </div>
              ))
            : "Please Ensure your stable internet connection"}
        </div>
      </div>
    );
    
}
export default ShowNote;