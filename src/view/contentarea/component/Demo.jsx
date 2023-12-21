import React, { useState, useEffect } from "react";
import "./demo.css";
import SubHeading from "./SubHeading";
import ContextData from "../../../model/context";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

// 검색 컴포넌트
const SearchComponent = ({ champions, onSelection }) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showResults, setShowResults] = useState(false); // 검색 결과 표시 여부

  useEffect(() => {
    if (query.length > 0) {
      const filtered = champions.filter((champion) =>
        champion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
      setShowResults(true); // 결과가 있을 때만 결과 창 표시
    } else {
      setFilteredResults([]);
      setShowResults(false); // 쿼리가 비어있으면 결과 창 숨김
    }
  }, [query, champions]);

  const handleSelect = (champion) => {
    setQuery(champion); // 선택한 챔피언으로 쿼리 업데이트
    onSelection(champion); // 부모 컴포넌트에 선택 사항 전달
    setShowResults(false);
  };

  return (
    <div id="search-component">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {showResults && (
        <div className="search-results">
          {filteredResults.map((result, index) => (
            <div key={index} onClick={() => handleSelect(result)}>
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 상위 컴포넌트
let Demo = () => {
  const [champions, setChampions] = useState([]);
  const [searches, setSearches] = useState(Array(10).fill(""));
  const [randomResult, setRandomResult] = useState(null);

  useEffect(() => {
    fetch("champion.txt")
      .then((response) => response.text())
      .then((data) => data.split("\n"))
      .then((data) => {
        setChampions(data.filter((item) => item));
      });
  }, []);

  const handleSelection = (index, value) => {
    const newSearches = [...searches];
    newSearches[index] = value;
    setSearches(newSearches);
  };

  const allChampionsSelected = () => {
    return searches.every((search) => search !== "");
  };

  const isDuplicatePresent = () => {
    const uniqueSearches = new Set(searches);
    return uniqueSearches.size !== searches.length;
  };

  const generateRandomResult = () => {
    if (!allChampionsSelected()) {
      setRandomResult("모든 챔피언을 선택해주세요.");
    } else if (isDuplicatePresent()) {
      // 예: 랜덤한 챔피언 선택
      setRandomResult("챔피언은 중복될 수 없습니다.");
    } else {
      const RedTeamWinRate = (40 + Math.random() * 20).toFixed(2);
      setRandomResult(
        `레드 팀 승률: ${RedTeamWinRate}\n블루 팀 승률: ${100 - RedTeamWinRate}`
      );
    }
  };

  return (
    <div id="demo">
      <SubHeading
        heading={ContextData.Demo.heading}
        context={
          <GridContainer>
            {searches.map((search, index) => (
              <SearchComponent
                key={index}
                champions={champions}
                onSelection={(value) => handleSelection(index, value)}
              />
            ))}
            <button onClick={generateRandomResult}>랜덤 결과 생성</button>
            {randomResult && <div>{randomResult}</div>}
          </GridContainer>
        }
        contextHeight={800}
      />
    </div>
  );
};

export default Demo;
