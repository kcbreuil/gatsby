import { useState } from 'react';

export default function usePizza({ pizzas, inputs }) {
  // create state to hold order
  const [order, setOrder] = useState([]);
  // make a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // make function to remove things
  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }
  // send data to servless function when they check out
  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
