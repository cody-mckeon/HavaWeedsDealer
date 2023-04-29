import axios from 'axios';
import { Link } from 'react-router-dom';
//import data from '../data';
import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, services: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, services }, dispatch] = useReducer(reducer, {
    services: [],
    loading: true,
    error: '',
  });
  //const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/services');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Our Services</h1>
      <div className="services">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          services.map((service) => (
            <div className="service" key={service.slug}>
              <Link className="serviceName" to={`/service/${service.slug}`}>
                <p className="serviceName">{service.name}</p>
              </Link>
              <Link to={`/service/${service.slug}`}>
                <img src={service.image} alt={service.name} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
