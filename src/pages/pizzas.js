import React from 'react';
import { graphql } from 'gatsby';
import PizzasList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data }) {
  console.log(data);
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <ToppingsFilter />
      <PizzasList pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
