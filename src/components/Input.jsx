
import React from "react";
function Note(props){
    const [note , setNote]=React.useState({
        title: "",
        content:""
    });
    function handleChange(event){
        const {name,value}=event.target;
       
        setNote((preValue) => {
            return {
                ...preValue ,
                [name]:value
            };
        });
    }
    

    return(
   <div  className="note">
   <form>
   <input name="title" onChange={handleChange} className="input" placeholder="Title" value={note.title} />
   <textarea name="content" onChange={handleChange}  className="input1" placeholder="Take a note..." rows="3" value={note.content} />
   <div  
   onClick={()=> 
              {props.onCheck(note);
               setNote({
                   title:"",
                   content:""
               });
   }} 
   className="addNote">+</div>
   </form>
   </div>
    );
}
export default Note;