export const fetchIngredientFoodAPI = async (ingredient) => {
  const endpoint = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

  const result = await endpoint.json();
  return result;
};

export const fetchNameFoodAPI = async (name) => {
  const endpoint = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

  const result = await endpoint.json();
  return result;
};

export const fetchFirstLetterFoodAPI = async (firstLetter) => {
  const endpoint = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);

  const result = await endpoint.json();
  return result;
};

export const fetchIngredientDrinkAPI = async (ingredient) => {
  const endpoint = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);

  const result = await endpoint.json();
  return result;
};

export const fetchNameDrinkAPI = async (name) => {
  const endpoint = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

  const result = await endpoint.json();
  return result;
};

export const fetchFirstLetterDrinkAPI = async (firstLetter) => {
  const endpoint = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);

  const result = await endpoint.json();
  return result;
};

// req 25 e 26
export const fetchRecipeDrinkAPI = async () => {
  const endpoint = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');

  const result = await endpoint.json();
  return result;
};

// req 27
export const fetchFoodCatListAPI = async () => {
  const endpoint = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');

  const result = await endpoint.json();
  return result;
};

export const fetchDrinkCatListAPI = async () => {
  const endpoint = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');

  const result = await endpoint.json();
  return result;
};

// req 28
export const fetchFoodCatFilterAPI = async (category) => {
  const endpoint = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

  const result = await endpoint.json();
  return result;
};

export const fetchDrinkCatFilterAPI = async (category) => {
  const endpoint = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);

  const result = await endpoint.json();
  return result;
};
