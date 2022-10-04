import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  // const quotes = props.quote

  const [quote, setQuotes] = useState(props.quote[0])
  console.log(quote)

  const newQuote = async () => {
    setQuotes(props.quote[Math.floor(Math.random()*50)])
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Quote below
        {/* {quotes.map(quote => */}
        {
          <div id="quote-box" key={quote.a}>
            <p id='text'>{quote.q}</p>
            <p id='author'>{quote.a}</p>
            <div>
              <button onClick={newQuote} id='new-quote'>New quote</button>
              {/* <a href=`twitter.com/intent/tweet` id="tweet-quote">tweet quote</a> */}
              <a href={`https://twitter.com/intent/tweet?text=${quote.q}-${quote.a}`}
               id="tweet-quote" target="_blank">tweet quote</a>
            </div>
          </div>
        }

      </main>

      <footer className={styles.footer}>
        <p>developed by praise oyegoke</p>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://zenquotes.io/api/quotes`);
  const quote = await res.json();

  return {
    props: {
      quote
    }
  }
}
