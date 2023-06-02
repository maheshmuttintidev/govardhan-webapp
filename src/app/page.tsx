import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import birthDayPic from "../../public/group_persons_with_hat.jpg";
import CubicBox from "@/components/cubic-box";
import BirthdayChips from "@/components/birthday-chips";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BirthdayChips />
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Govardhan Kodimindla is a &nbsp;
            <code className={styles.code}>
              Family Man and Cool and Funny Guy
            </code>
          </p>
        </div>

        <div className={styles.center}>
          <CubicBox />
        </div>

        <div className={styles.fontMono}>
          <p className={styles.center}>
            2nd June 2023 Came - Wish You a Happy Birth Day. May God bless you
            and protect you with Abundant Love and Grace.
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src={birthDayPic}
            alt="Birth Day Friends Logo"
            width={300}
            priority
          />
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/birthday_friends_with_decorations.avif"
            alt="Birth Day Friends Logo"
            width={300}
            height={150}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Photos <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find My Uploaded Pictures.</p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Videos <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Explore Videos Uploaded.</p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>To Connect with me.</p>
          </a>
        </div>
      </main>
    </>
  );
}
