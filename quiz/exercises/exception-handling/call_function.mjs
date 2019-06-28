export function callFunction(func) {
  const result = func();
  return {
    success: result,
  };      
}