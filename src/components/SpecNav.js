import { useRouter } from 'next/router';
import styles from '../styles/nav.module.css';
import Link from 'next/link';

function SpecNav() {
  const router = useRouter();

  return (
    <div className="flex place-content-between rounded-[12px] bg-[#EEE] px-4 h-[35px] md:h-[50px] items-center">
      <Link href='/news'>
      <div
        className={`${styles.SpecNavName} py-2 ${
          router.pathname === '/news' ? styles.SpecNavNameActive : ''
        }`}
      >
        NEWS
      </div>
      </Link>
      <Link href='/learn'>
      <div
        className={`${styles.SpecNavName} py-2 ${
          router.pathname === '/learn' ? styles.SpecNavNameActive : ''
        }`}
      >
        LEARN
      </div>
      </Link>
      <Link href='/podcasts'>
      <div
        className={`${styles.SpecNavName} py-2 ${
          router.pathname === '/podcasts' ? styles.SpecNavNameActive : ''
        }`}
      >
        PODCASTS
      </div>
      </Link>
      <Link href='/dapp-store'>
      <div
        className={`${styles.SpecNavName} py-2 ${
          router.pathname === '/dapp-store' ? styles.SpecNavNameActive : ''
        }`}
      >
        DAPP STORE
      </div>
      </Link>
    </div>
  );
}

export default SpecNav;
