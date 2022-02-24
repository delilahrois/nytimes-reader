import React from 'react';
import './Menu.css';

const Menu = ({ filterNewsFeed }) => {

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="keys">
        <label><input type="radio" value="home" name="key" onChange={(e) => filterNewsFeed(e)}/> Home </label>
        <label><input type="radio" value="arts" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Arts </label>
        <label><input type="radio" value="automobiles" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Automobiles </label>
        <label><input type="radio" value="books" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Books </label>
        <label><input type="radio" value="business" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Business </label>
        <label><input type="radio" value="fashion" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Fashion </label>
        <label><input type="radio" value="food" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Food </label>
        <label><input type="radio" value="health" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Health </label>
        <label> <input type="radio" value="insider" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Insider </label>
        <label><input type="radio" value="magazine" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Magazine </label>
        <label><input type="radio" value="movies" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Movies </label>
        <label><input type="radio" value="nyregion" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> NY Region </label>
        <label><input type="radio" value="obituaries" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Obituaries </label>
        <label><input type="radio" value="opinion" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Opinion </label>
        <label><input type="radio" value="politics" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Politics </label>
        <label><input type="radio" value="realestate" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Real Estate </label>
        <label><input type="radio" value="science" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Science </label>
        <label><input type="radio" value="sports" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Sports </label>
        <label><input type="radio" value="sundayreview" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Sunday Review </label>
        <label> <input type="radio" value="technology" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Technology </label>
        <label> <input type="radio" value="theater" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Theater </label>
        <label><input type="radio" value="t-magazine" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> T-Magazine </label>
        <label><input type="radio" value="travel" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Travel </label>
        <label><input type="radio" value="upshot" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> Upshot </label>
        <label><input type="radio" value="us" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> US </label>
        <label><input type="radio" value="world" name="key" className="key" onChange={(e) => filterNewsFeed(e)}/> World </label>
      </div>
    </div>
  )
}

export default Menu;