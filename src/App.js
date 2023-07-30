import './App.css';

function App() {
  return (
    <section className="c-wrapper">
    <div className="flexCenter paddings innerWidth c-container">
      <div>
        <h4> I'm in Germany</h4>
      <section class='times'>
          <label htmlFor='location-info' className='loca_info'></label>
          <div>
            <h4>SF</h4>
            <output>00:00:00</output>
          </div>
      </section>
      </div>
      <div>
      <h4> You're in Unite States</h4>
      <select>
        <h2 className='label-wrapper'>
          <label htmlFor='location-info' className='loca_info'></label>
        </h2>
      </select>
      </div>
    </div>
    </section>
  );
}

export default App;