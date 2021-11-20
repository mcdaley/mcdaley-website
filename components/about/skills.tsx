//-----------------------------------------------------------------------------
// components/about/skills.tsx
//-----------------------------------------------------------------------------

/**
 * @function Skills
 */
export default function Skills() {
  // Array of technical skills
  const skills = [
    {
      title:  "TypeScript",
      image:  "/skills/typescript.svg",
    },
    {
      title:  "JavaScript",
      image:  "/skills/javascript.svg",
    },
    {
      title:  "Node.js",
      image:  "/skills/nodedotjs.svg",
    },
    {
      title:  "React",
      image:  "/skills/react.svg",
    },
    {
      title:  "MongoDB",
      image:  "/skills/mongodb.svg",
    },
    {
      title:  "PostgreSQL",
      image:  "/skills/postgresql.svg"
    },
    {
      title:  "HTML5",
      image:  "/skills/html-5.svg"
    },
    {
      title: "CSS3",
      image: "/skills/css3.svg",
    },
    {
      title:  "Ruby on Rails",
      image:  "/skills/rubyonrails.svg",
    },
    {
      title:  "C++",
      image:  "/skills/cplusplus.svg"
    },
    {
      title:  "Linux",
      image:  "/skills/linux.svg",
    },
  ]

  /**
   * @function getSkills
   */
  const getSkills = () => {
    let i = 1

    return (
      skills.map( (skill) => {
        return (
          <div key={i++} className="m-8">
            <img src={`${skill.image}`} height="64" width="64" />
            <h2  className="text-sm text-gray-700 text-center">
              {`${skill.title}`}
            </h2>
          </div>
        )
      })
    )
  }

  /**
   * Return all of my technical skills defined in the "skills" array.
   */
  return (
    <div className="inline-flex flex-wrap justify-start items-center">
      {getSkills()}
    </div>
  )
}