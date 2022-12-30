import FilteringGroup from '@/components/sections/filteringgroup'

import styles from './productfiltering.module.css'

type ProductFilteringProps = {
  categories: ProductCategories
}

export default function ProductFiltering({ categories }: ProductFilteringProps) {
  return (
    <div className={styles.filterContainer}>
      {categories.length > 0 && <FilteringGroup title="Category" options={categories} />}
      <FilteringGroup title="Price Range" options={[]} isLast />
    </div>
  )
}
