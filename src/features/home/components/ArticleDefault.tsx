import LazyImage from "../../../components/LazyImage";
import hq01 from "../../../assets/articles/farm-01.webp";
import hq02 from "../../../assets/articles/farm-02.webp";
import hq03 from "../../../assets/articles/farm-03.webp";
import {Plus} from "@phosphor-icons/react";

export default function ArticleDefault() {
    return (
        <article className="xl:px-82 flex w-full flex-col items-start justify-between gap-4 bg-stone-100 px-2 py-48 lg:px-32">
            <div className="flex flex-col gap-2 text-start">
                <div className="flex flex-row items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-green-400"></div>
                    <p className="text-lg font-medium uppercase text-green-900">
                        Our Boweries
                    </p>
                </div>
            </div>
            <div className="grid h-full w-full grid-rows-2 items-center">
                <div className="flex w-full flex-row justify-around">
                    <div className="flex w-96 flex-col gap-4">
                        <h1 className="font-libre text-5xl font-extrabold tracking-tight text-green-950">
                            More with less? <span>Oh yes.</span>
                        </h1>
                        <p className="font-libre text-[14px] font-normal leading-relaxed tracking-wide text-green-950">
                            Inspired by the Dutch word for “farm,” our{" "}
                            <span className="font-medium text-blue-600">Boweries</span> WHAT
                            EVEN IS A BOWERY? A nod to the Bowery, a historic NYC neighborhood
                            historically known for connecting the city to fresh farm produce
                            in the 1600s. are indoor smart farms teeming with technology that
                            helps us bring local foods closer to the communities we’re apart
                            of. Our Boweries provide 100x more produce per square foot of land
                            than traditional farms with the same footprint—with 100% renewable
                            energy and 90% less water.
                        </p>
                    </div>

                    <div className="group relative h-[500px] w-96 cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all">
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black from-10% to-transparent to-80% opacity-20 transition-all duration-300 group-hover:opacity-30"></div>
                        <div className="absolute bottom-0 left-0 right-0 flex w-full items-center justify-center py-8 text-white">
                            <p className="font-libre text-3xl">Bethlehem Bowery</p>
                        </div>
                        <div className="absolute left-0 right-0 top-0 flex w-full items-center justify-between p-8 text-white">
                            <p className="font-libre uppercase tracking-wider">
                                Pennsylvania
                            </p>
                            <figure className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 bg-opacity-40 backdrop-blur-sm group-hover:bg-blue-400 group-hover:bg-opacity-80 group-hover:backdrop-blur-sm">
                                <Plus size={24} />
                            </figure>
                        </div>
                        <LazyImage src={hq03} alt="bethlehem grow room" />
                    </div>
                </div>
                <div className="flex w-full flex-row items-end justify-around">
                    <div className="group relative h-[500px] w-96 cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all">
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black from-10% to-transparent to-80% opacity-20 transition-all duration-300 group-hover:opacity-30"></div>
                        <div className="absolute bottom-0 left-0 right-0 flex w-full items-center justify-center py-8 text-white">
                            <p className="font-libre text-3xl">Kearny R&D Bowery</p>
                        </div>
                        <div className="absolute left-0 right-0 top-0 flex w-full items-center justify-between p-8 text-white">
                            <p className="font-libre uppercase tracking-wider">New Jersey</p>
                            <figure className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 bg-opacity-40 backdrop-blur-sm group-hover:bg-blue-400 group-hover:bg-opacity-80 group-hover:backdrop-blur-sm">
                                <Plus size={24} />
                            </figure>
                        </div>
                        <LazyImage src={hq01} alt="Kearny R&D headquarters farm" />
                    </div>
                    <div className="group relative h-[350px] w-96 cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all lg:w-[400px] xl:w-[600px]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black from-10% to-transparent to-80% opacity-20 transition-all duration-300 group-hover:opacity-30"></div>
                        <div className="absolute bottom-0 left-0 right-0 flex w-full items-center justify-center py-8 text-white">
                            <p className="font-libre text-3xl">Nottingham Bowery</p>
                        </div>
                        <div className="absolute left-0 right-0 top-0 flex w-full items-center justify-between p-8 text-white">
                            <p className="font-libre uppercase tracking-wider">Maryland</p>
                            <figure className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 bg-opacity-40 backdrop-blur-sm group-hover:bg-blue-400 group-hover:bg-opacity-80 group-hover:backdrop-blur-sm">
                                <Plus size={24} />
                            </figure>
                        </div>
                        <LazyImage src={hq02} alt="Nottingham headquarters farm" />
                    </div>
                </div>
            </div>
        </article>
    );
}
