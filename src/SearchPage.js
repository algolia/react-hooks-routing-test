import { useSearchBox, useHits } from 'react-instantsearch-hooks-web'

import { CustomRefinementList } from './customRefinementList'

function SearchPage() {
  const { refine } = useSearchBox()
  refine('bag')

  const { hits } = useHits()

  return (
    <div className="srp">
      <div className="facets">
        <CustomRefinementList attribute="brand" />
      </div>
      <div className="hits">
        {hits.map((hit) => (
          <p>{JSON.stringify(hit)}</p>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
