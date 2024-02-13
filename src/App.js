import { useEffect, useState } from 'react';
import {IoSearchOutline} from 'react-icons/io5'
import Card from './components/Card';
import styleApp from './app.module.css'

export default function App () {

  return(
    <>
      <header className={styleApp.header}>
        <h1>Music App</h1>
        <div className={styleApp.inpBox}>
          <input type='text' placeholder='Music'/>
          <IoSearchOutline className={styleApp.iconSearch}/>
        </div>
        <nav className={styleApp.nav}>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className={styleApp.main}>
        <Card />
      </section>
    </>
  );

}