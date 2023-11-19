import React, { useState } from "react";

function Todo() {
  const [data, setData] = useState("")
  const [storeData, setStoreData] = useState([]);
  const [tempId, setTempId] = useState("");
  const [toggleButton, setToggleButton] = useState(false)
  // const[updateText,setUpdatedText]=useState([])
  // console.log("updatebutton",updateText);

  function addData(e) {
    e.preventDefault()
    setStoreData([...storeData, {task : data, id : Math.random()}])
    setData("") 
  }
  function deleteData(kuchbhi) {
    // let sabDatahai=[...storeData]
    // console.log(sabDatahai);
    // sabDatahai.splice(kuchbhi,1)
    // setStoreData(sabDatahai)

    let storeDelteData = storeData.filter((item) => {
      return item.id !== kuchbhi
    })
    setStoreData(storeDelteData)

  }

  function handlerz (){
  }
  function updateTodo (id){

    const data = storeData.find(item => {
      if(item.id == id){
        return item
      }
    } )
    setData(data.task);
    setTempId(id);
    setToggleButton(true)
  } 
  function finalUpdate(e){
    e.preventDefault()
    const newArray = storeData.filter((item) => {
      if(item.id == tempId ){

        item.task = data
      }
      return item
    });

    setStoreData(newArray);
    setToggleButton(false);
    setData("");

    console.log("wwwww",e);


  }


  return (
    <div className="container">
      <h1 className="text-center mt-5">Todo List</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form>
            <div class="mb-3 mt-3 d-flex">
              <input
                type="text"
                class="form-control"
                placeholder="Create List"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />

              {
                toggleButton  ? <button type="submit" class="btn btn-secondary ms-2" onClick={finalUpdate}>
                Update
              </button> : <button type="submit" class="btn btn-primary ms-2" onClick={addData}>
                Submit
              </button>
              }
              
            </div>
          </form>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 ">
          <table className="table  table-striped text-white    ">
            {
              storeData.map((val, index) => {
                console.log(index);
                return <tr key={index} className="d-flex justify-content-between mt-2 mb-2 p-2 bg-dark">
                  <td><input type="checkbox" onChange={handlerz} /></td>
                  <td className="">{val.task}</td>
                  <td >
                    <button className="btn btn-danger me-2" onClick={() => deleteData(val.id)}>Delete</button>
                    <button className="btn btn-success" onClick={() => updateTodo(val.id)}> update  </button>
                  </td>

                </tr>
              })                  
            }
          </table>
        </div>
      </div>
    </div>
  );
}




export default Todo;
