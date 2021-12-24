import styles from '@/styles/Home.module.css'
import { Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  const dynamicLinkColor = useColorModeValue('blue.600', 'blue.400')

  return (
    <footer className={styles.footer}>
      <Text color={dynamicLinkColor} fontSize="sm">
        <a
          href="https://instagram.com/itspapoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with by fadhli - Copyright All Right Reserved
        </a>
      </Text>
    </footer>
  )
}
