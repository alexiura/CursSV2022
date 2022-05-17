import FlowerPot from "./flowerPot";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import AddInput from "./addInput";

const MyComponent = (props) => {

  const [colorName, setColorName] = useState(false);
  const [loaded, setLoaded] = useState('Loading, please wait');

  const toggleColor = () => {
    setColorName(!colorName);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded('Finished loading');
    }, 5000);
  }, []);

  if (props.myName && !loaded) return <div>loading...</div>;
  return (
    <div className="container" style={props.exerciseNumber === 'Exercițiu 3' ? {height : "300px"} : {} }>
      <FlowerPot/>
      <div className="etiquette">{props.exerciseNumber}</div>
      <div className={'d-flex'} id={colorName ? 'myBlueColorName' : 'myBlackColorName'} onClick={toggleColor}>
        <strong>{props.myName}</strong>
        <span id={colorName ? 'hideText' : 'showText'} > - Numele de alături este colorat</span>
      </div>
      <div>{props.exerciseNumber === 'Exercițiu 3' ? <AddInput/> : ''}</div>
      <div>{props.exerciseNumber === 'Exercițiu 4' ? loaded : '' }</div>
    </div>
  )
}

MyComponent.propTypes = {
  exerciseNumber: PropTypes.string,
  myName: PropTypes.string
};

MyComponent.defaultProps = {
  exerciseNumber: "Exercitiu X",
  myName : undefined
};


export default MyComponent;
