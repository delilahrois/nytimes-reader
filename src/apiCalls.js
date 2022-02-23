export const getHomeData = async () => {
  const resp = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`);
  if(resp.ok) {
    const respJson = await resp.json();
    return respJson;
  }
}

