import Link from 'next/link'
import styles from './Navigation.module.css'

const navLinks = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  }
]

export default function Navigation () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {navLinks.map(link => <li key={link.route}><Link href={link.route}>{link.label}</Link></li>)}
        </ul>
      </nav>
    </header>
  )
}
