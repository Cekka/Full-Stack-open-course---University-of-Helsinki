export const Filter = ({searchName, onSearchName}) => {
  return (
    <div>
      filter shown with <input type="text" className="search-input" placeholder="Search by name" value={searchName} onChange={onSearchName} />
    </div>
  )
}