

const url = `http://newsapi.org/v2/everything?q=technology+reactjs&sortBy=publishedAt&apiKey=afa5ef8b4fa647e38a06ffadad410a4e`;

async function getNews() {
  let result = await fetch(url).then((response = response.json()));

  return 'Test';
}

export default getNews;