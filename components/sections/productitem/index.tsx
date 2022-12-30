import Image from 'next/image'

import { Products } from '@/pages/api/products'
import Button from '@/components/atoms/button'

import styles from './productitem.module.css'

export default function ProductItem({
  image,
  isBestseller,
  category,
  title,
  currency,
  price,
}: Omit<ArrayElement<Products>, 'id'>) {
  return (
    <li className={styles.listItem}>
      <div className={styles.photoContainer}>
        {isBestseller && <div className={styles.note}>Best Seller</div>}
        <Image src={image} alt="Product Photo" width={280} />
        <Button>Add to Cart</Button>
      </div>
      <p className={styles.productInfo}>{title}</p>
      <p className={`${styles.productInfo} ${styles.productHeader}`}>{category}</p>
      <p className={styles.productInfo}>
        {currency}
        {price}
      </p>
    </li>
  )
}
