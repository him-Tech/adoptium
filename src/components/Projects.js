import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const projects = [
    { title: "Eclipse Temurin™", image: 'temurin.svg', link: "#" },
    { title: "Eclipse AQAvit", image: 'aqavit.svg', link: "#" },
    { title: "Eclipse Mission Control", image: 'missioncontrol.svg', link: "#" },
]

const Projects = () => {
  return (
    <div className="bg-blue py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
        <h2 className="text-center text-3xl font-semibold text-white-900">
            Explore the Working Group Projects
        </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          Lorum ipsum dolor sit amet consecture, risus pretium aliquet. Summary of the projects and their benefits.
        </p>
        <div className="mt-20 flow-root">
          <div className="mt-16 grid max-w-sm grid-cols-1 gap-y-16 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 xl:-mx-4">
            {projects.map((project) => (
              <div key={project.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-8">
                <div className="bg-white bg-opacity-5 p-10 h-96 rounded-3xl border-2 border-white border-opacity-50">
                    <StaticImage
                        src='../images/temurin-cross.svg'
                        alt={project.name}
                        height={70}
                        class='my-10'
                    />
                    <div className="h-16 flex-col justify-center items-start gap-2">
                        <div className="justify-start items-center gap-3 inline-flex">
                        <div className="w-2 h-2 bg-rose-600 rounded-sm border-2 border-rose-600 border-opacity-25" />
                        <div className="text-rose-600 text-base font-bold">Overline</div>
                        </div>
                        <div className="text-white text-2xl mb-10 font-semibold">{project.title}</div>
                        <a
                        href={project.link}
                        className="bg-transparent border-2 border-pink-500/0 text-white font-bold py-2 px-4 rounded-2xl gradient-border"
                        >
                        Learn More
                    </a>
                    </div>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;