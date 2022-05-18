import { React, useState } from 'react'

function Search() {
    const [searchValue, setSearchValue] = useState('')

    const handleSearchButtonClick = () => {
        console.log(searchValue)
    }

    return (
        <div>
            <input
                type="text"
                name="search-value"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button onClick={() => handleSearchButtonClick()}>Search</button>
        </div>
    )
}

export default Search
