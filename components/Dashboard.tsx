import Filters from "./Filters";
import Description from "./RecomendedDesc";

const Dashboard = () => {
  return (
    <section className="bg-bgPrimary w-full p-[20px] md:p-[32px] xl:p-[20px] rounded-[30px] md:flex md:gap-[32px] xl:gap-[20px] xl:flex-col xl:max-w-[353px]">
      <Filters />
      <Description />
    </section>
  );
};

export default Dashboard;
