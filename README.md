# Recipe Finder

Recipe Finder is a web application that allows users to search for recipes based on specific criteria like ingredients, cuisine, and preparation time. It fetches recipe data from the [Spoonacular API](https://spoonacular.com/food-api) and displays it in an interactive and visually appealing manner.

## Features

- Search for recipes by ingredients, cuisine, or preparation time.
- View detailed information about each recipe, including ingredients, preparation steps, and more.
- Responsive design that works well on both desktop and mobile devices.
- Detailed view for each recipe with an image, summary, and nutritional information.

## Technologies Used

- **React**: For building the user interface and managing application state.
- **Next.js**: Used for server-side rendering and routing.
- **Flowbite**: A component library for styling the application, built on top of Tailwind CSS.
- **Tailwind CSS**: For utility-first CSS styling.
- **Spoonacular API**: Provides the recipe data used in the app.

## Setup

To set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/next-food.git
   cd next-food
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or using yarn
   yarn install
   ```

3. **Create a `.env` file** in the root of the project and add your Spoonacular API key:

   ```bash
   NEXT_PUBLIC_API_KEY=your_spoonacular_api_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or using yarn
   yarn dev
   ```

   The app will be available at `http://localhost:3000`.

## Project Structure

- **`app/recipes/page.tsx`**: The main page where the list of recipes is displayed.
- **`app/recipes/[id]/page.tsx`**: A dynamic page to view detailed information about a selected recipe.
- **`components/RecipeCard.tsx`**: A component that displays individual recipe information in a card layout.
- **`utils/fetchApi.ts`**: A utility function to handle API requests.

## How It Works

1. **Recipe Search**:
   - On the main page (`/recipes`), users can search for recipes by entering keywords.
   - Based on the search query, a fetch request is made to the Spoonacular API, which returns a list of recipes.
2. **Recipe Details**:

   - When a user clicks on a recipe card, they are redirected to a new page displaying detailed information about the recipe.
   - This page includes the recipe's title, image, ingredients, and cooking instructions.

3. **Server-Side Rendering**:
   - Next.js handles server-side rendering (SSR) for the recipe pages, ensuring that the content is pre-rendered and available when the page loads.

## Future Improvements

- Add user authentication to save favorite recipes.
- Integrate more advanced search filters.
- Allow users to add their own recipes.
- Implement caching for recipe data to improve performance.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request. We welcome improvements, bug fixes, and new features!
