import Banner from '@/components/sections/banner';
import Features from '@/components/sections/work';
import AboutUs from '@/components/sections/aboutus';
import Expert from '@/components/sections/expert';
import Gallery from '@/components/sections/gallery';
import Newsletter from '@/components/sections/newsletter';



export default function Home() {

  return (
    <main>
      <Banner />
      <Features />
      <AboutUs />
      <Expert />
      <Gallery />
      <Newsletter />
    </main>
  )
}
