import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/Frontliners.png'
import project2 from '../../public/images/projects/edSeed.png'
import project3 from '../../public/images/projects/vip.png'
import project4 from '../../public/images/projects/promptopia.png'
import project5 from '../../public/images/projects/comfy_sloth.png'
import project6 from '../../public/images/projects/moviesDB.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light sm:p-4'>
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]
      '
      />
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline md:text-base'
          >
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    '>
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      '
      />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg 
        lg:w-full
        '
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto border-2 rounded-md border-black'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark 
            sm:px-4 sm:text-base
            '
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>M.Tayeb | Projects</title>
        <meta name='description' content='any description ' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Frontliners AI'
                summary='Shift planning system, Employee assessment, Employee training.'
                link='https://frontliners.ai/'
                github='/'
                img={project1}
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Full Stack App Using Next JS 13 Framework'
                link='https://nextjs-promptopia.netlify.app/'
                github='https://github.com/MTayeb93/nextJs-Promptopia-project'
                img={project4}
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Comfy Sloth'
                link='https://react-course-comfy-sloth-store.netlify.app/products'
                github='/'
                img={project5}
                type='Featured Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='Very Important Projects Fund'
                summary='A feature-rich Crowdfunding platform, WordPress, React, React Router and Recharts. 
             '
                link='/'
                github='/'
                img={project3}
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Crowdfunding Platform'
                link='https://www.edseed.me/'
                github='/'
                img={project2}
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Movies DB'
                link='https://react-projects-21-movie-db.netlify.app/'
                github='/'
                img={project6}
                type='Featured Project'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects
