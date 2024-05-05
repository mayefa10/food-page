import Hero from '../components/layout/Hero';
import HomeMenu from '../components/layout/HomeMenu';
import SectionHeader from '../components/layout/SectionHeader';

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeader subHeader={'Our story'} mainHeader={'About us'} />
        <div className=" text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            We are a pizzeria with more than twenty years in the food market, we
            specialize in creating the best pizzas with the best ingredients
            brought exclusively from organic and planet-friendly farms.
          </p>
          <p>
            Our pizzas have the original taste of beautiful Italy as we use old
            pizzas from the Tuscany region, which makes our pizzas very special
            in their taste and aroma.
          </p>
          <p>
            We are a pizzeria with more than twenty years in the food market, we
            specialize in creating the best pizzas with the best ingredients
            brought exclusively from organic and planet-friendly farms.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={'Contact us'} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:332399229">
            46 232 456 345
          </a>
        </div>
      </section>
    </>
  );
}
