import Heading from "../components/Heading";
import { portfolioData } from "../constants";
import PortfolioCard from "../components/PortfolioCard";

export default function Portfolio() {
  return (
    <main>
      <Heading title="Portfolio" />
      <div className="pb-20 px-6 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {portfolioData.map((data, i) => {
            return (
              <div key={data.title}>
                <PortfolioCard
                  key={i}
                  title={data.title}
                  imageUrl={data.imgUrl}
                  alt={data.alt}
                  description={data.description}
                  repo={data.repo}
                  tags={data.tags}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
