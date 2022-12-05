import { useRefinementList } from 'react-instantsearch-hooks-web'

export const CustomRefinementList = (props) => {
  const { items, refine } = useRefinementList(props)
  console.log(items)

  return (
    <>
      {items.map((item) => (
        <div onClick={() => refine(item.value)}>{item.label}</div>
      ))}
    </>
  )
}
