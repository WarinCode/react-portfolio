import { ReactElement } from "react";

const Hero = (): ReactElement => {
  return (
    <div className="bg-[url('assets/imgs/city.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen">
      <div className="bg-gradient-to-t from-zinc-950 to-transparent w-full h-screen opacity-95 z-10 flex flex-col justify-center p-20">
        <div className="test">
        <p className="typewriter text-slate-50">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          ducimus voluptate. Porro reprehenderit nemo obcaecati sequi dolor
          exercitationem, ut assumenda accusamus in, aliquam veniam, modi id
          fugiat ea neque! Ipsa!
        </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
