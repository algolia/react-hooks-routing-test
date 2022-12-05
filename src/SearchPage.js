import { useSearchBox, useHits } from "react-instantsearch-hooks-web"

function SearchPage() {
  const { refine } = useSearchBox()
  refine("bag")

  const { hits } = useHits()

  return (
    <div>
      {hits.map((hit) => (
        <p>{JSON.stringify(hit)}</p>
      ))}
    </div>
  )
}

export default SearchPage
