import React, { useEffect, useState } from 'react';


  const GetIdBar= (props) => {
    const [search, setSearch] = useState("")

    function handleSubmit(event){
        event.preventDefault();
       
        props.SearchId(search)
        console.log(search)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={search} onChange={(event)=> setSearch(event.target.value)}/>
                <button type='submit'>Search ID</button>
            </div>
        </form>
     );
}
export default GetIdBar;

