const { useState, useEffect } = React;

function App() {
  // State
  const [tokens, setTokens] = useState(100);
  const [models, setModels] = useState([
    { id: 1, name: "Stable Diffusion", price: 15 },
    { id: 2, name: "GPT-4", price: 25 }
  ]);
  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const root = document.querySelector('#root');
    root.classList.toggle('dark');
    setIsDark(!isDark);
  };

  // Buy model
  const buyModel = (id) => {
    const model = models.find(m => m.id === id);
    if (tokens >= model.price) {
      setTokens(tokens - model.price);
      alert(`Purchased ${model.name}!`);
    }
  };

  return (
    <div className="marketplace">
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {isDark ? '☀️' : '🌙'}
      </button>
      
      <h1>AI Marketplace</h1>
      
      <div className="token-counter">
        <span>Tokens: {tokens}</span>
      </div>
      
      <div className="model-grid">
        {models.map(model => (
          <div key={model.id} className="model-card">
            <h3>{model.name}</h3>
            <p>Price: {model.price} tokens</p>
            <button onClick={() => buyModel(model.id)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));