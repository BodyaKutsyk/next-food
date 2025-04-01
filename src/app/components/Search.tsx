"use client";

import { Dropdown, DropdownItem, Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const customTheme = {
  inlineWrapper:
    "flex justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  content: "py-1 max-h-60 overflow-y-auto",
};

const cuisines = [
  "African",
  "Asian",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

export const Search = () => {
  const [query, setQuery] = useState("");
  const [time, setTime] = useState("");
  const [currentType, setCurrentType] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params: {
      query?: string;
      maxReadyTime?: string;
      cuisine?: string;
    } = {};

    if (query.trim()) {
      params.query = query.trim();
    }

    if (time.trim()) {
      params.maxReadyTime = time.trim();
    }

    if (currentType) {
      params.cuisine = currentType;
    }
    const queryString = new URLSearchParams(params).toString();

    router.push(`/recipes?${queryString}`);
  };

  return (
    <div className="flex flex-col gap-9">
      <h1 className="text-3xl font-extrabold dark:text-white">Search food</h1>
      <form action="" className="flex flex-col gap-9" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            name="query"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type recipe name"
          />
          <Dropdown
            label={currentType || "Cuisine options"}
            value={currentType}
            inline={true}
            theme={customTheme}>
            {cuisines.map((cuisine, i) => (
              <DropdownItem
                onClick={() => setCurrentType(cuisine)}
                key={`cuisine-${i}`}>
                {cuisine}
              </DropdownItem>
            ))}
          </Dropdown>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Preparation time (in minutes)"
          />
        </div>
        <Button type="submit" disabled={!(query || time || currentType)}>
          Next
        </Button>
      </form>
    </div>
  );
};
