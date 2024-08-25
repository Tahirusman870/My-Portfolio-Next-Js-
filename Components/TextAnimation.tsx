import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-End-Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Node.Js Developer',
        1000,
        'UI Engineer',
        1000
      ]}
      speed={20}
      className="text-[24px] md:text-[36px] text-[#f18720] font-bold"
      repeat={Infinity}
    />
  );
};

export default TextAnimation