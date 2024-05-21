import Object from "../components/3d-object/Object";
import { Greetings } from "../components/greetings/Greetings";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 relative">
      <Object />
      <Greetings />
    </div>
  );
};
