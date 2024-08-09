import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useEffect, useState } from "react";

  export default function Recipe({children, id}) {
    const [recipe, setRecipe ] = useState()
    console.log(id);
    useEffect(() => {

        const getRecipe =async() => {
            const res = await fetch(`https://dummyjson.com/recipes/${id}`)
            const data = await res.json();
            setRecipe(data)
        }

        getRecipe();
    } , [])

    console.log(recipe);
    
    return (
        <Dialog>
  <DialogTrigger>{children}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="flex justify-between">
        <p>

        {recipe?.name}
        </p>
        <p className="mr-10">Prep Time: {recipe?.prepTimeMinutes}min</p>
        </DialogTitle>
      
    </DialogHeader>
    <div>

    <h2 className="font-semibold mb-1">Ingredients</h2>
    <ul className="list-disc ml-5">

    {recipe?.ingredients?.map((i) => (
        <li>{i}</li>
    ))}
    </ul>
    </div>


    <div>
    <h2 className="font-semibold mb-1">Instructions</h2>
    <ol className="list-decimal ml-5">

    {recipe?.instructions?.map((i) => (
        <li>{i}</li>
    ))}
    </ol>
    </div>
  </DialogContent>
</Dialog>

    )
  }