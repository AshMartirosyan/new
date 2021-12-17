export const ERROR = "ERROR";

export const errorAction = (error) => ({
  type: ERROR,
  error: error,
});
