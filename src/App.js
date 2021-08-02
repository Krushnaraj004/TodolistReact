import React, {useState} from "react";
import "./App.css";

    const App =()=>{
        const [values, setValues] = useState("");
        const[userData,setUserData]=useState([]);

        function submit() {
            //e.preventDefault(); 
            if (!values) {
                alert("please enter values");
            }
            else {
                setUserData([
                    ...userData,
                    values
                ])
            }
        }

        function changing(e) {
            e.preventDefault();
            let value = e.target.value;
            setValues(value);
        }
        function Delete(ind) {

            const deletedArray = userData.filter((element, index) => index !== ind)
            setUserData(deletedArray);

        }
        function Update(ind) {
            const updatedValue = prompt("Enter Task");
            userData[ind] = updatedValue;
            setUserData([...userData]);
        }
        return(
            <>
                <div className="Box1">
                    <div className="Box2">
                        <input type="text" placeholder="Enter Your Task" value={values} onChange={(e) => { changing(e) }} />
                        <button className="addBtn" onClick={(e) => { submit(e) }} >
                            Adding Value
                        </button>
                    </div>
                    <div className="Box3">
                        <ul>
                            {userData.map((element, index) =>

                                <li key={index}>{element}
                                    <div>
                                        <button id="del" type="button" onClick={(e) => {
                                            e.preventDefault();
                                            Delete(index)
                                        }}>Delete
                                        </button>

                                        <button id="up" type="button" onClick={(e) => {
                                            e.preventDefault();
                                            Update(index)
                                        }}>Update
                                        </button>
                                    </div>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </>
        );                
    }
export default App;