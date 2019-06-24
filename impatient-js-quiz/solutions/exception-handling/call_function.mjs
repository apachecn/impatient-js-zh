export function callFunction(func) {
  try {
    const result = func();
    return {
      success: result,
    };      
  }
  catch (err) {
    return {
      failure: err,
    };
  }
}