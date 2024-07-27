import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function fetchRecipeDetails(recipeId) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
    const result = await apiResponse.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
}

async function RecipePage({ params }) {
  const recipeId = params.details;
  const recipe = await fetchRecipeDetails(recipeId);

  return (
    <div className='font-serif bg-blue-100'>
      <Link 
        href={'/'} 
        className = 'text-4xl hover:bg-blue-500 hover:text-white hover:rounded-xl m-5'>
        Home
      </Link>
      <hr className='h-0.5 bg-black'/>
      <h1 className='text-center text-5xl font-extrabold mt-5'>
        {recipe.name}
      </h1>
      <div className='grid grid-cols-2 mt-5'>
        <Image
          src={recipe.image}
          width={500}
          height={500}
          className='w-[45vw] h-[70vh] ml-5'
        />
        <div>
          <h3 className='text-4xl mb-5 font-bold ml-3'>Ingredients</h3>
          <ul className='list-disc text-3xl'>
            {
              recipe.ingredients && recipe.ingredients.length > 0 ?  
              recipe.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>
              }) : null
            }
          </ul>
        </div>
      </div>
      <div className='ml-5'>
        <h3 className='text-4xl mt-5 mb-3 font-bold ml-3'>Instructions</h3>
        <ol className='list-decimal text-3xl ml-5'>
          {
            recipe.instructions && recipe.instructions.length > 0 ?  
            recipe.instructions.map((instruction) => {
              return <li>{instruction}</li>
            }) : null
          }
        </ol>
      </div>
    </div>
  )
}

export default RecipePage