import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-green-500">Hello Gsap!</h1>
    </div>
  );
};

export default App;
