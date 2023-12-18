import React, { useState, useEffect } from "react";
import "./demo.css";
import SubHeading from "./SubHeading";
import ContextData from "../../../model/context";

const fetchChampions = async () => {
  const response = await fetch("champion.txt");
  let text = await response.text();
  text = text.split("\n"); // 줄바꿈으로 분리하여 배열로 변환
  text = text.filter((item) => item); // 빈 문자열 제거
  return text;
};

const ChampionSearch = () => {
  const [champions, setChampions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChampion, setSelectedChampion] = useState(null);

  useEffect(() => {
    fetchChampions().then(setChampions);
  }, []);

  const handleSelectChampion = (champion) => {
    setSelectedChampion(champion);
  };

  const filteredChampions = champions.filter((champion) =>
    champion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a champion..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="champion-list">
        {filteredChampions.map((champion) => (
          <div
            key={champion}
            className={`champion-item ${
              selectedChampion === champion ? "selected" : ""
            }`}
            onClick={() => handleSelectChampion(champion)}
          >
            {champion}
          </div>
        ))}
      </div>
    </div>
  );
};

let Demo = () => (
  <div id="demo">
    <SubHeading
      heading={ContextData.Demo.heading}
      context={<ChampionSearch />}
      contextHeight={1000}
    />
  </div>
);

export default Demo;
