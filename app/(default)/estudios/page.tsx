import Features01 from '@/components/features-01'
import StudyWork from '@/components/study-work'
import Services from '@/components/services'
import { VideoTextDemo } from '@/components/video-text-demo'
import { ScrollBasedVelocityDemo } from '@/components/scroll-based-velocity-demo'
import Features02 from '@/components/features-02'
import StepsFlow from "@/components/steps-flow"
import EstudiosSections from './sections'

export const metadata = {
  title: 'Estudios - MIGRATE',
  description: 'Opciones de estudios para obtener o mantener tu estancia legal en España',
}

export default function EstudiosPage() {
  return (
    <>
      <Features02 />
      <StepsFlow />
      <ScrollBasedVelocityDemo />
      <Features01 />
      <StudyWork />
      <VideoTextDemo />
      <Services />
      <EstudiosSections />
    </>
  )
}
