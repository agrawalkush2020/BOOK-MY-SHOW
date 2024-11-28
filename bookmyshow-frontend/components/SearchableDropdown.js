// components/SearchableDropdown.js
import { useState } from 'react';

const SearchableDropdown = ({ 
  options,
  handleChange = ()=>{},
  selectedValue=""
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(selectedValue);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    handleChange(option);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dropdown-container">
      <div className="dropdown-input">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsDropdownOpen(true)}
        />
        <button
          className="dropdown-toggle"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          ▼
        </button>
      </div>

      {isDropdownOpen && (
        <ul className="dropdown-options">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="dropdown-option"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="dropdown-no-options">No options found</li>
          )}
        </ul>
      )}

      {selectedOption && <p>Selected: {selectedOption}</p>}

      <style jsx>{`
        .dropdown-container {
          position: relative;
          width: 200px;
        }

        .dropdown-input {
          display: flex;
          align-items: center;
          border: 1px solid #ccc;
          padding: 5px;
          border-radius: 5px;
        }

        input {
          border: none;
          outline: none;
          width: 100%;
        }

        .dropdown-toggle {
          background: none;
          border: none;
          cursor: pointer;
        }

        .dropdown-options {
          list-style-type: none;
          padding: 0;
          margin: 0;
          border: 1px solid #ccc;
          max-height: 150px;
          overflow-y: auto;
          position: absolute;
          width: 100%;
          background-color: white;
          z-index: 1000;
        }

        .dropdown-option {
          padding: 10px;
          cursor: pointer;
        }

        .dropdown-option:hover {
          background-color: #f0f0f0;
        }

        .dropdown-no-options {
          padding: 10px;
          color: #888;
        }
      `}</style>
    </div>
  );
};

export default SearchableDropdown;
