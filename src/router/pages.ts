import {lazy} from "react";

import DefaultLayout from "../layouts/DefaultLayout.tsx";

const Home = lazy(() => import("../pages/Home"));
const Produce = lazy(() => import("../pages/Produce"));
const About = lazy(() => import("../pages/About"));
const Recipes = lazy(() => import("../pages/Recipes"));
const Stories = lazy(() => import("../pages/Stories"));
export {DefaultLayout, Home, Produce, About, Recipes, Stories}