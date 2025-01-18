import Link from "next/link";
import Button from "../primitive/button";
import { chevoronRightIcon, logoIcon } from "../../_ui/icons";

export default function Navbar() {
    return (
        <div className="scn-container mx-auto py-3 px-4">
            <div className="flex justify-between gap-10">
                <h1 className="box-border">
                    <Link href='/'>
                        {logoIcon}
                    </Link>
                </h1>
                <div className="box-border block">
                    <nav>
                        <ul className="flex">
                            <li>
                                <Link className="py-2.5 px-5" href="#">Products</Link>
                            </li>
                            <li>
                                <Link className="py-2.5 px-5" href="#">Solutions</Link>
                            </li>
                            <li>
                                <Link className="py-2.5 px-5" href="#">Developers</Link>
                            </li>
                            <li>
                                <Link className="py-2.5 px-5" href="#">Resources</Link>
                            </li>
                            <li>
                                <Link className="py-2.5 px-5" href="#">Pricing</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav className="flex-grow flex justify-end gap-5">
                    <div>
                        <Button buttonLink="#" buttonText="Sign In" buttonIcon={chevoronRightIcon} />
                    </div>
                    <div>
                        <Button buttonLink="#" buttonText="Contact Sales"  buttonIcon={chevoronRightIcon} />
                    </div>
                </nav>
            </div>
        </div>
    );
}