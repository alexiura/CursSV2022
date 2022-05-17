import PropTypes from "prop-types";

const FoodProduct = (props) => {
  return(
    <div>
      <table style={{background: props.color}}>
        <tr>
          <td>{props.prodName}</td>
        </tr>
        <tr>
        <td>{props.price}</td>
        </tr>
        <tr>
        <td>{props.category}</td>
        </tr>

      </table>
    </div>
  )
}

FoodProduct.propTypes = {
  prodName: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  color: PropTypes.string
};

FoodProduct.defaultProps = {
  prodName: "Nume inexistent",
  price: "Preț inexistent.",
  category: "Produs nealocat intr-o categorie",
  color: "lightgray"
};

export default FoodProduct;
