import Image from "next/image";

export default function Social() {
  return (
    <div className="flex flex-row items-center justify-around w-4/5 md:w-3/5 lg:w-1/5">
      <Image src="/facebook.svg" alt="facebook" width={25} height={25} />
      <Image src="/twitter.svg" alt="twitter" width={25} height={25} />
      <Image src="/instagram.svg" alt="instagram" width={25} height={25} />
      <Image src="/google.svg" alt="google" width={25} height={25} />
      <Image src="/linkedin.svg" alt="linkedin" width={25} height={25} />
    </div>
  );
}
