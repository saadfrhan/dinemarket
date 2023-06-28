import { SearchIcon } from 'lucide-react'
import React from 'react'

function Search() {
  return (<div className="flex items-center w-[30%] gap-2 border-[#e4e5eb] rounded-md border-[1px] px-2 text-xs">
    <SearchIcon width="1em" />
    <input type="text" placeholder='What are you looking for' />
  </div>)
}

export default Search