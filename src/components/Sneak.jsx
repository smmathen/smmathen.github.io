import { TypeAnimation } from "react-type-animation";

const Sneak = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-broadcast-bg text-broadcast-crimson">
      <div className="max-w-[80%] mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-broadcast-white mb-4">
          500 - Internal Server Error
        </h1>
        <p className="text-broadcast-slate text-lg">
          <TypeAnimation
            sequence={[
              "Something went wrong. Please try again later",
              1000,
              "Just Kidding ;)",
            ]}
            speed={90}
            preRenderFirstString={true}
          />
        </p>
      </div>
    </div>
  );
};

export default Sneak;
