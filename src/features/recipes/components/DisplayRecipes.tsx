import {supabase} from "../../../client/supa.ts";
import Tab from "./Tab.tsx";
import {useQuery} from "react-query";
import CardRecipe from "./CardRecipe.tsx";
import {Fragment, useState} from "react";
import {zFilters} from "../store/zFilters.ts";
import {Spinner, SpinnerGap} from "@phosphor-icons/react";

export default function DisplayRecipes() {
    const [patriarch, setPatriarch] = useState(9);
    const [ancestor, setAncestor] = useState(0);
    const {selectedCategories, selectedTime, selectedIngredients, searchTerm} = zFilters();
    const fetchRecipes = async (_patriarch: number, _ancestor: number) => {
        let query = supabase.from('recipes').select(`
    *,
    ingredients (
        *
    )`).range(_ancestor, _patriarch);

        if (selectedCategories.length > 0) {
            query = query.in('category_id', selectedCategories);
        }

        if (selectedTime.length > 0) {
            query = query.in('timespan', selectedTime);
        }

        if (searchTerm) {
            query = query.ilike('title', `%${searchTerm}%`);
        }

        // Fetch all recipes first
        let {data: recipes, error} = await query;

        if (error) throw error;

        if (selectedIngredients.length > 0) {
            recipes = recipes.filter(recipe => {
                return recipe.ingredients.some(ingredient => selectedIngredients.includes(ingredient.name));
            });
        }

        return recipes
    };

    const fetchCategories = async () => {
        let {data: categories, error} = await supabase
            .from('recipes_categories')
            .select('*')

        if (error) throw error;
        return categories;
    }

    const {
        data: recipes,
        isLoading: isLoadingRecipes,
    } = useQuery(['recipes', patriarch, selectedCategories, searchTerm, selectedTime, selectedIngredients], () => fetchRecipes(patriarch, ancestor), {
        keepPreviousData: true,
        retryDelay: 10000,
    });
    const {
        data: categories,
        isLoading: isLoadingCategories,
    } = useQuery('recipes_categories', fetchCategories);

    return (
        <section className="flex bg-[#f1f9dc] w-screen h-full flex-col gap-8 px-2 py-12 lg:px-12 xl:px-48">
            {isLoadingCategories || isLoadingRecipes ? (
                <div className="w-full h-full items-center flex justify-center py-48">
                    <SpinnerGap size={48} className="animate-spin text-green-600"/>
                </div>
            ) : (
                <Fragment>
                    <Tab categories={categories}/>
                    <div className="grid h-fit w-full xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-12 lg:px-0 px-12 items-center justify-center">
                        {recipes && recipes.map((recipe, index) => {
                            const category = categories && categories.find(category => category.id === recipe.category_id);
                            const heights = ['300px', '250px', '350px', '250px', '300px', '300px', '350px', '300px', '300px'];
                            const widths = ['140px', '140px', '140px', '140px', '140px', '140px', '140px', '140px', '140px'];
                            return (
                                <CardRecipe recipe={{...recipe, category: category?.name}}
                                            height={heights[index % heights.length]}
                                            width={widths[index % widths.length]}/>
                            );
                        })}
                    </div>
                    <div className="flex items-center justify-center py-12">
                        <button
                            type="button"
                            onClick={() => {
                                setPatriarch(patriarch + 9);
                            }}
                            className="group relative overflow-hidden rounded-lg bg-blue-600 z-10 px-4 py-3 font-mono text-sm uppercase tracking-wide text-white xl:px-6 xl:py-4"
                        >
                            {isLoadingRecipes ?  (
                                <Spinner size={24} className="text-blue-950 animate-spin"/>
                            ) : "Get Shopping"}
                            <div
                                className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full bg-blue-700
    transition-all duration-500 group-hover:h-full`}
                            />
                        </button>
                    </div>
                </Fragment>
            )}
        </section>
    );
}
