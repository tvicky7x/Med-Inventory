import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import Container from "./Components/UI/Container";
import Form from "./Components/Form/Form";
import MedList from "./Components/MedList/MedList";
import Cart from "./Components/Cart/Cart";
import cartContext from "./cartContext";

function App() {
  const context = useContext(cartContext);

  return (
    <>
      <Navbar />
      <Container>
        <Form />
        <MedList />
      </Container>
      {context.cartState && <Cart />}
    </>
  );
}

export default App;
