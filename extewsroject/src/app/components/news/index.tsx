/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './page.module.css'
import IApiResponse from '../../interfaces/Inews'
import Header from '../header';
import { useEffect, useState } from 'react';




export default function News() {
  const [news, setnews] = useState<IApiResponse>()
  const [filters, setfilters] = useState({
    country: 'us',
    category: 'General',
  })

  useEffect(() => {
    console.log(news)
  }, [news])
  
  
  useEffect(() => {
    const get = async () => {
      const res = await getNews(filters)
      setnews(res)
    }
    get()
  }, [filters])
  
  useEffect(() => {
    const get = async () => {
      const res = await getNews({
        country: 'us',
        category: 'General',
      })
      setnews(res)
    }
    get()
  }, [])

  const getNews = async ({ country, category }: { country?: string, category?: string }): Promise<IApiResponse> => {
    const news = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${'e996e4fad4042c43cacd7a7657986feb'}`)
    const data = await news.json();
    console.log(data)
    return data;
  }
  
  const handleNews = (
    { target: { value, name } }: { target: { value: string, name: string } }
  ) => {
    setfilters({ ...filters, [name]: value })
  }

  return (
    <main className={styles.news}>
      <Header handleNews={handleNews} />
      {(news && news.articles) ? (news.articles.map((article) => (
        <article className={styles.article} key={article.url}>
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.title} width={500} height={300} />
          <p>{article.description}</p>
        </article>
      ))): <p>Loading...</p>}
    </main>
  )
}
