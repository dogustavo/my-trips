import React from 'react'
import NextHead from 'next/head'

type HeadProps = {
  title: string
}

export default function Seo({ title }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <meta property="og:title" content={title} key="title" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
      />
    </NextHead>
  )
}
