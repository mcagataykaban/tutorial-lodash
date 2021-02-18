import logo from './logo.svg';
import React,{useEffect,useState} from 'react'
import './App.css';
import SupplierList from './components/SupplierList'
import OrderList from './components/OrderList'
import _ from 'lodash'

function App() {
  const [suppliers, setSuppliers] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('https://northwind.now.sh/api/suppliers')
        .then((res) => res.json())
        .then((data) => { 
          setSuppliers(_.orderBy(data,['companyName'],['asc']))
        })

        fetch('https://northwind.now.sh/api/orders')
        .then((res) => res.json())
        .then((data) => { 
          setOrders(_.orderBy(data,['shipName'],['asc']))
        })
}, [])
  return (
    <div className="App">
      <SupplierList setSuppliers={setSuppliers} suppliers={suppliers} />
      <OrderList orders={orders} />
    </div>
  );
}

export default App;
