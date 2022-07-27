import './App.css';
import Nav from './components/Nav'
import data from './data.js'
import Destination from './components/Destination'
function App() {

  const destinations = data.map(item => {
    return (
      <Destination
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      <section className='journal-section'>
        { destinations }
      </section>
    </div>
  );
}

export default App;
