import { useContext, useState } from "react";
import { CreateProduct, Error, Loader, Modal, Product } from "./components";
import { ModalContext } from "./context/ModalContext";
import { useProducts } from "./hooks/useProducts";
import { IProduct } from "./models";

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const { visible, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {visible && (
        <Modal title="Create new product" onClose={() => close()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-blue-500 text-white text-2xl px-4 py-2"
        onClick={() => open()}
      >
        +
      </button>
    </div>
  );
}

export default App;
