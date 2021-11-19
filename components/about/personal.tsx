//-----------------------------------------------------------------------------
// components/about/personal.tsx
//-----------------------------------------------------------------------------
import { Splide, SplideSlide } from '@splidejs/react-splide'
//* import '@splidejs/splide/dist/css/splide.min.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

/**
 * @function Personal
 */
export default function Personal() {
  const personalInfo = [
    {
      image:  "/about-me/vintage-robot-saying-hello.jpg",
      title:  "Hello, I'm Mike Daley",
    },
    {
      image:  "/about-me/product-launch.jpg",
      title:  "For work, I build products",
    },
    {
      image:  "/about-me/software-code.jpg",
      title:  "and I do some coding",
    },
    {
      image:  "/about-me/sf-baker-beach.jpg",
      title:  "I Live in San Francisco",
    },
    {
      image:  "/about-me/hawaii-sunset.jpg",
      title:  "When not working, I enjoy spending time with my family,...",
    },
    {
      image:  "/about-me/machu-pichu-003.jpg",
      title:  "traveling,...",
    },
    {
      image:  "/about-me/kids-playing-soccer.jpg",
      title:  "and going to my son's games."
    },
    {
      image:  "/about-me/swimming-pool.jpg",
      title:  "I stay active by swimming, running, and playing tennis.",
    },
  ]

  /**
   * @function getPersonalInfo
   */
  const getPersonalInfo = () => {
    let i = 1

    return (
      personalInfo.map( (info) => {
        return (
          <SplideSlide key={i++}>
            <div className="flex flex-col p-4 bg-white border border-gray-200">
              <img src={info.image} alt={info.title} />
              <div className="text-gray-800 text-center text-xl mt-2">
                {info.title}
              </div>
            </div>
          </SplideSlide>
        )
      })
    )
  }
  
  /**
   * Returns slideshow of personal info.
   */
  return (
    <div className="w-full align-middle md:w-3/4 lg:w-1/2">
      <Splide
        options = {{
          type:       'loop',
          pagination: false,
          autoplay:   true,
        }}
      >
        {getPersonalInfo()}
      </Splide>
    </div>
  )
}