
import Card from './components/Card.jsx'
import './App.css'
import Image from './components/Image.jsx'
import Text from './components/Text.jsx'
import Footer from './components/footer.jsx'
import Container from './components/Container.jsx'
// import Image from './components/'

function App() {
  

  return (
    <div className='flex items-center justify-center h-screen bg-[#f4d04e] '>
         
    
      <Card className='CardContainer h-[501px] w-[321px]  md:h-[384px] md:h-[522px]   rounded-lg bg-white shadow-[7px_10px_0px_#000000]'>
        <Container className='h-full flex flex-col gap-[24px] p-[24px]'>
          <Image />
          <Text />
          <Footer />
        </Container>
      </Card>
   </div>
  )
}

export default App
