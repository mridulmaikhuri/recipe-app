import {
  Card,
  CardContent,  
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";


async function fetchRecipes() {
  try {
    const apiResponse = await fetch('https://dummyjson.com/recipes');
    const result = await apiResponse.json();
    return result?.recipes;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Home() {
  const recipeList = await fetchRecipes();
  return (
    <div>
      <h1 className="font-bold text-center text-5xl mt-5 mb-3 font-mono">Recipe List</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-1">
        {
          recipeList && recipeList.length > 0 ?
            (
              recipeList.map((recipe) => (
                <Link 
                  href={`/recipe/${recipe.id}`}
                  className='border border-gray-400 bg-slate-200'
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl text-center">{recipe.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image 
                        src={recipe.image}
                        alt="recipe image"
                        width={500}
                        height={600}
                        className="w-full"
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between text-2xl">
                      <div>{recipe.cuisine}</div>
                      <div className=""><span className="text-yellow-500">&#9733;</span> {recipe.rating}</div>
                    </CardFooter>
                  </Card>
                </Link>
              ))
            )
            : null
        }
      </div>
    </div>
  );
}
