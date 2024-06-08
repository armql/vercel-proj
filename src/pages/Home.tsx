import {Fragment} from "react";
import {
    ArticleDefault, ArticleMobile,
    Hero,
    InfoSection,
    ProcessDefault,
    ProcessMobile,
    ProduceDefault,
    ProduceMobile,
    Newsletter,
} from "../features/home/__home.ts";
import useResizer from "../hooks/useResizer.ts";
import {recipe_data} from "../features/recipes/data/recipe_data.ts";

function Home() {
    const { size: mobile } = useResizer(768);

    const recipejson = JSON.stringify(recipe_data);
    console.log(recipejson);
    return (
        <Fragment>
            <title>Bowery | Home</title>
            <Hero/>
            {!mobile ? <ProduceDefault/> : <ProduceMobile/>}
            {!mobile ? <ProcessDefault/> : <ProcessMobile/>}
            <InfoSection/>
            {!mobile ? <ArticleDefault/> : <ArticleMobile/>}
            <Newsletter/>
            <div className="h-24 bg-stone-100 rounded-b-[64px]"></div>
        </Fragment>
    );
}

export default Home;