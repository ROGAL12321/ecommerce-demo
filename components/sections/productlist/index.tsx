import ProductItem from '@/components/sections/productitem'
import { Products } from '@/pages/api/products'

import styles from './productlist.module.css'

type ProductListProps = {
  products: Products
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles.container}>
      {products.length > 0 && (
        <ul className={styles.list}>
          {products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                image={product.image}
                isBestseller={product.isBestseller}
                category={product.category}
                title={product.title}
                currency={product.currency}
                price={product.price}
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}
