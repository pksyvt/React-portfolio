import { TypeAnimation } from 'react-type-animation';
import { SiSololearn } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left'
        src='https://images.unsplash.com/photo-1474031317822-f51f48735ddd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl text-gray-800'>
            I'm a Developer
          </h1>
          <h2 className='flexsm:text-3xl text-2xl text-gray-800'>
            {' '}
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Developer',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'Coder',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper='span'
              speed={50}
              style={{
                fontSize: '1em',
                paddingLeft: '5px',
                display: 'inline-block',
              }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaGithub />
            <FaLinkedin />
            <SiSololearn />
            <FaStackOverflow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
