import { LazyLoadImage } from "react-lazy-load-image-component";
import step01 from "../../../assets/steps/step01.svg";
import step02 from "../../../assets/steps/step02.svg";
import step03 from "../../../assets/steps/step03.svg";
import step04 from "../../../assets/steps/step04.svg";

type Article = {
  title: string;
  number: string;
  colorTheme: "lgreen" | "green" | "amber" | "blue" | "rose";
  src: string;
  alt: string;
  text: string;
};

type ColorThemes = {
  [K in Article["colorTheme"]]: string;
};

export default function InfoSection() {
  const articles: Article[] = [
    {
      title: "Pick ’Em",
      number: "01",
      colorTheme: "lgreen",
      src: step01,
      alt: "Magic leaf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta modi cum maiores vitae ipsa aliquid hic veritatis quam error. Nesciunt ratione in repudiandae obcaecati adipisci quo culpa reprehenderit eaque?",
    },
    {
      title: "Stack ’Em",
      number: "02",
      colorTheme: "amber",
      src: step02,
      alt: "Carrot",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta modi cum maiores vitae ipsa aliquid hic veritatis quam error. Nesciunt ratione in repudiandae obcaecati adipisci quo culpa reprehenderit eaque?",
    },
    {
      title: "Track ’Em",
      number: "03",
      colorTheme: "rose",
      src: step03,
      alt: "Strawberry",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta modi cum maiores vitae ipsa aliquid hic veritatis quam error. Nesciunt ratione in repudiandae obcaecati adipisci quo culpa reprehenderit eaque?",
    },
    {
      title: "Pack ’Em",
      number: "04",
      colorTheme: "green",
      src: step04,
      alt: "Split illustration of earth",
      text: " Once the crops are at peak perfection, BoweryOS sends our modern farmers our favorite signal; it's harvest time. Our greens are harvested at the exact right moment and shipped to local shelves in as little as 24 hours.",
    },
  ];

  const colorThemes: ColorThemes = {
    lgreen: "bg-green-600 text-green-300",
    green: "bg-green-800 text-green-300",
    amber: "bg-amber-800 text-amber-300",
    blue: "bg-blue-800 text-blue-300",
    rose: "bg-rose-800 text-rose-300",
  };

  return (
    <section className="bg-stone-100 relative w-screen h-screen overflow-hidden">
      <div className="lg:px-12 px-4 py-8 flex justify-center items-center flex-col w-full h-full">
        {articles.map((article) => (
          <article
            key={article.number}
            className={`flex flex-col justify-between group w-full h-40 ${
              colorThemes[article.colorTheme]
            } rounded-3xl transition-all duration-500 hover:h-full py-10 px-8`}
          >
            <div className="justify-between transition-all duration-500 flex items-start">
              <h1 className="font-extrabold font-libre tracking-tight text-white text-5xl">
                {article.title}
              </h1>
              <p
                className={`font-normal 
              } font-libre tracking-tight text-white text-4xl`}
              >
                {article.number}
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-row items-end justify-between">
              <p
                className={`text-lg font-montserrat tracking-wider font-medium w-96 ${
                  colorThemes[article.colorTheme]
                } `}
              >
                {article.text}
              </p>
              <figure>
                <LazyLoadImage
                  src={article.src}
                  alt={article.alt}
                  className="w-full h-full"
                />
              </figure>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
