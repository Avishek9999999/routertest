import { useParams, Link } from "react-router-dom";

function ProductDetail({ list }) {
  const { id } = useParams();

  const product = list.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>

      <img
        src={product.image}
        alt={product.name}
        width={300}
      />

      <p>Price: ${product.price}</p>

      <p>{product.description}</p>

      <Link to="/productlist">
        Go to Product List
      </Link>
    </div>
  );
}

export default ProductDetail;