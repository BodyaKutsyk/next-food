import { fetchFromApi } from "@/api/client";
import { Card, ListGroup, Button, ListGroupItem } from "flowbite-react";

interface RecipePageProps {
  params: { id: string };
}

interface Ingredient {
  id: number;
  original: string;
}

export default async function Recipe({ params }: RecipePageProps) {
  const id = params.id;
  const recipe = await fetchFromApi(`/${id}/information`, false);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card imgSrc={recipe.image} imgAlt={recipe.title}>
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <div
          className="text-white mb-4"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        />
        <p className="text-white mb-4">
          <strong>Time for cooking:</strong> {recipe.readyInMinutes} minutes
        </p>
        <h3 className="text-xl font-semibold mb-2">Інгредієнти:</h3>
        <ListGroup>
          {recipe.extendedIngredients.map((ingredient: Ingredient) => (
            <ListGroupItem key={ingredient.id}>
              {ingredient.original}
            </ListGroupItem>
          ))}
        </ListGroup>
        <Button
          className="mt-4"
          href={recipe.sourceUrl}
          formTarget="_blank"
          rel="noopener noreferrer">
          Look for details
        </Button>
      </Card>
    </div>
  );
}
