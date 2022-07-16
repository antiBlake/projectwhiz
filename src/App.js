import React from 'react';
import { Route, Routes} from 'react-router-dom'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Pricing from './Pages/Pricing';
import Products from './Pages/Products';
import Sharedlayout from './Pages/Sharedlayout';
import Signup from './Pages/Signup';
import Faq from './Components/Faq';
import data from './Components/Data';


function App() {
  const faq = data.map(item =>{
    
    return (<Faq
       key={item.id}
        {...item} />
    )
    
  })
  return (
    <>

      <Routes>
        <Route path='/' element={<Sharedlayout />}>
          <Route index element ={<Home />} />
          <Route path='/about'element={<About />} />
          <Route path='/contact'element={<Contact />} />
          <Route path='/login'element={<Login />} />
          <Route path='/pricing'element={<Pricing />} />
          <Route path='/products'element={<Products />} />
          <Route path='/signup'element={<Signup />} />

        </Route>
      </Routes>


      </>

  );
}

export default App;
