import type * as React from 'react'
import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { PageHead } from '@/components/PageHead'
import * as config from '@/lib/config'

import { appName, basePath } from './app-info'
import styles from './limpia-fotos.module.css'

const site = {
  name: config.name,
  domain: config.domain,
  rootNotionPageId: config.rootNotionPageId,
  rootNotionSpaceId: config.rootNotionSpaceId,
  description: config.description
}

const navLinks = [
  { href: basePath, label: 'Inicio' },
  { href: `${basePath}/soporte`, label: 'Soporte' },
  { href: `${basePath}/privacidad`, label: 'Privacidad' }
]

export function AppPageLayout({
  title,
  description,
  path,
  children
}: {
  title: string
  description: string
  path: string
  children: React.ReactNode
}) {
  return (
    <>
      <PageHead
        site={site}
        title={title}
        description={description}
        url={`https://${config.domain}${path}`}
        image={`https://${config.domain}${basePath}/icon.png`}
      />

      <div className={styles.page}>
        <header className={styles.header}>
          <Link href={basePath} className={styles.brand}>
            <img src={`${basePath}/icon.png`} alt='' width={28} height={28} />
            <span>{appName}</span>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={link.href === path ? styles.active : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className={styles.main}>{children}</main>

        <p className={styles.byline}>
          Una app de <Link href='/'>{config.author}</Link> · Hecha en México 🇲🇽
        </p>

        <Footer />
      </div>
    </>
  )
}
