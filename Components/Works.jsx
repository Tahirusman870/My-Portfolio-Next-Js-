import WorkElement from './WorkElement';

import PortFolioMobileImg from '../public/works/portfolio-mobile.jpg';
import PortFolioDesktopImg from '../public/works/portfolio-desktop.jpg';

import dynamicMobileImg from '../public/works/dynamic-mobile.jpg';
import DynamicDesktopImg from '../public/works/dynamic-desktop.jpg';

import DynamaticsMobileImg from '../public/works/dynamatics-mobile.jpg';
import DynamaticsDesktopImg from '../public/works/dynamatics-desktop.jpg';

import MSTechnicalMobileImg from '../public/works/mstechnical-mobile.jpg';
import MSTechnicalDesktopImg from '../public/works/mstechnical-desktop.jpg';

import Slider from 'react-slick';
import { i18n } from './locale/i18n';


const Works = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  let info = {
    portFOlio: {
      alt: i18n.t('worksSection.portFOlio.alt'),
      name: `${i18n.t('worksSection.portFOlio.name')}`,
      description: `${i18n.t('worksSection.portFOlio.description')}`,
      tools: 'Next Js, TypeScript, Tailwind CSS',
      link: 'https://vercel.app/',
      code: 'https://github.com/Tahirusman870/My-Portfolio-Next-Js-',
    },
    dynamic: {
      alt: i18n.t('worksSection.dynamic.alt'),
      name: `${i18n.t('worksSection.dynamic.name')}`,
      description: `${i18n.t('worksSection.dynamic.description')}`,
      tools: 'WordPress, Customize Theme',
      link: 'https://dynamic.dynamatics.co/',
      code: 'https://github.com/Tahirusman870',
    },
    dynamatics: {
      alt: i18n.t('worksSection.dynamatics.alt'),
      name: `${i18n.t('worksSection.dynamatics.name')}`,
      description: `${i18n.t('worksSection.dynamatics.description')}`,
      tools: 'HTML5, CSS3, JavaScript',
      link: 'https://dynamatics.co/',
      code: 'https://github.com/Tahirusman870/Dynamatics',
    },
    mstechnical: {
      alt: i18n.t('worksSection.mstechnical.alt'),
      name: `${i18n.t('worksSection.mstechnical.name')}`,
      description: `${i18n.t('worksSection.mstechnical.description')}`,
      tools: 'WordPress, 3rd-Party Integration',
      link: 'https://mstechnicalservicellc.com/',
      code: 'https://github.com/Tahirusman870',
    },
  };

  return (
    <section id='Project' className='pt-12 md:pt-16 w-full text-white bg-[#2c2c2c]'>
      <div className='flex flex-col w-full h-full max-w-[900px] mx-auto py-4 px-8'>
        <div className='pb-10'>
        <h1 className="heading pb-10">
        Pro<span className="text-blue-500" >Ject</span>
      </h1>
          <p className='text-center text-base 2xl:text-lg pb-4'>{i18n.t('worksSection.intro')}</p>
        </div>

        <>
          {/* Mobile Slider */}
          <div className='mx-auto w-full max-w-[400px] md:hidden'>
            <Slider {...settings}>
              <div>
                {/* Portfolio */}
                <WorkElement
                  img={PortFolioMobileImg}
                  alt={info.portFOlio.alt}
                  name={info.portFOlio.name}
                  description={info.portFOlio.description}
                  tools={info.portFOlio.tools}
                  link={info.portFOlio.link}
                  code={info.portFOlio.code}
                />
              </div>
              <div>
                {/* Dynamic */}
                <WorkElement
                  img={dynamicMobileImg}
                  alt={info.dynamic.alt}
                  name={info.dynamic.name}
                  description={info.dynamic.description}
                  tools={info.dynamic.tools}
                  link={info.dynamic.link}
                  code={info.dynamic.code}
                />
              </div>
              <div>
                {/* Dynamatics */}
                <WorkElement
                  img={DynamaticsMobileImg}
                  alt={info.dynamatics.alt}
                  name={info.dynamatics.name}
                  description={info.dynamatics.description}
                  tools={info.dynamatics.tools}
                  link={info.dynamatics.link}
                  code={info.dynamatics.code}
                />
              </div>
              <div>
                {/* MS Technical */}
                <WorkElement
                  img={MSTechnicalMobileImg}
                  alt={info.mstechnical.alt}
                  name={info.mstechnical.name}
                  description={info.mstechnical.description}
                  tools={info.mstechnical.tools}
                  link={info.mstechnical.link}
                  code={info.mstechnical.code}
                />
              </div>
            </Slider>
          </div>
          {/* Desktop */}
          <div className='hidden md:flex flex-col'>
            {/* Casa & Cor */}
            <WorkElement
              img={PortFolioDesktopImg}
              alt={info.portFOlio.alt}
              name={info.portFOlio.name}
              description={info.portFOlio.description}
              tools={info.portFOlio.tools}
              link={info.portFOlio.link}
              code={info.portFOlio.code}
            />
            {/* Dynamic */}
            <WorkElement
              img={DynamicDesktopImg}
              alt={info.dynamic.alt}
              name={info.dynamic.name}
              description={info.dynamic.description}
              tools={info.dynamic.tools}
              link={info.dynamic.link}
              code={info.dynamic.code}
              reverse
            />
            {/* Dynamatics */}
            <WorkElement
              img={DynamaticsDesktopImg}
              alt={info.dynamatics.alt}
              name={info.dynamatics.name}
              description={info.dynamatics.description}
              tools={info.dynamatics.tools}
              link={info.dynamatics.link}
              code={info.dynamatics.code}
            />
            {/* MS Technical */}
            <WorkElement
              img={MSTechnicalDesktopImg}
              alt={info.mstechnical.alt}
              name={info.mstechnical.name}
              description={info.mstechnical.description}
              tools={info.mstechnical.tools}
              link={info.mstechnical.link}
              code={info.mstechnical.code}
              reverse
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default Works;
