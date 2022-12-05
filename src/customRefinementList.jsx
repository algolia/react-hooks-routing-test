import { useRefinementList } from "react-instantsearch-hooks-web"

export const CustomRefinementList = (props) => {
  const { items, refine } = useRefinementList(props)

  return (
    <>
      {items.map((item) => (
        <div key={item.value} onClick={() => refine(item.value)}>
          {item.label}
        </div>
      ))}
    </>
  )
}
