import {Fragment} from "react";
import {DisplayStories, Hero} from "../features/stories/__stories.ts";

export default function Stories() {
    return (
        <Fragment>
            <title>Bowery | Stories</title>
            <Hero/>
            <DisplayStories/>
            <div className="h-24 bg-[#E5EEFD] rounded-b-[64px]"></div>
        </Fragment>
    );
}
