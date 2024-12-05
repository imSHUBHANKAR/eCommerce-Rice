import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import PaytmQR from '../assets/PaytmQR.jpg'; // Ensure PaytmQR.jpg is in the assets folder

function Cart() {
  const { cart, removeFromCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [totalAmount, setTotalAmount] = useState(0); // Total amount state

  // Calculate total amount when cart changes
  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => {
      // Ensure price and quantity are treated as numbers
      const price = Number(item.price);
      const quantity = Number(item.quantity);

      if (!isNaN(price) && !isNaN(quantity)) {
        return acc + price * quantity;
      } else {
        return acc; // Skip invalid items
      }
    }, 0);
    setTotalAmount(total);
  };

  const openModal = () => {
    calculateTotal();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="h-16 w-16 rounded" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Remove
                </button>
                <button
                  onClick={openModal}
                  className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Pay Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>
            <img
              src={PaytmQR}
              alt="QR Code"
              className="mx-auto mb-4 w-48 border border-slate-800 rounded-md"
            />
            <p className="text-lg font-semibold mb-4">Total Amount: ₹{totalAmount}</p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
