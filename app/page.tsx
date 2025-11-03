import Accueil from '@/app/components/Accueil/index';
import Objectif from '@/app/components/Objectif/index';
import Manuel from '@/app/components/Manuel/index';
import Contributeurs from '@/app/components/Contributeurs/index';
import Demo from '@/app/components/Demo/index';
import Outil from '@/app/components/Outil/index';
import Contact from '@/app/components/Contact/index';


export default function Home() {
  return (
    <main>
      <Accueil />
      <Objectif />
      <Manuel />
      <Demo />
      <Outil />
      <Contributeurs />
      <Contact />
    </main>
  )
}
