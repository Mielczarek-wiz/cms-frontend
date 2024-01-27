import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { convertToImage } from "@/components/modules/convertToImage";

export default function Social({ socialsLink }) {
  const { call } = useCall();
  const [socials, setSocials] = useState([]);
  const fetchSocials = useCallback(async () => {
    const socials = await call(
      "get",
      getRoute("socials") + "/" + socialsLink,
      {},
      false,
      false
    );
    setSocials(socials);
  }, [call, socialsLink]);
  useEffect(() => {
    fetchSocials();
  }, [fetchSocials]);
  return (
    <div className="flex flex-row items-center justify-around w-4/5 md:w-3/5 lg:w-1/5">
      {socials.map((social) => (
        <Link href={social.subinformation} key={social.id}>
          <Image
            src={convertToImage(social.image)}
            alt={social.information}
            width={25}
            height={25}
          />
        </Link>
      ))}
    </div>
  );
}
/*

*/
