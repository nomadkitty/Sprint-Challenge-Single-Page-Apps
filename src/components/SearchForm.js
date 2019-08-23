import React, { useState, useEffect } from "react";
import axios from "axios"

// export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
//   const [name, setName] = useState('rick')

//   useEffect(()=> {
//     axios
//       .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
//       .then (res => {
//         console.log(name)
//         setName()
//       })
//   },[])

//   const handleInputChange = event => {
//     setName({event.target.value})
//   };

//   return (
//     <section className="search-form">
//       <form onSubmit={() => onSearch(name)}>
//         <input
//           onChange={handleInputChange}
//           placeholder="name"
//           value={name}
//           name="name"
//         />
//         <button type="submit">Search</button>
//       </form>
//     </section>
//   );
// }
