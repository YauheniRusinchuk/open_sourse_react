import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <div className='search_container'>
        <form>
          <input type='text' placeholder="Search ..." /><br/>
          <input type='submit' value="GO ..." />
          </form>
      </div>
    );
  }
}

export default Search;
