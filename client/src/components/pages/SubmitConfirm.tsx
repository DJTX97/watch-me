import { useOverflow } from "../../hooks/useOverflow";

export default function SubmitConfirm() {
  useOverflow(false);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="text-6xl md:text-8xl lg:text-8xl mt-32 select-none text-center text-white">
        Your message was sent successfully!
      </div>
    </div>
  );
}
