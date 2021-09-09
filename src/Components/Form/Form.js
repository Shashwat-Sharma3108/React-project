import React, {useState} from "react";

import Styles from "./form.module.css";

const Form = (props)=>{
    const [name,setName] = useState("");
    const [age,setAge] = useState("");

    function HandleChange(event){
        if(event.target.name === "Name"){
            setName(event.target.value);
        }else{
            setAge(event.target.value);
        }
    }

    function HandleSubmit(event){
        event.preventDefault();
        // console.log(name,age);
        if(name.trim() === ""|| +age<=0 || age.trim()==="" ){
            console.log("Please enter valid values!");
            setAge("");
            setName("");
            props.onError(true);
            return;
        }

        props.onAddUser(name,age);
        props.onStateChange(true);
        setAge("");
        setName("");
    }

    return(<div className = {Styles.container}>
        <h1 className={Styles.heading}> Guest List </h1>
        <form onSubmit={HandleSubmit} className={Styles['form-container']}>
            <div className={Styles.input}>
                <input className={Styles['input-field']} name="Name" type="text" onChange={HandleChange} placeholder="Please enter your name" value={name}></input>
                <input className={Styles['input-field']} name="Age" type="number" onChange={HandleChange} placeholder="Enter Your Age" value={age} step="1" ></input>
            </div>
            <div className={Styles.btnblock}>
            <button type="submit" className={Styles.btn}> Save </button>
            </div>
        </form>
    </div>);
}

export default Form;

