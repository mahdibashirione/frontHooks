import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "FrontHooks";
  }, []);

  return <span>Home</span>;
};

export default HomePage;
