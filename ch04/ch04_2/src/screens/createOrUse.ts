const cache: Record<string, any> = {}; //Record<키_타입, 값_타입>

export const createOrUse = <T>(key: string, callback: () => T) => {
  if (!cache[key]) cache[key] = callback();
  return cache[key];
};
