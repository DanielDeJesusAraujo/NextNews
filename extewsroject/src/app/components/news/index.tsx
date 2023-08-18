/* eslint-disable @next/next/no-img-element */
import IApiResponse from './interfaces/Inews'

const getNews = async (): Promise<IApiResponse> => {
  const news = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-07-18&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY || '994d196c82444a109712477579373004'}`)
  const data = await news.json()
  return data
}

export default async function Home() {
  const news = await getNews()
  console.log(`>>> Results: ${news.articles.length} | Total Results: ${news.totalResults}***********************`);
  return (
    <main>
      {news.articles.map((article) => (
        <article key={article.url}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} width={500} height={300} />
          <p>{article.description}</p>
        </article>
      ))}
    </main>
  )
}
