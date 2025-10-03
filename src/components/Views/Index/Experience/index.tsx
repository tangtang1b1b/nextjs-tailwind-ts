'use client'

import { motion } from 'framer-motion'
import HeadTitle from '@/components/Modal/HeadTitle'
import SkillIcon from '@/components/Modal/SkillIcon'

interface JobData {
  category: string
  skills: {
    name: string
    level: number
    icon: string
  }[]
}

interface JobProps {
  jobData: JobData[]
}

export default function Job({ jobData }: JobProps) {
  return (
    <section className="flex w-full max-w-screen-2xl flex-col gap-15">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HeadTitle title="Experience" />
      </motion.div>

      {jobData?.map((categoryData, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          className="flex w-full flex-col gap-8 md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full md:w-1/5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-center text-2xl font-bold text-neutral-400 md:text-start">{categoryData.category}</h3>
          </motion.div>

          <motion.div className="w-full md:w-4/5">
            <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
              {categoryData.skills?.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="border-foreground/40 shadow-card md:max-w-auto shadow-foreground/25 mx-auto flex aspect-square w-full max-w-sm cursor-pointer flex-col items-center rounded-lg border bg-stone-800 p-4"
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex size-full flex-col items-center justify-between">
                    <motion.div
                      className="mb-2 flex flex-col items-center justify-between"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                      }}
                      viewport={{ once: true }}
                    >
                      <SkillIcon iconName={skill.icon} className="mb-2 h-12 w-12" />
                      <span className="text-center text-xl font-medium">{skill.name}</span>
                    </motion.div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  )
}
