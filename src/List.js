import React from 'react';
import Car from './Car';


const List = () => {

  const oldcars = ['Fiat', 'Amba', 'Maruthi', 'zen', 'Hundai'];
  const oldnum = oldcars.length
  const newcars = ['Lamb', 'Tesla', 'RD'];
  const newnum = newcars.length
  const myList = oldcars.map((item) => <p>{item}</p>)
  const myitem = newcars[1]
  return (
    <>
      <Car cars={oldcars} number={oldnum} />
      <Car cars={newcars} number={newnum} />
    </>
  );
}
export default List