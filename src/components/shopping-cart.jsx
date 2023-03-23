import { useSelector } from "react-redux";
import { products } from "../data";
import { MainLayout } from "../layout/main-layout";
import { getProductsFromCart } from "../store/cart/cart-actions";
import { formatPrice } from "../utils";

const productMap = new Map();
for (let p of products) {
  productMap.set(p.id, p);
}

export const ShoppingCart = () => {
  const productsFromCart = useSelector(getProductsFromCart);

  return (
    <MainLayout>
      {productsFromCart.length > 0 ? (
        <div className="w-10/12 mx-auto my-20">
          <table className="w-full text-sm text-left">
            <thead className="text-lg uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Id</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {productsFromCart.map((product, index) => {
                return (
                  <tr key={`pd_${index}`}>
                    <td className="px-6 py-3">{index + 1}</td>
                    <td className="px-6 py-3">
                      {productMap.get(product.id).name}
                    </td>
                    <td className="px-6 py-3">
                      {formatPrice(productMap.get(product.id).price)}
                    </td>
                    <td className="px-6 py-3">{product.quantity}</td>
                    <td className="px-6 py-3">
                      {formatPrice(
                        productMap.get(product.id).price * product.quantity
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="my-20 w-1/6 mx-auto">Not found product</div>
      )}
    </MainLayout>
  );
};
