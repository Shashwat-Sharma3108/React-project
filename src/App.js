import "./App.css";
import Form from "../src/Components/Form/Form.js";
import GuestList from "../src/Components/List/GuestList";
import Popup from "./Components/Popup/Popup";
import {useState } from "react";
function App() {
  const [usersList, setUsersList] = useState([]);
  const [value, setValue] = useState(false);
  const [popupState, setPopupState] = useState(false);
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevValue) => {
      return [...prevValue, { name: uName, age: uAge }];
    });
  };

  return (
    <div className="App">
      {popupState && <Popup onButtonClick={setPopupState}/>}
      <Form
        onAddUser={addUserHandler}
        onStateChange={setValue}
        onError={setPopupState}
      />
      {value && <GuestList data={usersList} />}
    </div>
  );
}

export default App;
