/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './page.module.css'
import IApiResponse from '../../interfaces/Inews'
import Header from '../header';
import { useEffect, useState } from 'react';


const getNews = async ({country, category}: {country?: string, category?: string}): Promise<IApiResponse> => {
  const news = await fetch(`https://newsapi.org/v2/top-headlines?country=${country || 'us'}&category=${category || 'General'}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
  const data = await news.json()
  return data
}



export default function News() {
  const [filters, setfilters] = useState({
    country: 'us',
    category: 'General',
  })
  const [news, setnews] = useState<IApiResponse>()

  useEffect(() => {
    const get = async() => {
      const res = await getNews(filters)
      setnews(res)
    }
    get()
  }, [filters])

  useEffect(() => {
    console.log(filters);
    
  }, [filters])
  

  const handleNews = (
    {target: {value, name}}: {target: {value: string, name: string}}
    ) => {
    setfilters({...filters, [name]: value})
  }


  if (news?.totalResults) {
    return (
      <main className={styles.news}>
        <Header handleNews={handleNews}/>
        {news.articles.map((article) => (
          <article className={styles.article} key={article.url}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} width={500} height={300} />
            <p>{article.description}</p>
          </article>
        ))}
      </main>
    )
  }
  return (
    <main></main>
  )
}
