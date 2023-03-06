import React from 'react';
import styles from "../styles/bio.module.css";
import { ContactForm, FooterBanner } from '../componets';
import { client } from '../Lib/client';

export default function bio({products, bannerData}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          
          <div className={styles.right}>
            <h2>Christina Maria, here!</h2>
            <h3>Thank you for visiting my page!</h3>
            <h3>I am an artist and creative based in Chicago, Illinois.</h3>
            <p> 
              My fine art draws inspiration from my own, ever-changing mental health journey.
              You can usually spot a few strong themes running through my work, such as; 
              Love of self, Heartache, Feminine vs. Masculine energies, Meditation, and Movement. 
              I strive to create safe, inspirational spaces within my work and wherever I exist. 
              I hope that these themes of the human experience speak to your journey in a specific 
              and meaningful way. 
            </p>        
            <p>
              As a full-time Vintage Store Manager, I am constantly working with unique, aged pieces. 
              This experience has grown my love for up-cycling and repurposing. There is tons of beauty 
              floating around this world - and so much of it  undiscovered! Most of the frames I use are 
              found, vintage and antique,  giving the new, one-of-a-kind look a classic touch. 
            </p>
          </div>
          <div className={styles.left}>
            <div className={styles.bannerImg}></div>
          </div>
      </main>
      <ContactForm />
      <footer className={styles.footer}></footer>
    </div>
  );
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
