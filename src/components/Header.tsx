import MoonIcon from "./icons/MoonIcon"
function Header() {
    return(
        <div className="container mx-auto px-4 pt-8">
          <div className="flex justify-between">
            <h1 className="uppercase text-white text-4xl tracking-[0.4em] font-semibold">Todo</h1>
            <button className=""><MoonIcon fill="#fff"/></button>
          </div>
        </div>
    )
}

export default Header