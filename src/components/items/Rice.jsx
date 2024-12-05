// import RiceProducts from '../../../public/Rice.json';
// import { IoCartOutline } from "react-icons/io5";


// function Rice() {
//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold text-center mb-5">Rice Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-300 p-6 rounded-2xl">
//         {RiceProducts.products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-3xl p-4 flex flex-col items-center"
//           >
//             <div className='bg-gray-200 rounded-t-3xl rounded-b-md w-full'>
//             <img
//               src={product.img}
//               alt={product.productName}
//               className="h-36 w-full object-cover  rounded-t-3xl"
//             />
//             <div className='flex justify-between gap-5 w-full p-3 '>
//             <h2 className="text-lg font-semibold mb-1">{product.productName}</h2>
//             <p className="text-black">{product.ProductPrice}</p>
//             </div>
//             <div className='flex justify-between gap-5 w-full pr-3 pl-3 pb-3'>
//             <p className="text-gray-500 text-sm">Size: {product.ProductSize}</p>
//             <p className="text-gray-500 text-sm">⭐{product.ProductRating}</p>
//             </div>
//             </div>
//             <div className="mt-1 flex justify-between gap-5 w-full bg-gray-200 p-4 rounded-t-md rounded-b-2xl">
//               <button className="bg-white flex items-center border-green-500 text-black px-4 py-1 rounded-full hover:bg-green-600">
//                 Add to <IoCartOutline/>
//               </button>
//               <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-blue-600">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Rice;




// import RiceProducts from '../../../public/Rice.json';
// import { IoCartOutline } from "react-icons/io5";
// import { useCart } from '../../context/CartContext'; 

// function Rice() {
//   const { addToCart } = useCart(); // Access the addToCart function

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold text-center mb-5">Rice Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-300 p-6 rounded-2xl">
//         {RiceProducts.products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-3xl p-4 flex flex-col items-center"
//           >
//             <div className='bg-gray-200 rounded-t-3xl rounded-b-md w-full'>
//               <img
//                 src={product.img}
//                 alt={product.productName}
//                 className="h-36 w-full object-cover rounded-t-3xl"
//               />
//               <div className='flex justify-between gap-5 w-full p-3'>
//                 <h2 className="text-lg font-semibold mb-1">{product.productName}</h2>
//                 <p className="text-black">{product.ProductPrice}</p>
//               </div>
//               <div className='flex justify-between gap-5 w-full pr-3 pl-3 pb-3'>
//                 <p className="text-gray-500 text-sm">Size: {product.ProductSize}</p>
//                 <p className="text-gray-500 text-sm">⭐{product.ProductRating}</p>
//               </div>
//             </div>
//             <div className="mt-1 flex justify-between gap-5 w-full bg-gray-200 p-4 rounded-t-md rounded-b-2xl">
//               <button
//                 onClick={addToCart} // Update cart count
//                 className="bg-white flex items-center border-green-500 text-black px-4 py-1 rounded-full hover:bg-green-600"
//               >
//                 Add to <IoCartOutline />
//               </button>
//               <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-blue-600">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Rice;





// Rice.jsx
import RiceProducts from "../../../public/Rice.json";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../context/CartContext";

function Rice() {
  const { addToCart } = useCart();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center mb-5">Rice Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-300 p-6 rounded-2xl">
        {RiceProducts.products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-3xl p-4 flex flex-col items-center"
          >
            <div className="bg-gray-200 rounded-t-3xl rounded-b-md w-full">
              <img
                src={product.img}
                alt={product.productName}
                className="h-36 w-full object-cover rounded-t-3xl"
              />
              <div className="flex justify-between gap-5 w-full p-3">
                <h2 className="text-lg font-semibold mb-1">
                  {product.productName}
                </h2>
                <p className="text-black">{product.ProductPrice}</p>
              </div>
              <div className="flex justify-between gap-5 w-full pr-3 pl-3 pb-3">
                <p className="text-gray-500 text-sm">
                  Size: {product.ProductSize}
                </p>
                <p className="text-gray-500 text-sm">
                  ⭐{product.ProductRating}
                </p>
              </div>
            </div>
            <div className="mt-1 flex justify-between gap-5 w-full bg-gray-200 p-4 rounded-t-md rounded-b-2xl">
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.productName,
                    price: product.ProductPrice,
                    img: product.img,
                  })
                }
                className="bg-white flex items-center border-green-500 text-black px-4 py-1 rounded-full hover:bg-green-600"
              >
                Add to <IoCartOutline />
              </button>
              <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rice;
