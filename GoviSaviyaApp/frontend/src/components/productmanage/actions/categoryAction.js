export const getAllCategories = () => {
  return async (dispatch) => {
    const res = await res.get("/get");
    console.log(res);
  };
};
