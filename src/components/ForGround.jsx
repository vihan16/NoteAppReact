import React, {useRef,useState} from "react";
import Card from "./Card";

function ForGround() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsim jn dnsjn sajkcnj snci nsjnck js",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" },
    },
    {
      desc: "Lorem ipsim jn dnsjn sajkcnj snci nsjnck js",
      filesize: "2.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "yellow" },
    },
    {
      desc: "Lorem ipsim jn dnsjn sajkcnj snci nsjnck js",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full p-5 flex flex-wrap gap-5 ">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default ForGround;
