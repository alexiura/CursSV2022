import {useState} from "react";

const GridItem = (props) =>{
  const [buttonId, setButtonId] = useState('');
  const handleClick = event => {
    event.currentTarget.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setButtonId(props.id);
  };

  return(
    <>
      <button className="gridItem" onClick={handleClick}></button>
    </>
  )
}

export default GridItem;
