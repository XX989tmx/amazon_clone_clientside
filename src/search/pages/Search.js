import React from 'react';

const Search = (props) => {
    return (
      <div>
        search page
        {props.SearchResults.map((v,i) => <span key={i}>{v.name}</span>)}
      </div>
    );
}

export default Search;
