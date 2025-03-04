import React, { useState } from "react";

const characters = [
  {
    name: "Han Tail",
    description: "A warrior who cannot use magic, wielding a longsword and a revolver.",
    image: "/characters/char1.png",
  },
  {
    name: "Shu Lights",
    description: "A beast tamer with a bowgun, accompanied by a small slime.",
    image: "/characters/char2.png",
  },
  {
    name: "Ritz Khan",
    description: "A rogue with twin daggers, agile but often misses attacks.",
    image: "/characters/char3.png",
  },
  {
    name: "Leo Khan",
    description: "A sniper with a confident smirk, carrying a sniper rifle and an RPG.",
    image: "/characters/char4.png",
  },
  {
    name: "Tangrang Hoover",
    description: "A tank who absorbs damage, often complains after taking hits.",
    image: "/characters/char5.png",
  },
  {
    name: "Doctor",
    description: "A reluctant healer, a real medical student forced into battle.",
    image: "/characters/char6.png",
  },
];

export default function CharacterGenerator() {
  const [character, setCharacter] = useState(null);

  const generateCharacter = () => {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    setCharacter(randomCharacter);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <button
        onClick={generateCharacter}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Generate Character
      </button>
      
      {character && (
        <div className="border p-4 rounded-xl bg-white shadow-lg text-center">
          <h2 className="text-xl font-bold">{character.name}</h2>
          <img src={character.image} alt={character.name} className="w-32 h-32 mx-auto my-4" />
          <p>{character.description}</p>
        </div>
      )}
    </div>
  );
}
