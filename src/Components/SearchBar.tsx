import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
};

function SearchBar({ onSearch }: Props) {

  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    onSearch(city);
  };

  return (
    <div className="search-container">

      <input
        type="text"
        className="search-input"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />

      <button
        className="search-btn"
        onClick={handleSearch}
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;