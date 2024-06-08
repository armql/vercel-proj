import strawberry from "../../../assets/footer/strawberry.svg";
import spinach from "../../../assets/footer/spinach.svg";
import useOnObserve from "../../../hooks/useOnObserve.ts";
export default function Hero() {
    const { observeRef: videoRef, observe } = useOnObserve();

    return (
        <section className="items-center justify-center h-full w-full bg-[#E5EEFD] px-4 py-48 lg:px-24 xl:px-48 flex flex-col gap-12">
            <div className="flex flex-col items-center justify-center gap-12">
                    <p className="w-full text-center text-sm font-medium uppercase text-green-900">
                        About us
                    </p>
                <div className=" flex flex-col items-center justify-center gap-8">
                    <h1 className="font-condensed text-center font-libre text-7xl text-green-950">
                        Wherever food is needed, we can grow it.
                    </h1>
                    <p className="text-center font-libre text-xl">
                        We&rsquo;re not afraid of big, delicious plans. At Bowery,
                        we&rsquo;re helping secure the future of food by growing smart
                        produce that&rsquo;s more reliable and less harmful—wherever
                        it&rsquo;s needed.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div
                    className={`relative transition-all  duration-500 h-[200px] w-[350px] sm:w-[550px] md:w-[700px] lg:w-[800px] xl:w-[1100px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] border-black ${observe ? "scale-110" : ""}`}
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        src={"https://bowery.co/wp-content/uploads/2023/04/vision-video.mp4"}
                        className={`h-full w-full object-cover brightness-75 contrast-150 `}
                    />
                    <div className="absolute -left-40 top-0 -z-10 sm:-left-32">
                        <img
                            src={strawberry}
                            alt=""
                            className="h-52 w-52 sm:block hidden sm:h-30 sm:w-30 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-48 xl:w-48"
                        />
                    </div>
                    <div className="absolute -right-20 bottom-0 -z-10 sm:-right-24">
                        <img
                            src={spinach}
                            alt=""
                            className="h-52 w-52 sm:block hidden sm:h-30 sm:w-30 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-48 xl:w-48"
                        />
                    </div>
                </div>
            </div>
            <p className="flex flex-col gap-2 text-center text-2xl font-normal text-green-950">
                If we want to secure tomorrow, we need a smarter way. <br/>
                <p className="">Starting today.</p>
            </p>
        </section>
    );
}
