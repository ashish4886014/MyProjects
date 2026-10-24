import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../Components/RecipeCard';

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [total, setTotal] = useState(0);
    const [meg, setMeg] = useState("")
    const [loding, setLoding] = useState(true);
    const [searchQuery, setSearchQuery] = useState("")



    async function fetchRecipes(skipCount = 0, query) {
        
        try {

            let url = `https://dummyjson.com/recipes?limit=6&skip=${skipCount}`
            if (query) {
                url = `https://dummyjson.com/recipes/search?limit=6&skip=${skipCount}&q=${query}`
            }
            const { data } = await axios.get(url);

            //!queriy params? lagne par ata hai

            if (skipCount === 0) {
                setRecipes(data.recipes);
            } else {
                setRecipes((prev) => [...prev, ...data.recipes]);
            }
            setTotal(data.total)
            setLoding(false)
        }
        catch (error) {
            setMeg("Please Try again Letter.")
        }
    }
    useEffect(() => {
        fetchRecipes(0);
    }, [])


    function handleSearch(e) {
        e.preventDefault();
        // console.log(e.target);
        const form = new FormData(e.target)
        let query = form.get("query").trim();
        setSearchQuery(query)
        fetchRecipes(0, query)
    }
    function loadMore(e) {
        e.preventDefault();
        fetchRecipes(recipes.length, searchQuery)
    }
    if (loding) {
        return <p className='text-center py-6 text-muted'>Loding...</p>
    }
    if (meg) {
        return (
            <main className='max-w-6xl mx-auto px-4 py-8'>
                <p className='text-accent text-center'>{meg}</p>
            </main>
        )
    }
    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto mb-8">
                <input
                    name="query"
                    type="text"
                    placeholder="Search recipes..."
                    className="flex-1 border border-border rounded px-3 py-2 bg-card text-text outline-none focus:border-accent"
                />
                <button type="submit" className="bg-accent hover:bg-accent-hover text-white rounded px-4 py-2 font-medium">
                    Search
                </button>
            </form>


            { }
            { }
            { }
            { }
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>


            {recipes.length < total &&
                (
                    <div className="text-center mt-8">
                        <button
                            type="button"
                            onClick={loadMore}
                            className="bg-accent hover:bg-accent-hover text-white rounded px-6 py-2 font-medium">
                            Load More
                        </button>
                    </div>
                )


            }
            { }
            { }
            { }
            { }
        </main>
    );


}
export default Home;