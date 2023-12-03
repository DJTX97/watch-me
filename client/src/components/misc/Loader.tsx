import loader from "/assets/videos/loading_wheel.gif";
import { useOverflow } from "../../hooks/useOverflow";

export default function Loader() {
  useOverflow(false);

  return (
    <div className="flex flex-col bg-banner bg-center bg-fixed bg-cover bg-no-repeat h-screen items-center gap-14 text-9xl text-white">
      <img src={loader} alt="" className="mt-20 scale-75" />
    </div>
  );
}
