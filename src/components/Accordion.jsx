import Btn from "./Btn";
import { useState } from "react";

export default function Accordion({ id, title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleWin = () => {
    setIsOpen((currentValue) => !currentValue);
  };
  return (
    <div className="acc-container">
      {isOpen ? (
        <div className="acc-head colorTitle">
          <h2>{title}</h2>
          <button className="btn btnPrimary" onClick={toggleWin}>
            {isOpen ? "-" : "+"}
          </button>
        </div>
      ) : (
        <div className="acc-head">
          {" "}
          <h2>{title}</h2>
          <button className="btn btnPrimary" onClick={toggleWin}>
            {isOpen ? "-" : "+"}
          </button>
        </div>
      )}
      {isOpen && (
        <div className="acc-body">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
