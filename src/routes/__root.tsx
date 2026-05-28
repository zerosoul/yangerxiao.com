/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import globalCss from '~/styles/global.css?url'
import mainCss from '~/assets/style/main.css?url'
import { siteMetadata } from '~/config/site'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { httpEquiv: 'x-ua-compatible', content: 'ie=edge' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      { title: siteMetadata.title },
      { name: 'description', content: siteMetadata.description }
    ],
    links: [
      { rel: 'stylesheet', href: globalCss },
      { rel: 'stylesheet', href: mainCss },
      { rel: 'icon', href: '/favicon.ico' }
    ]
  }),
  notFoundComponent: NotFound,
  component: RootComponent
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white text-center text-neutral-700">
      <h1 className="text-4xl font-bold">NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <a href="/" className="underline">
        回首页
      </a>
    </div>
  )
}
