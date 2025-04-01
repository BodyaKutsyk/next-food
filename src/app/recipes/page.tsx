import { Recipe } from "@/types/Recipe";
import { RecipeCard } from "../components/RecipeCard";
import { fetchFromApi } from "@/api/client";

async function getRecipes(
  searchQuery: string,
  cuisine: string,
  maxReadyTime: string
) {
  const apiUrl = `/complexSearch?`;

  const params: {
    query?: string;
    maxReadyTime?: string;
    cuisine?: string;
  } = {};

  if (searchQuery) {
    params.query = searchQuery;
  }

  if (maxReadyTime.trim()) {
    params.maxReadyTime = maxReadyTime;
  }

  if (cuisine) {
    params.cuisine = cuisine;
  }
  const queryString = new URLSearchParams(params).toString();

  const data = await fetchFromApi(apiUrl + queryString, true);

  return data.results || [];
}

export default async function Recipes({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; maxReadyTime?: string };
}) {
  const { query, cuisine, maxReadyTime } = await searchParams;

  const recipes: Recipe[] = await getRecipes(
    query || "",
    cuisine || "",
    maxReadyTime || ""
  );

  return (
    <div className="flex flex-col gap-10">
      <h1 className="my-8 text-3xl text-center font-extrabold dark:text-white">
        Recipes
      </h1>
      {recipes.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-5">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}
