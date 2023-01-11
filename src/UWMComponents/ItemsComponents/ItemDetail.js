import ItemAxios from '../../Axios/ItemServices';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Itemdetail(props) {

  let [item, setItem] = useState({});
  let { id } = useParams();
  let itemServices = new ItemAxios();

  async function getItem() {
    setItem(await itemServices.getItem(id));
  }

  useEffect(() => { 
    getItem();
  }, [id]);


  console.log(item);
  return (
    <div>
      <h1>Item Detail</h1>
      <p>Title: {item.title}</p>
      <p>Id: {item.id}</p>
    </div>
  );
}