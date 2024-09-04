"use client";

import { fetchPokemon } from "@/api/fetchPokemon";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

const Pokemon = ({ id }) => {
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemon", { id }],
    queryFn: () => fetchPokemon({ id }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(pokemon);
  
  return (
    <div>
      <h2>#{id}</h2>
      <h2>{pokemon && pokemon.name}</h2>
      <Image
        alt="Images"
        src={pokemon?.sprites?.front_shiny}
        width={150}
        height={150}
        priority
      />
    </div>
  );
};

export const PokemonPager = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <button type="button" onClick={() => setId(id !== 1 ? id - 1 : 250)}>
        Previous
      </button>

      <button type="button" onClick={() => setId(id !== 250 ? id + 1 : 1)}>
        Next
      </button>

      <Pokemon id={id} />
    </div>
  );
};

export default PokemonPager;
