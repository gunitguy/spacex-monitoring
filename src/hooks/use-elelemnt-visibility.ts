import { useEffect, useState, useRef } from "react";

const useElementVisibility = () => {
  const ref = useRef<Nullable<HTMLElement>>(null);
  const [isVisible, setVisible] = useState(false);

  const handleScroll = () => {
    if (ref && ref.current) {
      const { top } = ref.current.getBoundingClientRect();

      const isElementVisible = top >= 0 && top <= window.innerHeight;

      setVisible(isElementVisible);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return { isVisible, ref };
};

export default useElementVisibility;
