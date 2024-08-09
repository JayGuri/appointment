import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { SearchIcon } from "lucide-react";
import Recipe from "./Recipe";


export default function Home() {
  const [filters, setFilters] = useState({
    tags: [],
    difficulty: [],
    mealType: [],
    dietaryRestrictions: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const recipesPerPage = 8;

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        console.log(data);

        setRecipes(data.recipes || data); 
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };

    getRecipes();
  }, []);

  const filteredRecipes = useMemo(() => {
    if (!Array.isArray(recipes)) return []; 

    return recipes.filter((recipe) => {
      const { tags, difficulty, mealType, dietaryRestrictions } = filters;

      if (
        tags.length > 0 &&
        !tags.some((c) => recipe.tags?.includes(c)) 
      ) {
        return false;
      }
      if (difficulty.length > 0 && !difficulty.includes(recipe.difficulty)) {
        return false;
      }
      if (
        mealType.length > 0 &&
        !mealType.some((m) => recipe.mealType?.includes(m)) 
      ) {
        return false;
      }
      if (
        dietaryRestrictions.length > 0 &&
        !dietaryRestrictions.every((r) =>
          recipe.dietaryRestrictions?.includes(r) 
        )
      ) {
        return false;
      }
      if (
        searchTerm.trim() !== "" &&
        !recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [filters, searchTerm, recipes]); 

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Recipe Discovery</h1>
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search recipes..."
              className="pl-10 pr-4 py-2 text-black rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </header>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <div className="bg-card rounded-md shadow-md p-4">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-base font-medium mb-2">Cuisine</h3>
                <div className="grid gap-2">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="tags-mediterranean"
                      checked={filters.tags.includes("Mediterranean")}
                      onCheckedChange={() =>
                        handleFilterChange("tags", "Mediterranean")
                      }
                    />
                    <label htmlFor="tags-mediterranean">Mediterranean</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="tags-asian"
                      checked={filters.tags.includes("Asian")}
                      onCheckedChange={() =>
                        handleFilterChange("tags", "Asian")
                      }
                    />
                    <label htmlFor="tags-asian">Asian</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="tags-italian"
                      checked={filters.tags.includes("Italian")}
                      onCheckedChange={() =>
                        handleFilterChange("tags", "Italian")
                      }
                    />
                    <label htmlFor="tags-italian">Italian</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="tags-mexican"
                      checked={filters.tags.includes("Mexican")}
                      onCheckedChange={() =>
                        handleFilterChange("tags", "Mexican")
                      }
                    />
                    <label htmlFor="tags-mexican">Mexican</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="tags-vegetarian"
                      checked={filters.tags.includes("Vegetarian")}
                      onCheckedChange={() =>
                        handleFilterChange("tags", "Vegetarian")
                      }
                    />
                    <label htmlFor="tags-vegetarian">Vegetarian</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Difficulty</h3>
                <div className="grid gap-2">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="difficulty-easy"
                      checked={filters.difficulty.includes("Easy")}
                      onCheckedChange={() =>
                        handleFilterChange("difficulty", "Easy")
                      }
                    />
                    <label htmlFor="difficulty-easy">Easy</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="difficulty-Medium"
                      checked={filters.difficulty.includes("Medium")}
                      onCheckedChange={() =>
                        handleFilterChange("difficulty", "Medium")
                      }
                    />
                    <label htmlFor="difficulty-Medium">Medium</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="difficulty-advanced"
                      checked={filters.difficulty.includes("Advanced")}
                      onCheckedChange={() =>
                        handleFilterChange("difficulty", "Advanced")
                      }
                    />
                    <label htmlFor="difficulty-advanced">Advanced</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Meal Type</h3>
                <div className="grid gap-2">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="meal-type-breakfast"
                      checked={filters.mealType.includes("Breakfast")}
                      onCheckedChange={() =>
                        handleFilterChange("mealType", "Breakfast")
                      }
                    />
                    <label htmlFor="meal-type-breakfast">Breakfast</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="meal-type-lunch"
                      checked={filters.mealType.includes("Lunch")}
                      onCheckedChange={() =>
                        handleFilterChange("mealType", "Lunch")
                      }
                    />
                    <label htmlFor="meal-type-lunch">Lunch</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="meal-type-dinner"
                      checked={filters.mealType.includes("Dinner")}
                      onCheckedChange={() =>
                        handleFilterChange("mealType", "Dinner")
                      }
                    />
                    <label htmlFor="meal-type-dinner">Dinner</label>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentRecipes.length > 0 ? (
                currentRecipes.map((recipe) => (
                  <Recipe key={recipe.id} id={recipe.id} >

                  <div key={recipe.id} className="bg-card p-4 rounded-md shadow-md">
                    <img src={recipe.image} alt={recipe.name}/>
                    <h3 className="text-xl font-semibold">{recipe.name}</h3>
                    <p className="text-sm text-muted-foreground">{recipe.description}</p>
                  </div>
                  </Recipe>
                ))
              ) : (
                <p className="text-center text-gray-500">No recipes found.</p>
              )}
            </div>
            <div className="flex justify-center mt-8">
              <nav className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`px-4 py-2 rounded-md ${
                      index + 1 === currentPage
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
