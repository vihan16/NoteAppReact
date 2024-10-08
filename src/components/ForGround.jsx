import React, { useRef, useState } from "react";
import Card from "./Card";

function ForGround() {
  const ref = useRef(null);
  const [data, setData] = useState([
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
    // {
    //   desc: "Lorem ipsim jn dnsjn sajkcnj snci nsjnck js",
    //   filesize: ".9mb",
    //   close: false,
    //   tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" },
    // },
  ]);

  const [noteDesc, setNoteDesc] = useState(""); 
  const inputRef = useRef(null); 

  const[fileSize, setFileSize] = useState("");
  const sizeRef = useRef(null);

  // add a new note 
  const addNote = () => {
    if (!noteDesc.trim()) return; 

    const newNote = {
      desc: noteDesc,
      filesize: fileSize,  
      close: false,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "blue" },
    };
    
    setData([...data, newNote]); 
    setNoteDesc(""); 
    setFileSize("");

    
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  };
  const deleteNote = (index) => {
    const updatedData = data.filter((_, i) => i !== index); 
    setData(updatedData); 
  };

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full p-5 flex flex-wrap gap-5">
      {}
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} onDelete={() => deleteNote(index)} />
      ))}

      {/* Input field and button for adding a new note */}
      <div className="absolute bottom-4 flex justify-end right-5 w-full  h-10 gap-2 mt-40">
        <input
          ref={sizeRef}  
          type="text"
          value={fileSize}
          onChange={(e) => setFileSize(e.target.value)}
          placeholder="Note Heading"
          className="border-none p-2 rounded-lg  w-24"
        />
        <input
          ref={inputRef}  
          type="text"
          value={noteDesc}
          onChange={(e) => setNoteDesc(e.target.value)}
          placeholder="Write note"
          className="border-none p-2 rounded-lg  w-24"
        />
        

        <button
          onClick={addNote}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ForGround;
