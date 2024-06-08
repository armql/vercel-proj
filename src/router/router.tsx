import {createBrowserRouter, Navigate} from "react-router-dom";
import {About, DefaultLayout, Home, Produce, Recipes, Stories} from "./pages.ts";
import JoinUs from "../pages/JoinUs.tsx";
import Suspense from "../layouts/core/CSuspense";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/home"/>,
            },
            {
                path: "home",
                element: (
                    <Suspense>
                        <Home/>
                    </Suspense>
                ),
            },
            {
                path: "produce",
                element: (
                    <Suspense>
                        <Produce/>
                    </Suspense>
                ),
            },
            {
                path: "about",
                element: (
                    <Suspense>
                        <About/>
                    </Suspense>
                ),
            },
            {
                path: "recipes",
                element: (
                    <Suspense>
                        <Recipes/>
                    </Suspense>
                ),
            },
            {
                path: "stories",
                element: (
                    <Suspense>
                        <Stories/>
                    </Suspense>
                ),
            },
            {
                path: "join-us",
                element: (
                    <Suspense>
                        <JoinUs/>
                    </Suspense>
                ),
            },
        ],
    },
])