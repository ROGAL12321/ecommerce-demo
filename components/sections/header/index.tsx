import Image from 'next/image'
import Link from 'next/link'

import shopCartIcon from '@/assets/icons/shop-cart.png'

import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Ecommerce Demo</h1>
      </Link>
      <Image
        src={shopCartIcon}
        alt="Shop Cart"
        className={styles.shopIcon}
        width={32}
        height={32}
      />
    </header>
  )
}
