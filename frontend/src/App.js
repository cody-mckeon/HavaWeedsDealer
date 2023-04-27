import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Hava Weeds Dealer</a>
      </header>
      <main>
        <h1>Our Services</h1>
        <div className="services">
          {data.services.map((service) => (
            <div className="service" key={service.slug}>
              <a className="serviceName" href={`/service/${service.slug}`}>
                <p className="serviceName">{service.name}</p>
              </a>
              <img src={service.image} alt={service.name} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
