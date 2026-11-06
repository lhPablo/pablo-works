# pablo-works

Mi portafolio personal: experiencia, proyectos, perfil y competencias, en español e inglés.

**[pablolh.dev](https://pablolh.dev)**

## Funcionalidades

- **Bilingüe (ES/EN)** con el routing i18n de Astro (`/es/`, `/en/`)
- **Idioma automático** — la raíz redirige según el `Accept-Language` del navegador
- **Modo claro y oscuro** — se recuerda la preferencia del visitante
- **Proyectos con mockups** de portátil, tablet y móvil (vídeo en el portátil)
- **CV descargable** en el idioma de la página
- **Secciones configurables** — se reordenan o se quitan desde un único fichero
- **Sitio estático** sin JavaScript de framework en cliente

## Stack

| Capa       | Tecnologías                                         |
| ---------- | --------------------------------------------------- |
| Framework  | Astro 7 (salida estática)                           |
| Lenguaje   | TypeScript                                          |
| UI         | Tailwind CSS 4, Lucide icons                        |
| Fuentes    | Inter y JetBrains Mono (Astro Fonts, Google)        |
| Imágenes   | Optimización de Astro con sharp                     |
| Hosting    | Cloudflare Workers (assets estáticos + worker)      |
| Calidad    | ESLint (astro, jsx-a11y, simple-import-sort), `astro check` |

## Desarrollo local

Requisitos: Node ≥ 26 y pnpm 11.6.0 (fijado en `packageManager`, se puede activar con `corepack enable`).

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Comandos

| Comando         | Descripción                                   |
| --------------- | --------------------------------------------- |
| `pnpm dev`      | Servidor de desarrollo                        |
| `pnpm build`    | Build de producción en `./dist/`              |
| `pnpm preview`  | Sirve el build localmente                     |
| `pnpm lint`     | ESLint                                        |
| `pnpm check`    | Comprobación de tipos con `astro check`       |
| `pnpm validate` | `lint` + `check` + `build`, antes de subir    |

## Estructura

```text
/
├── public/              # Favicons, og-image y los CV (CV_ES.pdf, CV_EN.pdf)
├── worker/
│   └── index.ts         # Redirección de "/" al idioma preferido
├── src/
│   ├── assets/          # Foto de perfil y mockups de los proyectos
│   ├── components/
│   │   ├── layout/      # Header, navegación, selectores de idioma y tema
│   │   ├── sections/    # Hero y una carpeta por sección
│   │   ├── ui/          # Componentes reutilizables (Card, Chip, DeviceMockup...)
│   │   └── icons/       # Iconos de tecnologías
│   ├── data/            # Contenido: experiencia, proyectos, skills, perfil...
│   ├── i18n/            # Textos en es.ts y en.ts
│   ├── layouts/
│   ├── lib/             # Utilidades (i18n, cálculo de experiencia, mockups)
│   ├── pages/
│   │   ├── [lang]/      # Página principal por idioma
│   │   └── 404.astro
│   └── styles/
└── wrangler.jsonc       # Configuración de Cloudflare
```

## Cómo editar el contenido

- **Secciones**: el orden y cuáles aparecen se define en `src/data/sections.ts`. Cada entrada apunta a un componente de `src/components/sections/`.
- **Datos**: experiencia, proyectos, skills y rasgos viven en `src/data/` como objetos tipados.
- **Textos**: todo lo traducible está en `src/i18n/es.ts` y `src/i18n/en.ts`. Al añadir una clave hay que ponerla en los dos idiomas.
- **CV**: se generan a partir de los `.docx` (fuera del repo) y se copian a `public/CV_ES.pdf` y `public/CV_EN.pdf`.

## Despliegue

Se despliega en **Cloudflare Workers** con assets estáticos:

- `pnpm build` genera `./dist/`, que Cloudflare sirve directamente.
- La ruta `/` pasa primero por `worker/index.ts`, que redirige a `/es/` o `/en/` según el `Accept-Language` (español por defecto si no hay cabecera, inglés si no se acepta ninguno de los dos).
- Las rutas que no existen devuelven la página `404`.
