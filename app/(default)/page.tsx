export const metadata = {
  title: 'Home - Talent',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Explainer from '@/components/explainer'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Services from '@/components/services'
import Pricing from '@/components/pricing'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Explainer />
      <Features01 />
      <Features02 />
      <Services />
      <Pricing />
      <Faqs />
      <Cta />
    </>
  )
}
