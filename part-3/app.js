function App() {
    return (
      <div>
        <Person
          name="john"
          age={34}
          hobbies={["pool", "watching tv", "hiking"]}
        />
        <Person 
        name="Mike" 
        age={34} 
        hobbies={["painting", "typing"]} 
        />
        <Person
          name="Bart"
          age={10}
          hobbies={["skateboarding", "swimming"]}
        />
        <Person
          name="Lisa"
          age={8}
          hobbies={["reading", "flute", "saxiphone"]}
        />
      </div>
    );
  }