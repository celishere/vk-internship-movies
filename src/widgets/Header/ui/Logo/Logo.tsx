import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href={"/"}>
            <Image
                src={"/logo.png"}
                alt="App logo"
                width={ 55 }
                height={ 55 }
                priority
            />
        </Link>
    )
}