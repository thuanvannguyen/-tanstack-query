export const fetchPokemon = async ({ id }) => {
  const response = await fetch(`https://d1s1rehmg7ei44.cloudfront.net/api/v2/pokemon/${id}/`);
  return await response.json();
};
