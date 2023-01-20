import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#0087ff" : "#0087ff"};
  color: ${props => props.primary ? "#581090" : "#581090"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://utd.edu.mx/"><Button>UTD</Button></a>
        <a href="https://github.com/DanielComac"><Button primary>GitHub</Button></a>
        <a href='https://www.instagram.com/daniel.compean_m/'><Button>Instagram</Button></a>
      </div>
    </div>
  );
}

export default App;
