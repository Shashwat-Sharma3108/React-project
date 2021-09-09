import React from "react";
import styles from "./GuestList.module.css";

const GuestList = (props) => {
    console.log(props.data);
    return (
    <div className={styles.container}>
        <ul className={styles.list}>
            {props.data.map((data,index)=>{
               return ( <li key={index}> {data.name} {data.age} </li>)
            })}
        </ul>
    </div>
    );
}

export default GuestList;