import React from "react";
import Dropdown from "../Assets/Dropdown";

const Assets = () => {
  return (
    <>
      <div>
        <Dropdown />
      </div>
    </>
  );

  // const Form = () => {
  //   return (
  //     <>
  //       <div>
  //         <textarea rows={10} cols={100}></textarea>
  //       </div>
  //     </>
  //   );
  // };

  //   const [selectedOption, setSelectedOption] = useState("");
  //   const [message, setMessage] = useState("");
  //   const [showTextArea, setShowTextArea] = useState(false);
  //   const [db, setDb] = useState(initialDb);
  //   const [textAreaValue, setTextAreaValue] = useState("");

  // const handleChange = (event) => {
  // setSelectedOption(event.target.value);
  // const option = initialDb.find(
  //   (option) => option.value === event.target.value
  //   );
  //   if (option) {
  //     setMessage(option.data);
  //     setShowTextArea(true);
  //     setTextAreaValue(option.textAreaValue);
  //   } else {
  //     setMessage("");
  //     setShowTextArea(false);
  //     setTextAreaValue("");
  //   }
  // };

  // const getTextAreaValue = () => {
  //   const option = db.find((option) => option.value === selectedOption);
  //   return option ? option.textAreaValue : "";
  // };

  // const handleTextAreaChange = (event) => {
  //   const optionIndex = db.findIndex(
  //     (option) => option.value === selectedOption
  //   );
  //   if (optionIndex !== -1) {
  //     const updatedOptions = [...db];
  //     updatedOptions[optionIndex].textAreaValue = event.target.value;
  //     setDb(updatedOptions);
  //   }
  // };

  //   const handleSave = () => {
  //     localStorage.setItem(
  //       selectedOption,
  //       db.find((x) => x.value == selectedOption).textAreaValue
  //     );
  //     console.log("Selected option:", selectedOption);
  //     console.log("Text area value:", textAreaValue);
  //   };

  //   // const handlePrint = () => {
  //   //   if (selectedOption === "option1") {
  //   //     setMessage("")
  //   //   }
  //   // }

  //   return (
  //     <>
  //       <div>
  //         <h1 className="laptops">Laptops</h1>
  // <select className="list" value={selectedOption} onChange={handleChange}>
  //   <option value=""> Select the laptop</option>
  //   {initialDb.map((option) => (
  //     <option key={option.value} value={option.value}>
  //       {option.value}
  //     </option>
  //   ))}
  // </select>
  //         <p className="list-key">{message}</p>
  //         {showTextArea && (
  //           <textarea
  //             className="text-area"
  //             rows={10}
  //             // cols={100}
  //             value={getTextAreaValue()}
  //             onChange={handleTextAreaChange}
  //           />
  //         )}
  //         <div>
  //           <button type="submit" className="button" onClick={handleSave}>
  //             Post
  //           </button>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };
};
export default Assets;
