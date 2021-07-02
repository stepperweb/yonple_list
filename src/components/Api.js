export const getLists = async (page, type) => {
  const rootApi = "https://recruit-api.yonple.com/recruit";
  const accessToken = process.env.REACT_APP_ACCESSTOKEN;

  const lists = await (
    await fetch(`${rootApi}/${accessToken}/${type}-posts?page=${page}`)
  ).json();
  console.log(lists);
  return lists;
};
