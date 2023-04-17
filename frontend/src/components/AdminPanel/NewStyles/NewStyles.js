import React, { useState } from 'react';
import './NewStyles.css';

const NewStyles = () => {
  const [styleName, setStyleName] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the API call to add a new style
    console.log('Submitting new style:', { styleName, prompt });
  };

  return (
    <div className="new-styles">
      <h3>Add New Style</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Style Name
          <input
            type="text"
            value={styleName}
            onChange={(e) => setStyleName(e.target.value)}
            required
          />
        </label>
        <label>
          Prompt
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Style</button>
      </form>
    </div>
  );
};

export default NewStyles;
