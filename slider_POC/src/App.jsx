import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carousel showThumbs={false} autoPlay>
        <div>
          <img src="./assets/1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="./assets/2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="./assets/3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  )
}

export default App
