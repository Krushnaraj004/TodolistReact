//props(properties)---->> object , data Stores, data pass parent to child , props are immutable

    // let x="hello";
    // let obj={
    //     name:"Elon",
    //     company:"Tesla"
    // };
    // const helloworld=()=>{
    //     console.log("called");
    // }
    //return(
    // <div className="App">
    //     <h1>Hello</h1>
    //     <h2>Bye</h2>
    // </div>
    // <>
    // <h1>Hello</h1>
    // <h2>Bye</h2>
    // <p>{console.log('x',x)}</p>
    // <h1>HEllo</h1>
    // <p>Name {obj.name}
    // Company {obj.company}
    // </p>
    // <p>{helloworld()}</p>
    // </>
    // );

//let morning=true;
// let morning=false;
// return (
//     <div>
//         <p>Greeting message : {morning?"GoodMorning":"GoodEvening"}</p>
//         <p>{morning && "Good morning beta"}</p>
//     </div>
//     );

//const headingStyle = {backgroundColor:red};
//<table border="1" style={headingStyle}>
// const hello = () =>
//     {
//                 alert("wahh beta moj karde");
//     };
//     const fun = () =>
//     {
//                 alert("Kuch to lik bete");
//     };
// return (
//     <div className="tab">
//       <table border="1" style={{backgroundColor:"red"}}>
//         <tr>
//         <td><img src={logo} alt="Logo" width="150px"/></td> <br/>
//         </tr>
//         <tr>
//         <td>Name: <input type = "text" onClick={()=>alert("kuch lik")}/></td> <br/>
//           </tr>
//             <tr>
//         <td>Age: <input type = "text" onKeyPress={()=>alert("kuch lik")}/></td> <br/>
//         </tr>
//             <tr>
//         <td>Address: <input type = "text" onKeyPress={()=>alert("kuch lik")}/></td><br/>
//             </tr>
//             <tr>
//         <td>Contact: <input type = "text" onKeyPress={()=>alert("kuch lik")}/></td><br/>
//         </tr>
//             <tr>
//         <td><input type="Submit" onClick={()=>{hello()}}/></td><br/>
//         </tr>
//       </table>
//      </div>
//     );
// }

//props uses 
  // const callingParent = () => {
    //     console.log("Called from child");
    // }
    // return ( < >
    //     <Home title = { "Title1" }
    //     description = { "Hello" }
    //     callingParent = { callingParent }/>  
    //     <Home title = { "Title2" }
    //     description = { "Hello1" }/>  
    //     <Home title = { "Title3" }
    //     description = { "Hello2" }/>  
    //     <Home title = { "Title4" }
    //     description = { "Hello3" }/> 
    //     <Home title = { "Title5" }
    //     description = { "Hello4" }/> 

    //     </>
    // );


//hooks usestate 
//const App = () => {
//    //let count=4;
//    let [count,updateCount] = useState(4);
//    const changeCount =()=>
//    {
//     //count = count + 1;
//     //console.log("count number",count);
//     //    updateCount(5);
//        updateCount(count++);
//        //updateCount(count+1);
//    }
//    return (
//         <>
//             <button style={{margin:20}} onClick={ changeCount}>
//                 Click Me
//             </button>
//             <p>{count}</p>
//         </>
//    );

//petrol increase decrease code example

// const App = () => {
//   let [count, updateCount] = useState(99);
//   if (count === 120 || count === 75) {
//     alert("Please! stop changing price of petrol");
//   }
//   const changeCount = () => {
//     updateCount(count + 1);
//   }
//   const subCount = () => {
//     updateCount(count - 1);
//   }
//   const main = () => {
//     updateCount(99);
//   }
//   return (
//     <>
//       <div className="tab">
//         <a><img src={im} width="180" height="150" /></a>
//         <button style={{ margin: 20 }} onClick={changeCount}>
//           increase ^
//         </button>
//         <p>{count}</p>
//         <button style={{ margin: 20 }} onClick={subCount}>
//           Decrease v
//         </button>
//         <button type="reset" onClick={main}>Reset</button>
//       </div>
//     </>
//   );
// };

//Hooks Object Prevalue

// let [count, updateCount] = useState(4);
// let [show, setShow] = useState(false);
// let [userData, setUserData] = useState({
//   name: "Iroman",
//   Power: "Money and Technology",
// });

// const changeCount = () => {
//   setShow(true);
//   updateCount((preValue) => {
//     return preValue + 1;
//   });
// };
// const Fillform = () => {
//   setUserData({ name: "batman" }, { Power: "King" });
//   console.log("userData", { ...userData, age: 30, name: "SuperMan" });
//   //add data and update the old data 
//   setUserData((preValue) => {
//     return {
//       name: "Batman",
//       Power: preValue.Power,
//     }
//   });
            //setUserData({...userData,name:"Batman"});
            // we can write this anywhere in code
            
{/* <>
  <div className="tab">
    <button onClick={changeCount}>Click!</button>
    <p>{count}</p>
    <p>{show ? count : ""}</p>
    <p>name :{userData.name ? userData.name : "Name Empty"}||Power:{" "}
      {userData.Power ? userData.Power : "Power Empty"}</p>
    <button onClick={Fillform}>Fill form</button>
  </div>
</> */}

//Map usestate Render
// let [arrData, setArrData] = useState(["1", "2", "3", "4"]);
// const callRender = () => {
//   const map1 = arrData.map((item) => {
//     return item;
//   });
//   console.log("Map1:", map1);
// };
// return (
//   <>
//     <button onClick={callRender}>Render</button>
//     {
//       arrData.map((item) => {
//         return (
//           <>
//             <p>{item}</p>
//             <h1>{item}</h1>
//           </>
//         )
//       })
//     }
//   </>
// )


//array object
// let [userData, setdata] = useState([
//   {
//     Car: "Audi",
//     Price: "40lakh",
//   }
// ])
// const callRender = () => {
//   setdata([
//     {
//       Car: "BMW",
//       Price: "50lakh",
//     }
//   ])
// };

// return (
//   <>
//     <button onClick={callRender} className="wp"> fill form</button>
//     {userData.map((item) => {
//       return (
//         <>
//           <p className="wrapper">{item.Car}</p>
//           <p className="wrapper">{item.Price}</p>
//         </>
//       );
//     })}
//   </>
// );
// };

//array object map and key use with props
// const initState = [
//   {
//     Name: "Batman",
//     age: 40,
//   },
//   {
//     Name: "Superman",
//     age: 28,
//   },
//   {
//     Name: "Ironman",
//     age: 50,
//   },
//   {
//     Name: "Spiderman",
//     age: 20,
//   },
// ];

// const UserData = (props) => {
//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <h5>Name:Spiderman</h5>
                <p>age:20</p>  */}
        {/* <h5>Name:{props.item.Name}</h5>
        <p>age:{props.item.age}</p>
{/*  */}
      {/* </div>
    </>
  );
} */}

//const App = () => {

 // const [userData, setUserData] = useState(initState);
  // const push = () => {
  //   const dummyData = { Name: "KJ", age: 40 }; 
    //setUserData([...userData,dummyData]);
  //   setUserData([dummyData, ...userData]);
  // }
  // const deleteArr = () => {
  //   const filteredArr = userData.filter((item) => item.age != 40);
  //   setUserData(filteredArr);
  // }
  // return (
  //   <>
  //     <button onClick={push}>Push at the end</button>
  //     <button onClick={deleteArr}>Delete</button>
  //     {userData.map((item, index) => {
  //       return <UserData key={index} item={item} />;
        //map((item,index)) key = { index }
        //key={item.Name}
//       })
//       }
//     </>);
// }

//form using hook 
// const[input,setInput] = useState();
// const [email, setEmail] = useState();
// const [phone, setphone] = useState();

// const [userData, setUserData] = useState({
//   name: "",
//   email: "",
//   phone: "",
// })
// const inputHandler = (e) => {
//   console.log("e", e.target.name);
//   setUserData({ ...userData, [e.target.name]: e.target.value })
  // if(e.target.name === "name")
  // {
  //     // setInput(e.target.value);
  //     setUserData({...userData,[e.target.phone]e.target.value})
  // }
  // else if(e.target.name==="email")
  // {
  //     setUserData({ ...userData,[e.target.email]e.target.value})
  //     // setEmail(e.target.value);
  // }
  // else{
  //     setUserData({ ...userData, [e.target.phone]:e.target.value})
  //     // setphone(e.target.value);
  // }

// };
// const inputHandler1 = (e) => {
//     console.log("e", e.target.value);
//     setEmail(e.target.value);
// };

// const submit=()=>
// {
// };
// return (
//   <>
//     <input type="text" name="name" placeholder="Enter Name" onChange={inputHandler} />
//     <input type="text" name="email" placeholder="Enter Email" onChange={inputHandler} />
//     <input type="text" name="phone" placeholder="Enter Phonenumber" onChange={inputHandler} />
//     {/* <button onClick={submit}>Get</button> */}
//     <p>{userData.name}</p>
//     <p>{userData.email}</p>
//     <p>{userData.phone}</p>
//   </>
// );

//car shoom array object map and key use with props
// const initState = [
//   {
//     Car1: "Audi",
//     Color1: "Red",
//   },
//   {
//     Car2: "Royals Royes Ghost",
//     Color2: "White",
//   },
//   {
//     Car3: "BMW",
//     Color3: "Grey",
//   },
//   {
//     Car4: "Brezza",
//     Color4: "Silver",
//   },
// ];

// const UserData = (props) => {
//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <h5>{props.item.Car1}</h5>
//         <br />
//         <p>{props.item.Color1}</p>
//         <br />
//         <h5>{props.item.Car2}</h5>
//         <br />
//         <p>{props.item.Color2}</p>
//         <br />
//         <h5>{props.item.Car3}</h5>
//         <br />
//         <p>{props.item.Color3}</p>
//         <br />
//         <h5>{props.item.Car4}</h5>
//         <br />
//         <p>{props.item.Color4}</p>
//       </div>
//     </>
//   );
// }
// const App = () => {

//   const [userData, setUserData] = useState(initState);
//   const push = () => {
//     const dummyData = { Car4: "Creta", Color4: "Black" };
//     setUserData([dummyData, ...userData]);
//   }
//   const deleteArr = () => {
//     const filteredArr = userData.filter((item) => item.Color2 != "White");
//     setUserData(filteredArr);
    // const filteredArr2 = userData.filter((item) => item.Color4 != "Silver");
    // setUserData(filteredArr2);
  // }
//   return (
//     <>
//       <h1 style={{ display: "flex", justifyContent: "center" }}>CAR SHOWROOM !</h1>
//       <div className="box">
//         <div>
//           {userData.map((item, index) => {
//             return <UserData key={index} item={item} />;
//           })}
//         </div>
//         <div className="box2">
//           <button onClick={push}>Add</button>
//           <button onClick={deleteArr}>Delete</button>
//         </div>

//       </div>
//     </>);
// }

//css

/* body
{
} */
/* .box
{
    background-color: red;
    font-size: 25px;
} */
/* .box2
{
  display: flex;
  justify-content: center;
} */
/* .tab
{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
} */
/* .wrapper {
  height: 100%;
  width: 100%;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
background-size: 1800% 1800%;

-webkit-animation: rainbow 18s ease infinite;
-z-animation: rainbow 18s ease infinite;
-o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;}

@-webkit-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-moz-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-o-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
} */

//Form react hooks add value on change 
// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [userData, setUserData] = useState({
//     name: "",
//     address: "",
//     car: "",
//     Price: "",
//   });
//   const inputHandler = (e) => {
//     console.log("e", e.target.name);
//     setUserData({ ...userData, [e.target.name]: e.target.value })
//   }
//   const sb = () => {
//     alert("Car is Booked");
//   }
//   return (
//     <div className="main">
//       <br /> <br />
//       <div className="box2">
//         Name:<input type="text" name="name" onChange={inputHandler}></input>
//         <br /><br />
//         Address:<input type="text" name="address" onChange={inputHandler}></input>
//         <br /><br />
//         CarModel:<input type="text" name="car" onChange={inputHandler}></input>
//         <br /><br />
//         Price:<input type="text" name="Price" onChange={inputHandler}></input>
//         <br /><br />
//         <input type="submit" name="Book" value="Book" onClick={sb}></input>
//       </div>
//       <div className="box1">
//         <br /><br />
//       </div>
//       <br /><br />
//       <div className="box3">
//         <p>{userData.name}</p>
//         <p>{userData.address}</p>
//         <p>{userData.car}</p>
//         <p>{userData.Price}</p>
//       </div>

//     </div>

//   );
// }
// export default App;

//css of form
// body{
//   background - image: url("./car.jpg");
//   background - size: cover;
//   width: 500px;
//   height: 200px;
//   background - repeat: no - repeat;

// }
// .main
// {
//   width: 350px;
//   height: 215px;
//   border: 1px solid black;
//   background - color: aqua;
//   margin - left: 800px;
// } monokai dimmed
// .box3
// {
//   background - color: aqua;
//   border: 1px solid black;
// }
// .box2
// {
//   text - align: center;
// }