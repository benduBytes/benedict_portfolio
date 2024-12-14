import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
        <div className="contsiner mx-auto flex justify-between items-center ">
            <Link href={"/"} >
                <h1 className="text-4xl font-semibold ">
                Benedict<span className="text-accent">.</span>
                </h1>
            </Link>
        
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href={"/hireme"}>
                <Button>Hire me</Button>
            </Link>
        </div>

        <div className="xl:hidden">
            <MobileNav />
        </div>
        
        </div>
    </header>
  )
}

export default Header