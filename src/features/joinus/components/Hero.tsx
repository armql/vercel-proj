import useOnLoad from "../../../hooks/useOnLoad.ts";

function Hero() {
    const { loading } = useOnLoad(500);
    return (
        <div className="w-screen bg-[#E5EEFD] relative h-screen flex justify-center items-center py-24 px-4">
            <div className="flex flex-col gap-12 w-[750px] z-10 items-center justify-center">
                <span className="font-medium text-center text-green-950 font-mono uppercase">
                    Join Us
                </span>
                <h1 className="text-7xl font-libre font-extrabold text-green-950 font-condensed text-center">
                    What you do here changes everything
                </h1>
                <p className="text-2xl text-center text-green-950">
                    At Bowery, we’re making wildly delicious food more accessible to everyone. We’re always looking for
                    hungry minds to grow (and eat) with us.
                </p>
                <button
                    type="button"
                    className="group relative overflow-hidden rounded-lg bg-blue-600 z-10 px-4 py-3 font-mono text-sm uppercase tracking-wide text-white xl:px-6 xl:py-4"
                >
                    See open roles
                    <div
                        className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full bg-blue-700
    transition-all duration-500 group-hover:h-full`}
                    />
                </button>
            </div>
            <div
                className={`md:block hidden absolute overflow-hidden p-2 left-80 bottom-60 w-20 h-20 bg-pink-400 rounded-bl-full rounded-r-full transition-all duration-500 ${loading ? "scale-90" : ""}`}>
                <img
                    src="https://bowery.co/wp-content/uploads/2023/04/port3.webp"
                    alt="profile"
                    className="w-full h-full rounded-full object-cover"/>
            </div>
            <div className={`md:block hidden absolute left-40 w-28 h-28 bg-red-400 rounded-br-full rounded-l-full overflow-hidden p-2 transition-all duration-500 ${loading ? "scale-90" : ""}`}>
                <img
                    src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
                    alt="profile"
                    className="w-full h-full rounded-full object-cover"/>
            </div>
            <div
                className={`md:block hidden absolute top-80 right-80 w-32 h-32 bg-blue-400 rounded-tl-full rounded-r-full overflow-hidden p-2 transition-all duration-500 ${loading ? "scale-90" : ""}`}>
                <img
                    src="https://bowery.co/wp-content/uploads/2023/04/port1.webp"
                    alt="profile"
                    className="w-full h-full rounded-full object-cover"/>
            </div>
            <div
                className={`md:block hidden absolute right-40 bottom-80 w-20 h-20 bg-yellow-400 rounded-tr-full rounded-l-full overflow-hidden p-2 transition-all duration-500 ${loading ? "scale-90" : ""}`}>
                <img
                    src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944"
                    alt="profile"
                    className="w-full h-full rounded-full object-cover"
                />
            </div>
            <div className={`absolute bottom-40 right-96 transition-all duration-500 ${loading ? "scale-110" : ""}`}>
                <img src="https://bowery.co/wp-content/themes/bowery-farming/assets/images/icon-star02.svg"
                     alt="star"/>
            </div>
            <div className={`absolute bottom-96 left-96 transition-all duration-500 ${loading ? "scale-110" : ""}`}>
                <img src="https://bowery.co/wp-content/themes/bowery-farming/assets/images/icon-star03.svg"
                     alt="star"/>
            </div>
            <div
                className={`absolute overflow-hidden p-2 bottom-[50%] left-96 w-10 h-10 -rotate-45 bg-blue-600 rounded-tl-full rounded-r-full transition-all duration-500 ${loading ? "scale-110" : ""}`}/>
            <div
                className={`absolute overflow-hidden p-2 right-80 bottom-60 w-10 h-10 -rotate-45 bg-pink-400 rounded-tl-full rounded-r-full transition-all duration-500 ${loading ? "scale-110" : ""}`}/>
        </div>
    );
}

export default Hero;