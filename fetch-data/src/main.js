async function fetchData() {
  const loader = document.getElementById("loader");
  const imgElement = document.getElementById("pokemonSprite");

  try {

    loader.style.display = "block";
    imgElement.style.display = "none";

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    loader.style.display = "none";
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    loader.style.display = "none";
    console.error("Error fetching data:", error);
  }
}
