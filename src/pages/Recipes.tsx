import {Hero, DisplayRecipes} from "../features/recipes/__recipes.ts";
import {Fragment} from "react";

export default function Recipes() {
    return (
        <Fragment>
            <title>Bowery | Recipes</title>
            <Hero/>
            <DisplayRecipes/>
            <div className="h-24 bg-[#f1f9dc] rounded-b-[64px]"></div>
        </Fragment>
    );
}
