import { useEffect, useRef, useState } from "react";

type AnimationDataStructure = {
  id: number | string;
  name: string;
  jsx: React.ReactNode;
};

type TAnimationInterval<T> = {
  data: T[];
};
export function useAnimationInterval<T extends AnimationDataStructure>({
  data,
}: TAnimationInterval<T>) {
  const [currentActive, setCurrentActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setCurrentActive((prev) => (prev + 1) % data?.length);
      }, 2500);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [data?.length]);
  return {
    currentActive,
    renderActiveElement: data[currentActive],
    setCurrentActive,
  };
}
