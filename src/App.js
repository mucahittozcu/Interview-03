import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  return <GenerateList />;
}
const GenerateList = () => {
  const [list,setList] = useState([])
  const [generate,setGenerate] = useState(false)

  const axiosApi = async () => {
    try{
      const response = await axios.get( "https://www.boredapi.com/api/activity")
      setList((pre) => [...pre,{...response.data, id:response.data.key}])
      console.log(response.data);
    }
    catch(err){
      console.error(`Api alınamadı ${err.message}`)
    }
  }

  useEffect(() => {
    if(generate){
      axiosApi()
    }
  },[generate])

  const handleGenerateClick = () => {
    setGenerate((pre) => !pre)
    if(generate){
      axiosApi()
    }
  }
return (
  <div>
     <button className="btn" onClick={handleGenerateClick}>Generate Activity</button>
      <ul>
      {list.map((lt) => (
         <ExpandableListItem lt={lt} key={lt.id} />
      ))}
      </ul>
  </div>
)
}

const ExpandableListItem = ({ lt }) => {
  const [expand,setExpand] = useState(false)
  // KODUNUZ BURAYA GELECEK
  const handleExpandClick = () => {
    setExpand((pre) => !pre)
  }
  return(
    <div className="container">
     <li className="list">{lt.activity}</li>
     <button className="button" onClick={handleExpandClick} >{expand ? "Collapse" :"Expend" }</button>
         {expand && (
           <div className="liste">
           <li>type: {lt.type}</li>
           <li>participants: {lt.participants}</li>
           <li>price: {lt.price}</li>
           <li>link: {lt.link}</li>
           <li>key: {lt.key}</li>
           <li>accessibility: {lt.accessibility}</li>  
         </div>
         )}
      </div>
  )
}

export default App;
// //////////////////////////////////////////////

// import axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   return <GenerateList />;
// }

// const GenerateList = () => {
//   const [list, setList] = useState([])
//   const [generate, setGenerate] = useState(false)

//   const axiosApi = async () => {
//     try {
//       const response = await axios.get("https://www.boredapi.com/api/activity")
//       setList((pre) => [...pre, { ...response.data, id: response.data.key }])
//       console.log(response.data)
//     } catch (err) {
//       console.error(`Api alınamadı ${err.message}`)
//     }
//   }

//   useEffect(() => {
//     if (generate) {
//       axiosApi()
//     }
//   }, [generate])

//   const handleGenerateClick = () => {
//     setGenerate((pre) => !pre)
//     if (generate) {
//       axiosApi()
//     }
//   }

//   return (
//     <div className="container">
//       <button className="btn" onClick={handleGenerateClick}>
//         Generate Activity
//       </button>
//       <ul>
//         {list.map((activity) => (
//           <ExpandableListItem key={activity.id} activity={activity} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const ExpandableListItem = ({ activity }) => {
//   const [expanded, setExpanded] = useState(false)

//   const handleExpandClick = () => {
//     setExpanded((pre) => !pre)
//   }

//   return (
//     <div>
//       <li className="list">{activity.activity}</li>
//       <button className="button" onClick={handleExpandClick}>
//         {expanded ? "Collapse" : "Expand"}
//       </button>
//       {expanded && (
//         <div className="liste">
//           <li>type: {activity.type}</li>
//           <li>participants: {activity.participants}</li>
//           <li>price: {activity.price}</li>
//           <li>link: {activity.link}</li>
//           <li>key: {activity.key}</li>
//           <li>accessibility: {activity.accessibility}</li>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App