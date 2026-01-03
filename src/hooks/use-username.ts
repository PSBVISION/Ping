import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const ADJECTIVES = ["Swift", "Silent", "Brave", "Clever", "Mighty"];
const STORAGE_KEY = "chat_app_user_name";
const generateUserName = () => {
  const word = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  return `anonymous-${word.toLowerCase()}-${nanoid(5)}`;
};
export const useUsername = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const main = () => {
      const storedName = localStorage.getItem(STORAGE_KEY);
      if (storedName) {
        setUserName(storedName);
        return;
      }
      const generatedName = generateUserName();
      localStorage.setItem(STORAGE_KEY, generatedName);
      setUserName(generatedName);
    };
    main();
  }, []);
  return {userName};
};
