import Image from 'next/image'
import LogoImage from '/public/Logo.png';
import Link from 'next/link';

function Logo({
  show = true
}: {
  show?: boolean
}) {
  return (<>
  {show && <Link href="/">
    <Image src={LogoImage} alt="Dine Market" height="100" width="100" className="w-[140px] aspect-logo h-[25px]" />
  </Link>}
  </>)
}

export default Logo