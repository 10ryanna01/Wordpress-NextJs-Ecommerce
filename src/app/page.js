import Image from "next/image";
import Header from "./components/Header";
import gameCard from "../../public/images/World_of_Warcraft_Trading_Card_Game.png";

import styles from "@styles/page.module.scss";

import gstyles from "@styles/index.scss";

import products from "@data/products.json";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <main className={styles.main}>
        <div className="FSC__product-grid">
          {products.map((product, _idx) => {
            return (
              <div key={product.id} className="FSC__card">
                <div className="FSC__card">
                  <h3 className="FSC__card__title">{product.title}</h3>
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="FSC__card__img"
                    // height width set to intrinsic image values
                    width={520}
                    height={706}
                    sizes="360px"
                  />

                  <p className="FSC__card__desc"> {product.description} </p>
                  <p className="FSC__card__price">${product.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore starter templates for Next.js.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
