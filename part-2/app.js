function App() {
    return (
      <div>
        <Tweet
          name="john Doe"
          username="JD303"
          date={new Date().toDateString()}
          message="Hello"
        />
        <Tweet
          name="jane doe"
          username="djdojio"
          date={new Date().toDateString()}
          message="why?"
        />
        <Tweet
          name="jimmy doe"
          username="gsageeee"
          date={new Date().toDateString()}
          message="hey whats up?"
        />
      </div>
    );
  }