import Dropdown from "../../../components/Dropdown.tsx";
import Search from "../../../components/Search.tsx";
import {ingredient_options, time_options} from "../data/options.ts";

function Tab({categories}: { categories: any }) {
    const recipe_options = categories && categories.map(category => ({id: category.id, value: category.name}));

    return (
        <div className="flex md:flex-row flex-col gap-12 items-center">
            <Dropdown options={recipe_options} placeholder="By Category" type="category"/>
            <Dropdown options={ingredient_options} placeholder="By Ingredient" type="ingredient"/>
            <Dropdown options={time_options} placeholder="By Time" type="timespan"/>
            <Search/>
        </div>
    );
}

export default Tab;