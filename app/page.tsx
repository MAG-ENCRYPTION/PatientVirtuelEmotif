import Accueil from '@/app/components/Accueil/index';
import Objectif from '@/app/components/Objectif/index';
import Manuel from '@/app/components/Manuel/index';
import Contributeurs from '@/app/components/Supervisors/index';
import Demo from '@/app/components/Demo/index';
import Outil from '@/app/components/Outil/index';
import Contact from '@/app/components/Contact/index';
import TeamDev from './components/TeamDev';
import Supervisors from '@/app/components/Supervisors/index';
import Sponsors from './components/Sponsors';


export default function Home() {
  return (
    <main>
      <Accueil />
      <Objectif />
      <Manuel />
      <Demo />
      <Outil />
      <Supervisors/>
      <TeamDev />
      <Sponsors/>
      <Contact />
    </main>
  )
}
