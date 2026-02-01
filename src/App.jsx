import('./App.css'); 
import { useState } from 'react';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  // let totalStrength = team.reduce((total, fighter) => {
  //   return total + fighter.strength;
  // }, 0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);


  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money!");
      return;
    }
    
    const newTeam = [...team, fighter] 
    const updateZombieFighters = zombieFighters.filter(( zombie ) => zombie.id !== fighter.id);
    const remainingMoney = money - fighter.price;

    // State updates
    setTeam(newTeam);
    // setTeam([...team, fighter]);
    setZombieFighters(updateZombieFighters);
    setMoney(remainingMoney);
    // setMoney(money - fighter.price)
  };

const handleRemoveFighter = (fighter) => {
  const updateTeam = team.filter((t) => t.id !== fighter.id);

  // add the fighter back to zombieFighters array
  const newZombieFighters = [...zombieFighters, fighter]
  const refundMoney = money + fighter.price;

  setTeam(updateTeam);
  setZombieFighters(newZombieFighters);
  setMoney(refundMoney);
}

// Alternative to .reduce in <let totalStrength = team.reduce>
const calculateStrength = (team) => {
  // reduce here, doesn't need to be a state variable
  // team.reduce((total, fighter) => {
  // return total + fighter.strength
  // }, 0)
  let totalStrength = 0;
  team.forEach(fighter => totalStrength += fighter.strength)
  return totalStrength;
}

const calculateAgility = (team) => {
  let totalAgility = 0;
  team.forEach(fighter => totalAgility += fighter.agility)
  return totalAgility;
}
const totalStrength = calculateStrength(team);
const totalAgility = calculateAgility(team);

// zombieTeam.map((zombie) => {
//     const newMoney = () => {
//       setMoney(prevMoney => prevMoney - zombie.price); 
//       newMoney(); 
//     }; 
// });


  return (
    <>
      <h1>Hello world!</h1>
      <h2>Team</h2>
      <p>{team.length === 0 ? "Pick some team members!" : ""}</p>
      <ul>
          {team.map((fighter, index) => (
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} />
              <div>
                <h3>{fighter.name}</h3>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(fighter)}>Remove Fighter</button>
              </div>
            </li>
          ))}
        </ul>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
      <h2>Fighters</h2>
      <h2>Money: {money}</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <div>
              <h3>{fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add Fighter</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Money: £{money} </h2>
      <h2>Team: {team.map((zombie, index) => (
        <p key={index}>{zombie.name}</p>
      ))} 
      </h2>
    </>
  );
};

export default App; 