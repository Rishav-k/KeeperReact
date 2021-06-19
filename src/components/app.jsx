import React from "react";
import Header from "./header";
import List from "./note";
import Footer from "./footer";
import Input from "./Input"
 
function App(){
  const [notes , setNotes]=React.useState([]);

  function handleClick(note){
    setNotes((preValue)=>{
     return [...preValue,note]
    });
  }
  function a(id){
   
    setNotes((preValue)=>{
      return preValue.filter((item,index)=>{return index!==id});
    })
  }
    return(
      <div>
        <Header /> 
        <Input onCheck={handleClick} />
        {notes.map((item , index)=>(<List key={index} id={index} title={item.title} content={item.content} onCheck={a} />))}  
        <Footer />
      </div>
    );
}
export default App;