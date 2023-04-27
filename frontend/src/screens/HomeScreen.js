import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Our Services</h1>
      <div className="services">
        {data.services.map((service) => (
          <div className="service" key={service.slug}>
            <Link className="serviceName" to={`/service/${service.slug}`}>
              <p className="serviceName">{service.name}</p>
            </Link>
            <Link to={`/service/${service.slug}`}>
              <img src={service.image} alt={service.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
