import FoodProduct from "../foodProduct";

const Exercise2 = () => {
  return (
    <div className="container" style={{height: "auto"}}>
      <FoodProduct/>
      <FoodProduct prodName="Paine" category="Alimente de baza" price={4} color="yellow"/>
      <FoodProduct prodName="Mere" category="Fructe" price={2} color="red"/>
    </div>
  )
}

export default Exercise2;
