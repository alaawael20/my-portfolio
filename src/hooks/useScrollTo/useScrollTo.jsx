import { useCallback } from "react";

const useScrollTo = () => {
  const scrollTo = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return scrollTo;
};

export default useScrollTo;
