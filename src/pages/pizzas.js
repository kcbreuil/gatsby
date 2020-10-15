import React from 'react';
import { graphql } from 'gatsby';
import PizzasList from '../components/PizzaList';

export default function PizzasPage({ data }) {
  console.log(data);
  const pizzas = data.pizzas.nodes;
  return (
    <>
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
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
