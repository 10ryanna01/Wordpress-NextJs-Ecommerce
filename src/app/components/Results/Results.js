"use client";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function Results({ name }) {
  console.log("dude", name);

  return (
    <div className="FSC__filters">
      <button className="FSC__buttons__filter">
        <span className="FSC__buttons__filter__copy">intelegence</span>
      </button>
      <button className="FSC__buttons__filter">
        <span className="FSC__buttons__filter__copy">strength</span>
      </button>
      <button className="FSC__buttons__filter">
        <span className="FSC__buttons__filter__copy">charisma</span>
      </button>
      <button className="FSC__buttons__filter">
        <span className="FSC__buttons__filter__copy">all</span>
      </button>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      name: "dude",
    },
  };
}
