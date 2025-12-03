export const metadata = {
  title: 'Migrate – Te ayudamos',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Explainer from '@/components/explainer'
import Features02 from '@/components/features-02'
import { ScrollBasedVelocityDemo } from "@/components/scroll-based-velocity-demo"
import StudyWork from '@/components/study-work'
import ContactForm from '@/components/contact-form'
import Pricing from '@/components/pricing'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Explainer />
      <ScrollBasedVelocityDemo />
      <ContactForm />
   
      


      
      
      
      <Pricing />
      <Faqs />
      <Cta />
    </>
  )
}
