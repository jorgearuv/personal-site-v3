import Link from 'next/link'

import {
  appName,
  basePath,
  supportEmail,
  supportMailto
} from '@/components/limpia-fotos/app-info'
import { AppPageLayout } from '@/components/limpia-fotos/AppPageLayout'
import styles from '@/components/limpia-fotos/limpia-fotos.module.css'

export default function LimpiaFotosSupportPage() {
  return (
    <AppPageLayout
      title={`Soporte · ${appName}`}
      description={`Ayuda y contacto para ${appName}.`}
      path={`${basePath}/soporte`}
    >
      <h1>Soporte</h1>
      <p>
        ¿Tienes un problema, una duda o una idea para {appName}? Escríbeme y te
        respondo personalmente.
      </p>

      <div className={styles.callout}>
        <p>
          <strong>Correo:</strong> <a href={supportMailto}>{supportEmail}</a>
        </p>
        <p className={styles.muted}>
          Respondo en un máximo de 48 horas hábiles. Si es un error, incluye el
          modelo de tu iPhone y tu versión de iOS (Ajustes → General →
          Información).
        </p>
      </div>

      <a className={styles.button} href={supportMailto}>
        Escribir a soporte
      </a>

      <h2>Preguntas frecuentes</h2>
      <div className={styles.faq}>
        <details>
          <summary>¿Cómo recupero una foto que borré por error?</summary>
          <p>
            Todo lo que borras con {appName} va a la papelera de Fotos y se
            puede recuperar durante 30 días:
          </p>
          <ol>
            <li>Abre la app Fotos.</li>
            <li>
              Entra a <strong>Eliminados recientemente</strong> (en la sección
              Utilidades).
            </li>
            <li>
              Selecciona la foto y toca <strong>Recuperar</strong>.
            </li>
          </ol>
        </details>

        <details>
          <summary>¿Mis fotos salen de mi teléfono?</summary>
          <p>
            No. {appName} analiza tu galería directamente en tu iPhone. No hay
            cuentas ni servidores, y la app no envía tus fotos ni ningún otro
            dato a ninguna parte.
          </p>
        </details>

        <details>
          <summary>¿Por qué la app pide acceso a mis fotos?</summary>
          <p>
            Lo necesita para encontrar memes, capturas y videos pesados, y para
            borrar lo que tú elijas. iOS siempre te pide confirmar antes de
            borrar.
          </p>
        </details>

        <details>
          <summary>No aparecen todas mis fotos</summary>
          <p>
            Probablemente le diste acceso solo a algunas fotos. Para que{' '}
            {appName} revise toda tu galería, ve a{' '}
            <strong>Ajustes → Apps → {appName} → Fotos</strong> y elige{' '}
            <strong>Acceso completo</strong>.
          </p>
        </details>

        <details>
          <summary>
            ¿Cómo sabe la app qué es un meme o una foto recibida?
          </summary>
          <p>
            Busca imágenes que no tomó tu cámara: las que llegan por WhatsApp o
            se descargan casi nunca traen ubicación y suelen tener menor
            resolución. Puede equivocarse con algunas fotos, por eso nada se
            borra sin que tú lo decidas.
          </p>
        </details>

        <details>
          <summary>Conservé una foto por error, ¿cómo la vuelvo a ver?</summary>
          <p>
            En la pantalla principal toca el menú <strong>⋯</strong> y elige{' '}
            <strong>Volver a mostrar las que conservé</strong>.
          </p>
        </details>

        <details>
          <summary>Borré fotos pero mi iPhone sigue igual de lleno</summary>
          <p>
            El espacio se libera por completo cuando las fotos salen de{' '}
            <strong>Eliminados recientemente</strong>: después de 30 días, o
            antes si las borras desde ahí. Si usas iCloud con “Optimizar
            almacenamiento”, el tamaño que muestra la app es el del archivo
            original.
          </p>
        </details>

        <details>
          <summary>¿Qué necesito para usar {appName}?</summary>
          <p>Un iPhone con iOS 18 o posterior.</p>
        </details>
      </div>

      <p className={styles.muted}>
        Consulta también la{' '}
        <Link href={`${basePath}/privacidad`}>Política de privacidad</Link>.
      </p>
    </AppPageLayout>
  )
}
