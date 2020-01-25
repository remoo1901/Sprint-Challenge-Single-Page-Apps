import React from "react";

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form >
        <label htmlFor="search">Search</label>
        <input
          name="search1"
          type="search"
          onChange={props.handleChange}
          value={props.search}
          placeholder="search"
        />
        <button type="submit">Submit Info1</button>
      </form>
    </section>
  );
}
