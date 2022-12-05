import { useSearchBox, useHits } from "react-instantsearch-hooks-web"

import { CustomRefinementList } from "./customRefinementList"

function SearchPage() {
  const { refine } = useSearchBox()
  refine("bag")

  const { hits } = useHits()

  return (
    <div className="srp">
      <div className="facets">
        <h2>Refinement List</h2>
        <CustomRefinementList attribute="brand" />
      </div>
      <div className="hits">
        <h2>Hits</h2>
        {hits.map((hit) => (
          <div>{hit.name}</div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
