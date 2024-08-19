'use client';

import Image from 'next/image';
import ttumcLogo from '@/public/TTUMC-white-logo.svg';
import styles from '@/app/ui/home.module.css';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { transform } from 'next/dist/build/swc';

const icon = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1
  }
};

export default function Page() {
  return (
    <>
      <div className="bg-black h-screen w-screen absolute" />
      <div className="bg-[#1a1a1a] w-full h-full absolute z-10 mix-blend-lighten opacity-1" />
      <div className="relative flex h-screen justify-center items-center content-center p-6 overflow-hidden">
        <div className={styles.textEffect}>
          <motion.svg
            id="ttumc_logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 700"
            className={clsx(styles.logo, 'w-[600px] h-auto')}
            initial={{ scale: '115%' }}
            animate={{ scale: '101%' }}
            transition={{ duration: 2.5 }}
          >
            <motion.path
              className={styles.st0}
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 3, ease: [0.35, 0, 0.65, 1] },
                fill: { duration: 3, ease: 'easeInOut' }
              }}
              d="M349.1,254.34L154.63,591.17h279.89h210.86L539.94,408.56l0,0l-15.12-26.2l-73.91-128.02l-14.61,8.43
		l38.71,67.05H324.99l38.71-67.05L349.1,254.34z M358.97,574.31V346.7h27.5v227.61H358.97z M403.34,574.31V346.7h71.67l-50.32,87.17
		h100.65l-81.08,140.44H403.34z M525.34,417H453.9l35.72-61.87l17.97,31.13L525.34,417z M463.73,574.31l76.22-132.01l76.22,132.01
		H463.73z M342.11,346.7v227.61H183.84L315.25,346.7H342.11z"
            />
            <motion.polygon
              className={styles.st0}
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: [0, 0.3, 0, 1] },
                fill: { duration: 2, ease: 'easeInOut' }
              }}
              points="607.9,411.58 593.3,420.01 715.49,631.65 84.51,631.65 400,85.21 516.21,286.5 530.82,278.07 
		400,51.48 55.3,648.52 744.7,648.52 	"
            />
          </motion.svg>
          {/* <Image
            className={styles.logo}
            src={ttumcLogo}
            alt="ttumc-logo"
            width={600}
            height={560}
          /> */}
          <div className={styles.gradient} />
          <div className={styles.spotlight} />
        </div>
      </div>
    </>
  );
}
