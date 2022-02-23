import React from 'react';
import './Menu.css';

const Menu = () => {

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="keys">
        <label><input type="radio" value="home" name="key"/> Home </label>
        <label><input type="radio" value="arts" name="key" className="key"/> Arts </label>
        <label><input type="radio" value="automobiles" name="key" className="key"/> Automobiles </label>
        <label><input type="radio" value="books" name="key" className="key"/> Books </label>
        <label><input type="radio" value="business" name="key" className="key"/> Business </label>
        <label><input type="radio" value="fashion" name="key" className="key"/> Fashion </label>
        <label><input type="radio" value="food" name="key" className="key"/> Food </label>
        <label><input type="radio" value="health" name="key" className="key"/> Health </label>
        <label> <input type="radio" value="insider" name="key" className="key"/> Insider </label>
        <label><input type="radio" value="magazine" name="key" className="key"/> Magazine </label>
        <label><input type="radio" value="movies" name="key" className="key"/> Movies </label>
        <label><input type="radio" value="nyregion" name="key" className="key"/> NY Region </label>
        <label><input type="radio" value="obituaries" name="key" className="key"/> Obituaries </label>
        <label><input type="radio" value="opinion" name="key" className="key"/> Opinion </label>
        <label><input type="radio" value="politics" name="key" className="key"/> Politics </label>
        <label><input type="radio" value="realestate" name="key" className="key"/> Real Estate </label>
        <label><input type="radio" value="science" name="key" className="key"/> Science </label>
        <label><input type="radio" value="sports" name="key" className="key"/> Sports </label>
        <label><input type="radio" value="sundayreview" name="key" className="key"/> Sunday Review </label>
        <label> <input type="radio" value="technology" name="key" className="key"/> Technology </label>
        <label> <input type="radio" value="theater" name="key" className="key"/> Theater </label>
        <label><input type="radio" value="t-magazine" name="key" className="key"/> T-Magazine </label>
        <label><input type="radio" value="travel" name="key" className="key"/> Travel </label>
        <label><input type="radio" value="upshot" name="key" className="key"/> Upshot </label>
        <label><input type="radio" value="us" name="key" className="key"/> US </label>
        <label><input type="radio" value="world" name="key" className="key"/> World </label>
      </div>
    </div>
  )
}

export default Menu;