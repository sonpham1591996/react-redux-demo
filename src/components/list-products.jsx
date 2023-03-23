import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { products } from "../data";
import { MainLayout } from "../layout/main-layout";
import { addProductToCart } from "../store/cart/cart-actions";
import { showGlobalToastAction } from "../store/global-toast/global-toast-actions";

export const ListProducts = () => {
  const dispatch = useDispatch();

  const onAddCart = (productId) => {
    dispatch(addProductToCart(productId));
    dispatch(showGlobalToastAction("success", "Add cart successfully"));
  };

  return (
    <MainLayout>
      <div className="flex w-10/12 mx-auto my-20">
        {products.map((product, index) => {
          return (
            <div
              key={`product-${index}`}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-4"
            >
              <div>
                <img
                  className="rounded-t-lg"
                  src={product.thumbnailUrl}
                  alt=""
                />
              </div>
              <div className="p-5">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {product.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700">
                  {product.price}
                </p>
                <div
                  onClick={() => onAddCart(product.id)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
                >
                  Add cart
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};
