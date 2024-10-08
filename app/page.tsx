import Step from '@/components/step'
import Image from 'next/image'
import app_image from '../public/images/app.png'
import bg from '../public/images/background.png'
import logo from '../public/images/logo.svg'
import step1 from '../public/images/step_1.png'
import step2 from '../public/images/step_2.png'
import step3 from '../public/images/step_3.png'

const STEPS = [
  { title: '1. Upload CV', imageSource: step1 },
  { title: '2. One-Click apply', imageSource: step2 },
  { title: '3. Manage applications', imageSource: step3 },
]

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="relative overflow-hidden h-[42rem]">
        <Image
          className="absolute object-cover top-0 left-0 w-full h-full max-h-[42rem]"
          src={bg}
          alt="background"
          priority
        />

        <div className="z-10 relative flex justify-start items-center px-6 pt-6">
          <Image src={logo} alt="Purpose" priority />
        </div>
        <div className="z-10 flex flex-col justify-between items-center relative mt-6">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-slate-50 mb-12 text-center">
            Stop searching—start discovering a fulfilling career.
          </h1>
          <Image className="object-cover" src={app_image} alt="App" priority />
        </div>
      </header>
      <main>
        <div className="p-24">
          <p>
            Purpose uses a CV interpretation & matching technology to radically
            reduce the investment effort by users, while providing better
            results and offering everything through a mobile app.{' '}
          </p>
        </div>
        <div className="p-24 flex flex-col justify-center">
          <div>
            <h3 className="scroll-m-20 text-xl tracking-tight lg:text-2xl text-center">
              Finding a match in a simple three step process:{' '}
            </h3>
          </div>
          <div className="flex flex-col gap-12 md:flex-row justify-around mt-12">
            {STEPS.map((step) => (
              <Step
                key={step.title}
                title={step.title}
                imageSource={step.imageSource}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
