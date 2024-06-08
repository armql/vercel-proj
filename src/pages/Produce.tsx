import {Fragment} from "react";
import {Hero, DisplayProduct, Recipe, Sponsors} from "../features/produce/__produce.ts";
import {ArticleDefault, ArticleMobile} from "../features/home/__home.ts";
import useResizer from "../hooks/useResizer.ts";

function Produce() {
    const { size: mobile } = useResizer(768);

    return (
        <Fragment>
            <title>Bowery | Produce</title>
            <Hero/>
            <DisplayProduct/>
            <Recipe/>
            {!mobile ? <ArticleDefault/> : <ArticleMobile/>}
            <Sponsors/>
            <div className="h-24 bg-[#E5EEFD] rounded-b-[64px]"></div>
        </Fragment>
    );
}

export default Produce;