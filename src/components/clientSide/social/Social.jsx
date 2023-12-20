import Image from "next/image";

export default function Social() {
    return <div className="flex flex-row justify-around w-1/5">
        <Image src="/facebook.svg" alt="facebook" width={25} height={25} />
        <Image src="/twitter.svg" alt="twitter" width={25} height={25} />
        <Image src="/instagram.svg" alt="instagram" width={25} height={25} />
        <Image src="/google.svg" alt="google" width={25} height={25} />
        <Image src="/linkedin.svg" alt="linkedin" width={25} height={25} />
    </div>
}