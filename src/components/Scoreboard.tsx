import React from 'react';

interface ScoreboardProps {
  battingTeam: {
    players: {
      name: string;
      runs: number;
      balls: number;
    }[];
    logo: string;
  };
  bowlingTeam: {
    currentBowler: {
      name: string;
      wickets: number;
      runs: number;
      overs: number;
    };
    logo: string;
  };
  target: number;
  currentScore: {
    runs: number;
    wickets: number;
    overs: number;
  };
  thisOver: string;
}

const Scoreboard: React.FC<ScoreboardProps> = ({
  battingTeam,
  bowlingTeam,
  target,
  currentScore,
  thisOver
}) => {
  return (
    <div className="frame-container">
      {/* Top-right IPL Logo */}
      <img 
        className="ipl-logo"
        src="https://cdn.search.brave.com/serp/v1/static/img/app/rh/sports/cricket/league/dbbd456a18a5d2a3d19e0aac571c753647d19e1b87498cc3cf639c900c53d1e1-cdpy3h6bk0o69jdx8a39g4msa.svg"
        alt="IPL Logo"
      />

      {/* Main Score Overlay */}
      <div className="score-overlay">
        {/* Left: Batting Team */}
        <div className="left">
          <img src={battingTeam.logo} alt="Batting Team Logo" />
          <div className="batsmen">
            {battingTeam.players.map((player, index) => (
              <div key={index}>
                <span>{player.name}</span>
                <span>{player.runs} ({player.balls})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Score Info */}
        <div className="center">
          <div className="label">SCORING PARTNER</div>
          <div className="score-value">
            {currentScore.runs} - {currentScore.wickets}
          </div>
          <div className="target-over">
            TARGET: {target} | OVERS: {currentScore.overs}
          </div>
        </div>

        {/* Right: Bowling Team */}
        <div className="right">
          <div className="bowler-info">
            {bowlingTeam.currentBowler.name} {bowlingTeam.currentBowler.wickets}-
            {bowlingTeam.currentBowler.runs} ({bowlingTeam.currentBowler.overs})<br />
            <span className="over-label">THIS OVER</span>
          </div>
          <img src={bowlingTeam.logo} alt="Bowling Team Logo" />
        </div>
      </div>
    </div>
  );
};

export default Scoreboard; 