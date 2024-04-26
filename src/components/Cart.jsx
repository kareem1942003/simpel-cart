import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../rtk/Slices/cart-slice";

const Cart = () => {
  // @ts-ignore
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <Container>
      <div
        style={{
          padding: "10px 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>My Cart</h1>
        <Button
          onClick={() => {
            dispatch(clearCart());
          }}
          variant="danger"
        >
          Delete All
        </Button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>image</th>
            <th>price</th>
            <th>quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image style={{ width: "80px" }} src={product.image} />
              </td>
              <td>{product.price} $</td>
              <td>{product.quantity}</td>

              <td>
                <Button
                  onClick={() => {
                    dispatch(deleteFromCart(product));
                  }}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2>Total Price: {totalPrice.toFixed(2)} $</h2>
    </Container>
  );
};

export default Cart;
