// next Image
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none absolute top-0'>
      <Image
        src={'/avatar.png'}
        width={737}
        height={678}
        alt='avatar'
        className='translate-z-0 w-full h-full border-solid border-white'
      />
      Hello
    </div>
  )
}

export default Avatar
