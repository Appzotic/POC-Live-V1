import React, { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import './styles/Scoreboard.css';

// Sample data - In a real application, this would come from your backend
const initialData = {
  battingTeam: {
    players: [
      { name: "LALIT", runs: 1, balls: 3 },
      { name: "KESHAV", runs: 32, balls: 9 }
    ],
    logo: "https://i.pinimg.com/736x/4f/f9/99/4ff99925fd51296daf76425b11c04195.jpg"
  },
  bowlingTeam: {
    currentBowler: {
      name: "SHUBHAM",
      wickets: 0,
      runs: 0,
      overs: 0
    },
    logo: "https://i.pinimg.com/736x/1f/8d/d1/1f8dd186608655e41315178cb8edb688.jpg"
  },
  target: 133,
  currentScore: {
    runs: 37,
    wickets: 1,
    overs: 2
  },
  thisOver: "THIS OVER"
};

function App() {
  const [scoreData, setScoreData] = useState(initialData);
  const [isUpdating, setIsUpdating] = useState(false);

  // Simulate score updates - In a real application, this would be replaced with WebSocket or API calls
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setScoreData(prevData => ({
        ...prevData,
        currentScore: {
          ...prevData.currentScore,
          runs: prevData.currentScore.runs + Math.floor(Math.random() * 2)
        }
      }));
      setIsUpdating(true);
      setTimeout(() => setIsUpdating(false), 300);
    }, 5000);

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'fixed', 
      top: 0, 
      left: 0,
      backgroundColor: 'transparent',
      overflow: 'hidden',
      margin: 0,
      padding: 0
    }}>
      <Scoreboard {...scoreData} />
    </div>
  );
}

export default App;
