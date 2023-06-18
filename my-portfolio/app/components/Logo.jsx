"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Logo() {
  const [image, setImage] = useState("");
  useEffect(() => setImage("/svg/logo.svg"), []);

  return (
    <div>
      <Image src={image} alt="SVG of Logo" width={100} height={100} />
    </div>
  );
}
