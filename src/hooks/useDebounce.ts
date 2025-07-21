type Callback<T extends any[]> = (...args: T) => void;

export function useDebounce<T extends any[]>(callback: Callback<T>, delay: number): (...args: T) => void {
  let interval: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(interval);

    interval = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
