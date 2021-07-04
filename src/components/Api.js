export const getLists = async (page) => {
  const rootApi = "https://recruit-api.yonple.com/recruit";
  const accessToken = process.env.REACT_APP_ACCESSTOKEN;

  const lists = await (
    await fetch(`${rootApi}/${accessToken}/a-posts?page=${page}`)
  ).json();
  return lists;
};
