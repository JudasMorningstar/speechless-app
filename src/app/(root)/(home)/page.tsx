import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const now = new Date();
  const currentDate = now.toLocaleDateString("en-ZA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentTime = now.toLocaleTimeString("en-ZA", {
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <section className="flex size-full flex-col gap-10">
      <div className="h-[303px] w-full rounded-2xl bg-hero bg-cover ">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism  py-2 text-center text-base font-normal max-w-[270px] rounded">
            Upcoming Meeting at: 10:00 AM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-7xl font-extrabold text-4xl ">
              {currentTime}
            </h1>
            <p className="lg:text-2xl text-lg font-medium text-[#d1e8f0]">
              {currentDate}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
