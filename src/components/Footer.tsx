import { Link } from "react-router-dom";

import useInterpolator from "../hooks/useInterpolator";
import {Fragment, useEffect, useState} from "react";
import Apple from "../assets/icon/Apple";
import Linkedin from "../assets/icon/Linkedin";
import Meta from "../assets/icon/Meta";
import Spotify from "../assets/icon/Spotify";
import {MapPin} from "@phosphor-icons/react";
import {BackgroundIllustrations} from "../features/footer/__footer.ts";

const shortcut_data = [
    { id: 1, name: "Produce", to: "produce" },
    { id: 2, name: "About us", to: "about" },
    { id: 3, name: "Recipes", to: "recipes" },
    { id: 4, name: "Stories", to: "stories" },
    { id: 5, name: "Find in Store", to: "find" },
    { id: 6, name: "Contact", to: "contact" },
    { id: 7, name: "Leadership", to: "team" },
    { id: 8, name: "Terms of Service", to: "tos" },
    { id: 9, name: "Privacy Policy", to: "privacy" },
    { id: 10, name: "Support", to: "support" },
];

export default function Footer() {
    const [scrollY, setScrollY] = useState(0);
    const [pageHeight, setPageHeight] = useState(0);
    const { value } = useInterpolator({
        x: scrollY,
        up: pageHeight - 400,
        down: pageHeight,
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY >= pageHeight - 500) {
                setScrollY(currentScrollY);
            }
        };

        const handleResize = () => {
            const newPageHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            setPageHeight(newPageHeight);
            if (window.scrollY >= newPageHeight - 500) {
                setScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [value, pageHeight]);

    return (
        <Fragment>
        <footer
            className={`relative -z-10 h-full w-footer transition duration-100 ease-in-out bg-blue-600`}
            style={{
                transform: `translateY(-${Math.round(value)}%)`,
            }}
        >
            <div className="mx-auto h-full max-w-7xl px-6 py-12 text-white">
                <div className="z-20 flex w-full flex-col items-center justify-evenly gap-12 sm:flex-row sm:gap-0">
                    <div className="flex w-full flex-col gap-6 sm:w-72">
                        <p className="text-3xl font-medium">Get the latest and tastiest</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="rounded-md border-2 bg-transparent px-2 py-2.5 text-sm placeholder:text-blue-300 focus:border-white focus:outline-none focus:placeholder:text-white"
                            />

                            <p className="text-xs font-light">
                                Fresh updates on product launches, farm events, and so much
                                more.
                            </p>
                        </div>
                        <div className="flex flex-row justify-around gap-4 text-white">
                            <Apple fill="white" />
                            <Linkedin fill="white" />
                            <Meta fill="white" />
                            <Spotify fill="white" />
                        </div>
                    </div>
                    <div className="flex w-full flex-row justify-around gap-12 text-base font-medium sm:w-fit">
                        <div className="flex w-full flex-row justify-center gap-12 sm:w-fit">
                            <div className="w-f flex flex-col gap-2">
                                {shortcut_data.slice(0, 6).map((link) => (
                                    <Link key={link.id} to={link.to} className="group">
                                        {link.name}
                                        <div className="h-0.5 w-0 transition-all duration-500 group-hover:w-full group-hover:bg-white"></div>
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                {shortcut_data.slice(6, 10).map((link) => (
                                    <Link key={link.id} to={link.to} className="group">
                                        {link.name}
                                        <div className="h-0.5 w-0 transition-all duration-500 group-hover:w-full group-hover:bg-white"></div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex hidden w-full flex-col gap-2 sm:w-40 lg:block">
                            <p>Office</p>
                            <p className="text-xs font-light">
                                151 W 26th St 12th Floor, New York NY 10001
                            </p>
                            <div className="mt-2 flex items-center justify-start gap-1">
                                <MapPin size={24} />
                                <p className="flex rounded-lg text-sm font-light text-white">
                                    View on maps
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundIllustrations />
        </footer>
        </Fragment>
    );
}
