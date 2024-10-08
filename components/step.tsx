import Image, { StaticImageData } from 'next/image'

interface Props {
  title: string
  imageSource: StaticImageData
}

export default function Step({ title, imageSource }: Props) {
  return (
    <div className="flex flex-col items-center rotate-12">
      <p className="text-2xl">{title}</p>
      <Image src={imageSource} alt={title} />
    </div>
  )
}
