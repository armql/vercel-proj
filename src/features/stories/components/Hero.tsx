export default function Hero() {

    return (
        <section className="flex h-[800px] bg-[#E5EEFD] w-full items-center justify-center px-12 lg:p-24 xl:px-48">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
                <img
                    src="https://bowery.co/wp-content/uploads/2024/05/Webby_Logo-1-e1716997398235.jpg"
                    alt="Crostini Closeup"
                    className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex h-[300px] w-[600px] items-center justify-start rounded-lg bg-blue-700 px-12 py-24">
                        <div className="flex flex-col justify-between gap-8">
                            <h1 className="font-mono uppercase text-white">
                                Featured Stories
                            </h1>
                            <h1 className="font-condensed font-libre text-5xl text-white">
                                We won a Webby!
                            </h1>
                            <p className="text-white font-libre">
                                Food & Drink Website and Mobile Sites - Winner!
                            </p>
                            <button className="w-full text-start text-white">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
