import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
};

function SearchBar({ onSearch }: Props) {

  const [city, setCity] = useState("");

  return (
    <div className="input-group mb-4">

      <input
        className="form-control"
        placeholder="Enter city..."
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="btn btn-dark"
        onClick={() => onSearch(city)}
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;