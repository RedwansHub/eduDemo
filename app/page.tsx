import Designs from "./components/Designs";
import Hero from "./components/Hero";


export default function Home() {

  return (
    <div className="px-6 pt-8 ">
      <Hero />
      <div className="pt-8">
        <Designs />
      </div> 
    </div>
  )
}
