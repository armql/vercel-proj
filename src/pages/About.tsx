import {Newsletter} from "../features/home/__home.ts";
import {CTA, Team, Hero, Careers, Brands} from "../features/about/__about.ts";
import {Fragment} from "react";

export default function About() {
    return (
        <Fragment>
            <title>Bowery | About</title>
            <Hero/>
            <CTA/>
            <Team/>
            <Brands/>
            <Newsletter/>
            <Careers/>
            <div className="h-24 bg-stone-100 rounded-b-[64px]"></div>
        </Fragment>
    );
}
