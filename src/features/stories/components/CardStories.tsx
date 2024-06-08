interface CardRecipe {
    recipe: {
        id: number;
        title: string;
        img: string;ß
        category: string;
    };
    height: string;
    width: string;
}

function CardStories({recipe, height, width}: CardRecipe) {
    return (
        <div
            className={`group h-[${height}] w-[${width}] my-6 cursor-pointer sm:w-[180px] md:w-[240px] lg:w-[300px] xl:w-[400px]`}>
            <div className="relative">
                <img
                    src={recipe.img}
                    alt={recipe.title}
                    className={`h-[${height}] w-full rounded-xl object-cover`}
                />
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 rounded-xl transition-all duration-700 group-hover:bg-black group-hover:bg-opacity-20"/>
            </div>
            <div className="flex h-[80px] flex-col items-center justify-start gap-1 px-4 pt-0.5">
                <h1 className="font-libre text-xl font-medium text-start w-full text-green-950 sm:text-base md:text-base lg:text-lg xl:text-xl">
                    {recipe.title}
                </h1>
                <p className="w-full font-mono text-[10px] uppercase tracking-wide sm:text-xs md:text-xs lg:text-sm xl:text-sm">
                    {recipe.category}
                </p>
            </div>
        </div>
    );
};

export default CardStories;