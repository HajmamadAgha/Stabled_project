import React, { useState } from 'react';
import './CharacterOptions.css';

const CharacterOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="character-options">
      <h2>Character Options</h2>
      <form>
        <label>
          <input
            type="radio"
            value="Male"
            checked={selectedOption === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={selectedOption === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="Other"
            checked={selectedOption === 'Other'}
            onChange={handleChange}
          />
          Other
        </label>
      </form>
    </div>
  );
};

export default CharacterOptions;
