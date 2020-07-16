import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContaners from './containers/ProductContaners';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

function App() {
  return (
    <div className="hidden-sn animated deep-purple-skin">
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductContaners />
          <MessageContainer/>
          <CartContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
