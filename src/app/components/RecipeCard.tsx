"use client";

import { useRouter } from "next/navigation";
import { Card } from "flowbite-react";
import { Recipe } from "@/types/Recipe";

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/recipes/${recipe.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="max-w-sm cursor-pointer hover:scale-105 duration-300"
      imgAlt={recipe.title}
      imgSrc={recipe.image}>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
};
