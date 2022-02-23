export const getData = async (selection) => {
  const resp = await fetch(`https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=${process.env.REACT_APP_API_KEY}`);
  if(resp.ok) {
    const respJson = await resp.json();
    return respJson;
  }
}

