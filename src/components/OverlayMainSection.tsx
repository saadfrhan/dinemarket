import CartIcon from './CartIcon'
import NavBtns from './NavBtns'

export default function OverlayMainSection() {
    return (
        <div className="flex flex-col items-center text-center gap-[1rem] justify-center">
            <CartIcon />
            <NavBtns className='text-center flex flex-col gap-4' />
        </div>
    )
}
