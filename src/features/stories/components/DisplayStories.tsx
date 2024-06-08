import {supabase} from "../../../client/supa.ts";
import Tab from "./Tab.tsx";
import {useQuery} from "react-query";
import CardStories from "./CardStories";
import {Fragment, useState} from "react";
import {Spinner, SpinnerGap} from "@phosphor-icons/react";
import {zFilters} from "../stores/zFilters.ts";

export default function DisplayStories() {
    const [patriarch, setPatriarch] = useState(9);
    const [ancestor, setAncestor] = useState(0);
    const {searchTerm, selectedTab} = zFilters();

    const fetchNews = async (_patriarch: number, _ancestor: number) => {
        let query = supabase.from('news').select(`*`).range(_ancestor, _patriarch);

        if (searchTerm) {
            query = query.ilike('title', `%${searchTerm}%`);
        }

        // Use selectedTab in your query to filter data
        if (selectedTab) {
            query = query.eq('category_id', selectedTab);
        }

        let {data: news, error} = await query;

        if (error) throw error;

        return news
    };

    const fetchCategories = async () => {
        let {data: categories, error} = await supabase
            .from('news_categories')
            .select('*')

        if (error) throw error;
        return categories;
    }

    const {
        data: news,
        isLoading: isLoadingRecipes,
    } = useQuery(['news', patriarch, selectedTab, searchTerm], () => fetchNews(patriarch, ancestor), {
        keepPreviousData: true,
        retryDelay: 10000,
    });

    const {
        data: categories,
        isLoading: isLoadingCategories,
    } = useQuery('categories', fetchCategories);

    return (
        <section className="flex bg-[#E5EEFD] w-screen h-full flex-col gap-8 px-2 py-12 lg:px-12 xl:px-48">
            <Tab categories={categories}/>
            {isLoadingCategories || isLoadingRecipes ? (
                <div className="w-full h-full items-center flex justify-center py-48">
                    <SpinnerGap size={48} className="animate-spin text-green-600"/>
                </div>
            ) : (
                <Fragment>
                    <div
                        className="grid h-fit w-full xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-12 lg:px-0 px-12 items-center justify-center">
                        {news && news.map((recipe, index) => {
                            const category = categories && categories.find(category => category.id === recipe.category_id);
                            const heights = ['300px', '250px', '350px', '250px', '300px', '300px', '350px', '300px', '300px'];
                            const widths = ['140px', '140px', '140px', '140px', '140px', '140px', '140px', '140px', '140px'];
                            return (
                                <CardStories recipe={{...recipe, category: category?.name}}
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
                            {isLoadingRecipes ? (
                                <Spinner size={24} className="text-blue-950 animate-spin"/>
                            ) : "More News"}
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
