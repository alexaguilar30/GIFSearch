import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory) ) return;
        console.log(newCategory);
        setCategories([ newCategory, ...categories]);
    }

  return (
    <>

        <h2>Searcher of Gifs</h2>

        <AddCategory 
            onNewCategory={(value) => onAddCategory(value)}
        />

        { categories.map( category => (
                <GifGrid 
                key={ category } 
                category={ category } />
            )
            ) }
        <p></p>

            <footer className="footer">
                <>Made by: Alex Aguilar</>
            </footer>


    </> 
    )
}
