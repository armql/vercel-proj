import QA from "./QA.tsx";
import producebg from "../../../assets/produce-hero.webp";

export default function Hero() {
    return (
        <section className="relative flex h-[600px] w-screen flex-col items-center justify-end border-black bg-[#f1f9dc] px-24 sm:h-screen lg:px-44">
            <div className="flex h-full w-full flex-col items-center justify-end gap-12">
                <p className="text-wide w-full text-center font-mono text-lg uppercase text-green-950 dark:font-bold">
                    Our produce
                </p>
                <h1 className="text-center font-mono text-6xl font-extrabold text-green-950">
                    Defying laws of flavour
                </h1>
                <QA />
                <img
                    src={producebg}
                    alt="hero img"
                    className=""
                />
            </div>
        </section>
    );
}
