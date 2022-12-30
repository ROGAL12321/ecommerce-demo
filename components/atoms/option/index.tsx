import styles from './option.module.css'

type OptionProps = {
  label: string
}

export default function Option({ label }: OptionProps) {
  return (
    <label className={styles.option}>
      <input type="checkbox" className={styles.checkbox} />
      {label}
    </label>
  )
}
