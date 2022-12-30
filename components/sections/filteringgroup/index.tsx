import Option from '@/components/atoms/option'

import styles from './filteringgroup.module.css'

type FilteringGroupProps = {
  title: 'Category' | 'Price Range'
  options: string[]
  isLast?: boolean
}

export default function FilteringGroup({ title, options, isLast }: FilteringGroupProps) {
  return (
    <div className={`${styles.filterGroup} ${isLast ? styles.filterGroupLast : ''}`}>
      <h3>{title}</h3>
      {options.length > 0 && (
        <ul>
          {options.map((option) => (
            <li key={option}>
              <Option label={option} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
