
import React from "react";
function List(props){
    return(
   <div  className="note">
   <h1>{props.title}</h1>
   <p>{props.content}</p>
   <span className="delete" onClick={()=>{props.onCheck(props.id)}}>Delete</span>
   </div>
    );
}
export default List;