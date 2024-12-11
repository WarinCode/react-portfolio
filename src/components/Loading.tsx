import { ReactElement } from "react";
import ReactLoading from "react-loading";

const Loading = (): ReactElement => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <ReactLoading
        type="cylon"
        width={200}
        height={200}
        color="#f0f0f0"
        className="mx-auto"
      />
    </div>
  );
};

export default Loading;
