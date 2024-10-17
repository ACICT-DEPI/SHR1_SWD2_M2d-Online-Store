import VerticalCardProduct from './VerticalCardProduct';

function ParentComponent({ products }) {
  return (
    <div>
      {products.map((product) => (
        <VerticalCardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ParentComponent;
