import NavBar from './components/NavBar';
import Content from './pages/ProductList';
import app from './styles/app.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import DetailedItem from './pages/DetailedItem';
import CartPage from './pages/CartPage';
import { ProductContext } from './context/productList';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_CATEGORY } from './query/product';
import { useState, useEffect } from 'react';


const App = () => {
  const { data, error, loading, refetch } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: {
      "input": {
        "title": "all"
      }
    }
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (error) {
        console.error(error);
        return <div>Error!</div>;
      } else if (loading) {
        console.log('loading');
      } else {
        setLoading(false);
      }
    }, 1000)
  }, [data]);

  return (
    <div>
      {isLoading ? <div className="loader">Loading...</div> :
        <ProductContext.Provider value={data.category.products}>
          <Router>
            <div className="App">
              <div className={app}>
                <div className="body">
                  <NavBar refetch={refetch} />
                  <Routes>
                    <Route exact path="/" element={<Content />} />
                    <Route path="/clothes" element={<Content />} />
                    <Route path="/tech" element={<Content />} />
                    <Route path="/info/:id" element={<DetailedItem />} />
                    <Route path="/cart" element={<CartPage />} />
                  </Routes>
                </div>
              </div>
            </div>
          </Router>
        </ProductContext.Provider>
      }
    </div>
  );
}

export default App;
