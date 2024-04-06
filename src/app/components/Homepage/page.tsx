import { useEffect, useState } from "react";

export default function Homepage() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const timeoutIds: any = [];

    ["Text 139", "BIG WORDS HERE CAN YOU SEE ME Text 2", "How big are the words, I don't know Text 3", "How big are the words, I don't know  Text 4"].forEach((text, i) => {
      const timeoutId = setTimeout(() => {
        setTexts((prev) => [...prev, text]);
      }, 2000 * i);

      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div>
      {texts.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}