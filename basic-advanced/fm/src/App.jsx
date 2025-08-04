import React from 'react'
import { motion, useScroll } from "framer-motion"

const App = () => {
  const { scrollYProgress } = useScroll(); // to create a scroll bar 

  console.log(scrollYProgress); // You may need to use useEffect to watch this

  return (
    <div className='p-20 text-center text-white font-mono bg-black'>

      {/* // if i want to animate this div we have write motion.div. */}
      {/* <motion.div> */}
      {/* <motion.div
        animate={{
          x: 1000, // coordinate
          y: 500,
          rotate: 360 // animate
        }}
        transition={{
          duration: 3, // how much time taken
          delay:1 // starting time
        }}
        className='box'
      >

      </motion.div>
      <motion.div
        animate={{
          x: 500,
          scale: .5
        }}
        className='circle'
      >

      </motion.div>


      <motion.h1
        animate={{
          scale: 1,
          x: 1000,
          rotate: 360.
          
        }}
        transition={{
          duration: 2,
          delay: 2,
          repeat: Infinity,
          ease : 'anticipate'
        }}
        initial={{
          x:500
        }}
      >Subscribe</motion.h1>  */}


      {/* <motion.img
        animate={{
          x: 1000,
          
        }}
        transition={{
          duration: 2,
          delay: 2,
          repeat: Infinity,
          ease : 'anticipate'
        }}
        src="src\assets\oggy.png"
        className='oggy'
        alt="" /> */}



      {/* <motion.div
        animate={{
          x: [0, 800, 800, 0, 0],  // @ keyframe position
          y: [0, 0, 300, 300, 0],
          rotate : [0,360,0,-360,0]
        }}
        initial={{
          x: 0,
          y : 0
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat : Infinity
        }}
        className="box">

      </motion.div> */}


      {/* <motion.div
        whileHover={{
          background : 'green' // ! hover effect.
        }}
        whileTap={{ // ! tap the area
          scale : 0.8 
        }}
        whileDrag={{ // ! drag and drop
          scale : 0.8
        }}
        dragConstraints={{ // ! rules or constriants from where can go.
          left: 0,
          right: 800,
          top: 0,
          bottom : 800
        }}
        drag // we can move anywhere on screen
        dragDirectionLock = 'true' // ! same time go one direction like uo and down or left and right
        className="box"></motion.div> */}
      <motion.div
        style={{
          scaleX: scrollYProgress  //! make a scroll bar
        }}
        className='bg-red-500 w-full h-3 fixed top-0 left-0 origin-left'
      ></motion.div>

      <h1 className='text-4xl font-mono font-bold mb-10'>Sheryians Coding School</h1>

      <p className='p-20 font-mono text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt iusto ipsam maxime cum dolorum necessitatibus ducimus eveniet. Alias, vel consectetur aperiam consequuntur repudiandae nemo molestiae a eius unde ipsam culpa, minima mollitia! Explicabo inventore asperiores minus voluptatem. Animi error laudantium, sequi impedit nobis eligendi doloremque voluptate quia ratione, quibusdam iure earum sunt repudiandae voluptatibus? Nam dolore ratione labore debitis nesciunt ducimus omnis laudantium, earum unde reiciendis? Illo quod rem pariatur alias labore quidem nostrum eligendi perspiciatis doloremque modi deserunt fugiat voluptatibus nihil iure, inventore totam molestias? Aspernatur ex, laudantium voluptatibus maiores corrupti, earum facilis odit, alias ipsum laboriosam blanditiis? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum ea officia blanditiis necessitatibus eos labore provident nisi, excepturi et pariatur reprehenderit accusantium suscipit assumenda iusto aut mollitia sit voluptatum, nam rem officiis qui dolore. Distinctio iste doloremque in ab fugiat accusantium blanditiis sit exercitationem maiores? Aperiam dolorem natus inventore molestias exercitationem explicabo iusto qui! Doloribus cum unde harum iusto fuga inventore, voluptates est officia temporibus. At excepturi voluptates ullam officiis facere modi incidunt doloremque, sunt ad quam ratione a aliquid voluptatum reprehenderit cum velit non debitis rerum, omnis nisi obcaecati hic! Assumenda facere dolorem dicta. Earum animi officiis debitis eaque error quis id tempora ducimus modi tenetur, sint quia quasi neque dolore adipisci. Aperiam molestias omnis tenetur qui dolore nisi cum, officiis architecto in autem perspiciatis repellat beatae saepe possimus quia ea magnam rerum iure, tempore veniam aspernatur minus. Quasi temporibus expedita architecto id? Enim deleniti sed recusandae ut magnam error id, nam hic dolorum quam mollitia facere dignissimos explicabo cumque. Vitae error at officiis, facere velit voluptatum recusandae? Dolorum adipisci error est corporis ea. Maxime laboriosam nostrum dolores iusto, ut quae? Sint esse ea quisquam ipsum rerum reprehenderit consequuntur. Consequatur sapiente ipsa architecto libero animi corporis sed earum!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum ea officia blanditiis necessitatibus eos labore provident nisi, excepturi et pariatur reprehenderit accusantium suscipit assumenda iusto aut mollitia sit voluptatum, nam rem officiis qui dolore. Distinctio iste doloremque in ab fugiat accusantium blanditiis sit exercitationem maiores? Aperiam dolorem natus inventore molestias exercitationem explicabo iusto qui! Doloribus cum unde harum iusto fuga inventore, voluptates est officia temporibus. At excepturi voluptates ullam officiis facere modi incidunt doloremque, sunt ad quam ratione a aliquid voluptatum reprehenderit cum velit non debitis rerum, omnis nisi obcaecati hic! Assumenda facere dolorem dicta. Earum animi officiis debitis eaque error quis id tempora ducimus modi tenetur, sint quia quasi neque dolore adipisci. Aperiam molestias omnis tenetur qui dolore nisi cum, officiis architecto in autem perspiciatis repellat beatae saepe possimus quia ea magnam rerum iure, tempore veniam aspernatur minus. Quasi temporibus expedita architecto id? Enim deleniti sed recusandae ut magnam error id, nam hic dolorum quam mollitia facere dignissimos explicabo cumque. Vitae error at officiis, facere velit voluptatum recusandae? Dolorum adipisci error est corporis ea. Maxime laboriosam nostrum dolores iusto, ut quae? Sint esse ea quisquam ipsum rerum reprehenderit consequuntur. Consequatur sapiente ipsa architecto libero animi corporis sed earum!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum ea officia blanditiis necessitatibus eos labore provident nisi, excepturi et pariatur reprehenderit accusantium suscipit assumenda iusto aut mollitia sit voluptatum, nam rem officiis qui dolore. Distinctio iste doloremque in ab fugiat accusantium blanditiis sit exercitationem maiores? Aperiam dolorem natus inventore molestias exercitationem explicabo iusto qui! Doloribus cum unde harum iusto fuga inventore, voluptates est officia temporibus. At excepturi voluptates ullam officiis facere modi incidunt doloremque, sunt ad quam ratione a aliquid voluptatum reprehenderit cum velit non debitis rerum, omnis nisi obcaecati hic! Assumenda facere dolorem dicta. Earum animi officiis debitis eaque error quis id tempora ducimus modi tenetur, sint quia quasi neque dolore adipisci. Aperiam molestias omnis tenetur qui dolore nisi cum, officiis architecto in autem perspiciatis repellat beatae saepe possimus quia ea magnam rerum iure, tempore veniam aspernatur minus. Quasi temporibus expedita architecto id? Enim deleniti sed recusandae ut magnam error id, nam hic dolorum quam mollitia facere dignissimos explicabo cumque. Vitae error at officiis, facere velit voluptatum recusandae? Dolorum adipisci error est corporis ea. Maxime laboriosam nostrum dolores iusto, ut quae? Sint esse ea quisquam ipsum rerum reprehenderit consequuntur. Consequatur sapiente ipsa architecto libero animi corporis sed earum!
      </p>
    </div>
  )
}

export default App;
