import type { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export function getStaticProps() {
  return {
    props: {},
    revalidate: 4 * 60 * 60,
  }
}

export default function Home(): InferGetStaticPropsType<typeof getStaticProps> {
  const router = useRouter()

  useEffect(() => {
    async function reRoute() {
      await router.push('/milkbar/landingpage')
    }
    reRoute().catch((err) => console.error(err))
  }, [router])

  return <>Rerouting...</>
}
