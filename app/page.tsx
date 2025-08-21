import Accueil from './components/Banner/index';
import Objectif from '@/app/components/Accueil/index';
import Manuel from '@/app/components/Manuel/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Contributeurs from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Demo from './components/Featured/index';
import Outil from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Contact from './components/Joinus/index';
import Insta from './components/Insta/index';


export default function Home() {
  return (
    <main>
      <Accueil />
      <Objectif />
      <Manuel />
      <Contributeurs />
      <Demo />
      <Outil />
      <Contact />
    </main>
  )
}
