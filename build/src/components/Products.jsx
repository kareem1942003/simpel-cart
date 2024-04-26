import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/Slices/products-slice";
import LoadingCom from "./LoadingCom";
import { addToCart } from "../rtk/Slices/cart-slice";

const Products = () => {
  // @ts-ignore
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Row>
        {products.length ? (
          products.map((product) => (
            <Col key={product.id}>
              <Card
                style={{
                  width: "18rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card.Img
                  style={{ width: "200px" }}
                  variant="top"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price} $</Card.Text>
                  <Card.Text>Rate: {product.rating.rate}</Card.Text>
                  <Card.Text>Count: {product.rating.count}</Card.Text>
                  <Button
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                    variant="primary"
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <LoadingCom />
        )}
      </Row>
    </Container>
  );
};

export default Products;
