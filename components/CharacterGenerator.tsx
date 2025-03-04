import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const characterParts = {
  hair: ["Short", "Long", "Spiky", "Curly"],
  eyes: ["Blue", "Green", "Brown", "Red"],
  outfit: ["Armor", "Robe", "Casual", "Stealth Suit"],
  weapon: ["Sword", "Bow", "Staff", "Dagger"],
};

const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

export default function CharacterGenerator() {
  const [character, setCharacter] = useState<any>(null);

  const generateCharacter = () => {
    setCharacter({
      hair: getRandomElement(characterParts.hair),
      eyes: getRandomElement(characterParts.eyes),
      outfit: getRandomElement(characterParts.outfit),
      weapon: getRandomElement(characterParts.weapon),
    });
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <Button onClick={generateCharacter} className="mb-4">Generate Character</Button>
      {character && (
        <div className="border p-4 rounded-xl bg-white shadow-lg">
          <h2 className="text-xl font-bold">Generated Character</h2>
          <p><strong>Hair:</strong> {character.hair}</p>
          <p><strong>Eyes:</strong> {character.eyes}</p>
          <p><strong>Outfit:</strong> {character.outfit}</p>
          <p><strong>Weapon:</strong> {character.weapon}</p>
        </div>
      )}
    </div>
  );
}
