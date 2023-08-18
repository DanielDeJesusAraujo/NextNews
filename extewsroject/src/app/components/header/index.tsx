'use client'
import React from 'react'
import styles from './page.module.css'

function Header({handleNews}: {handleNews: ({ target: { value, name } }: { target: { value: string; name: string; }; }) => void}) {
  const newsCategories = [
    "Politic",
    "Technology",
    "Sports",
    "Entertainment",
    "Health",
    "Science",
    "Business",
    "General",
  ];

  const countrys = [
    "us",
    "br",
    "ru",
    "gb",
    "es",
    "ca",
    "in",
    "au",
    "de",
    "fr",
    "it",
    "jp",
    "cn",
    "ar",
    "tr",
    "nl",
    "mx",
  ]

  return (
    <header className={styles.header}>
      <h1>NextNews</h1>
      <section>
        <select name="country" onChange={handleNews}>
          {countrys.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        <select name="category" onChange={handleNews}>
          {newsCategories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </section>
      <nav></nav>
    </header>
  )
}

export default Header