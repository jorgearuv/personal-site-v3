import Link from 'next/link'

import {
  appName,
  basePath,
  supportEmail,
  supportMailto
} from '@/components/limpia-fotos/app-info'
import { AppPageLayout } from '@/components/limpia-fotos/AppPageLayout'
import styles from '@/components/limpia-fotos/limpia-fotos.module.css'
import * as config from '@/lib/config'

const lastUpdated = '13 de octubre de 2026'

export default function LimpiaFotosPrivacyPage() {
  return (
    <AppPageLayout
      title={`Política de privacidad · ${appName}`}
      description={`Cómo ${appName} trata tu información: no recopila ningún dato.`}
      path={`${basePath}/privacidad`}
    >
      <h1>Política de privacidad</h1>
      <p className={styles.muted}>Última actualización: {lastUpdated}</p>

      <div className={styles.callout}>
        <p>
          <strong>En resumen:</strong> {appName} no recopila, guarda en
          servidores ni comparte ningún dato personal. Tus fotos nunca salen de
          tu iPhone por causa de la app.
        </p>
      </div>

      <p>
        Esta política explica cómo la app {appName} (“la app”), desarrollada por{' '}
        {config.author}, trata tu información.
      </p>

      <h2>Información que recopilamos</h2>
      <p>
        Ninguna. La app no tiene cuentas de usuario, no usa servidores propios,
        no incluye publicidad ni herramientas de analítica o rastreo, y no
        integra servicios de terceros que recopilen datos.
      </p>

      <h2>Acceso a tus fotos</h2>
      <p>
        La app pide acceso a tu galería únicamente para mostrarte tus fotos y
        videos, clasificarlos (por ejemplo, capturas de pantalla o videos
        pesados) y borrar los que tú elijas. Todo este análisis ocurre en tu
        iPhone.
      </p>
      <ul>
        <li>La app no sube, copia ni envía tus fotos a ninguna parte.</li>
        <li>
          Antes de borrar, iOS siempre te pide confirmación, y lo borrado queda
          30 días en “Eliminados recientemente”.
        </li>
        <li>
          Si tus fotos están guardadas en iCloud, iOS puede descargarlas desde
          iCloud para mostrártelas. Esa conexión ocurre entre tu iPhone y Apple,
          según la política de privacidad de Apple.
        </li>
        <li>
          Puedes cambiar o retirar el permiso en cualquier momento en Ajustes →
          Apps → {appName} → Fotos.
        </li>
      </ul>

      <h2>Información guardada en tu dispositivo</h2>
      <p>
        Para funcionar, la app guarda solo en tu iPhone: la lista de fotos que
        decidiste conservar (para no volver a mostrártelas) y el total de
        espacio que has liberado. Esta información no sale de tu dispositivo y
        se elimina al borrar la app.
      </p>

      <h2>Compras</h2>
      <p>
        Si en el futuro la app ofrece compras dentro de la app, Apple las
        procesa. No recibimos tus datos de pago.
      </p>

      <h2>Menores de edad</h2>
      <p>
        La app no recopila datos de ninguna persona, incluidos menores de edad.
      </p>

      <h2>Cambios a esta política</h2>
      <p>
        Si esta política cambia, publicaremos la nueva versión en esta página
        con su fecha de actualización.
      </p>

      <h2>Contacto</h2>
      <p>
        Si tienes preguntas sobre esta política o sobre tus datos, escribe a{' '}
        <a href={supportMailto}>{supportEmail}</a> o visita{' '}
        <Link href={`${basePath}/soporte`}>Soporte</Link>.
      </p>

      <p className={styles.muted}>
        Esta política aplica a la app {appName}. El sitio web {config.domain}{' '}
        usa herramientas de analítica web para contar visitas.
      </p>
    </AppPageLayout>
  )
}
