import Link from 'next/link'

import {
  appName,
  appStoreUrl,
  basePath
} from '@/components/limpia-fotos/app-info'
import { AppPageLayout } from '@/components/limpia-fotos/AppPageLayout'
import styles from '@/components/limpia-fotos/limpia-fotos.module.css'

const features = [
  {
    title: 'Memes y fotos recibidas',
    text: 'Encuentra lo que llegó por WhatsApp, redes o descargas y que ya no necesitas.'
  },
  {
    title: 'Capturas y videos pesados',
    text: 'Revisa tus capturas de la más vieja a la más nueva y tus videos del más pesado al más ligero.'
  },
  {
    title: 'Desliza para decidir',
    text: 'Izquierda para borrar, derecha para conservar. Lo borrado se puede recuperar por 30 días.'
  }
]

export default function LimpiaFotosPage() {
  return (
    <AppPageLayout
      title={`${appName} · Libera espacio en tu iPhone`}
      description='Borra memes, capturas y videos pesados en minutos, deslizando. Todo se analiza en tu iPhone.'
      path={basePath}
    >
      <section className={styles.hero}>
        <img
          src={`${basePath}/icon.png`}
          alt={`Ícono de ${appName}`}
          width={120}
          height={120}
        />
        <h1>{appName}</h1>
        <p className={styles.tagline}>
          Libera espacio en tu iPhone borrando memes, capturas y videos pesados
          en minutos, deslizando como en una app de citas.
        </p>

        {appStoreUrl ? (
          <a className={styles.button} href={appStoreUrl}>
            Descargar en el App Store
          </a>
        ) : (
          <span className={styles.buttonDisabled}>
            Próximamente en el App Store
          </span>
        )}
      </section>

      <section className={styles.features}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>

      <div className={styles.callout}>
        <p>
          <strong>Privada por diseño.</strong> Todo se analiza en tu iPhone. Sin
          cuentas, servidores ni anuncios, y no recopila ningún dato.
        </p>
      </div>

      <p className={styles.muted}>
        Requiere iPhone con iOS 18 o posterior. ¿Dudas? Visita{' '}
        <Link href={`${basePath}/soporte`}>Soporte</Link> o lee la{' '}
        <Link href={`${basePath}/privacidad`}>Política de privacidad</Link>.
      </p>
    </AppPageLayout>
  )
}
