const BASE_URL = "https://api.spoonacular.com/recipes";

export async function fetchFromApi(
  endpoint: string,
  withQuery: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  if (!API_KEY) {
    throw new Error("NO API_KEY");
  }

  const url = `${BASE_URL}${endpoint}${withQuery ? "&" : "?"}apiKey=${API_KEY}`;
  const response = await fetch(url);
  console.log(url);

  if (!response.ok) {
    throw new Error(`Error while getting data: ${response.statusText}`);
  }

  return response.json();
}
