import MainComponent from '../../component/mainComponent/MainComponent'
import Navbar from '../../component/navbar/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <MainComponent pageName='Planned' />
    </>
  )
}
