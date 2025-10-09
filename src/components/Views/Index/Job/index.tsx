'use client'

import { motion } from 'framer-motion'
import HeadTitle from '@/components/Modal/HeadTitle'
import { useState } from 'react'
import { JobData } from '@/types/data'

interface JobProps {
  jobData: JobData[]
}

export default function Job({ jobData }: JobProps) {
  const [openAccordions, setOpenAccordions] = useState<{ [key: number]: boolean }>({})

  const toggleAccordion = (dataIndex: number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [dataIndex]: !prev[dataIndex],
    }))
    const accordion = document.getElementById(`accordion-${dataIndex}`)
    if (accordion) {
      if (accordion.style.maxHeight && accordion.style.maxHeight !== '0px') {
        accordion.style.maxHeight = '0px'
      } else {
        accordion.style.maxHeight = accordion.scrollHeight + 'px'
      }
    }
  }

  return (
    <section className="flex w-full max-w-screen-2xl flex-col gap-10 md:gap-15">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HeadTitle title="Experience" />
      </motion.div>

      {jobData?.map((data, dataIndex) => (
        <motion.div
          key={dataIndex}
          className="flex w-full flex-col justify-center gap-8 md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-center text-2xl font-bold text-neutral-400 md:text-start">{data.name}</h3>
          </motion.div>

          <div className="">
            <div className="w-full">
              <motion.div
                className="shadow-card shadow-foreground/25 flex w-full cursor-pointer flex-col rounded-lg bg-stone-800 p-4"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              >
                <div className="mb-5 flex size-full flex-col justify-between md:flex-row md:items-center">
                  <h3 className="mb-4 text-start text-2xl font-bold">{data.name}</h3>
                  <div className="flex flex-col justify-between gap-5 divide-white/50 md:flex-row md:items-center md:divide-x-2">
                    <p className="pr-5 text-xl font-bold text-blue-500">{data.jobTitle}</p>
                    <p className="text-neutral-400">{data.duration}</p>
                  </div>
                </div>
                <div className="mb-3 flex flex-wrap gap-2 md:w-2/3">
                  {data.technology?.map((tech, techIndex) => (
                    <span key={techIndex} className="rounded-full bg-blue-500 px-3 py-1 text-sm font-semibold text-white">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-5 text-center text-xl font-medium">{data.jobIntro}</div>
                <div className="accordion">
                  <button className="w-full text-center text-blue-400" onClick={() => toggleAccordion(dataIndex)}>
                    {openAccordions[dataIndex] ? 'Show Less' : 'Show More'}
                  </button>
                  <div
                    id={`accordion-${dataIndex}`}
                    className={`${openAccordions[dataIndex] ? 'opacity-100' : 'opacity-0'} flex flex-col items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out`}
                    style={{ maxHeight: '0px' }}
                  >
                    {data.jobDetail?.map((detail, detailIndex) => (
                      <div key={detailIndex} className="mt-3 flex size-full flex-col gap-1 text-center">
                        <h4 className="text-xl font-bold text-blue-500">{detail.feature}</h4>
                        <p className="text-neutral-400">{detail.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
