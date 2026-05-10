import { useEffect, useRef, useState } from "react";

type AnimationDataStructure = {
  id: number | string;
  name: string;
  jsx: React.ReactNode;
};

type TAnimationInterval<T> = {
  data: T[];
  interval?: number;
};
export function useAnimationInterval<T extends AnimationDataStructure>({
  data,
  interval = 3000,
}: TAnimationInterval<T>) {
  const [currentActive, setCurrentActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setCurrentActive((prev) => (prev + 1) % data?.length);
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [data?.length, interval]);
  return {
    currentActive,
    renderActiveElement: data[currentActive],
    setCurrentActive,
  };
}
