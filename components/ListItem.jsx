
export const ListItem = ({data}) => {
  return (
    <li key={data.id} className="list-group-item">
                        <input
                        className="form-check-input me-1" 
                        type="checkbox" 
                        value="" 
                        id="secondCheckbox"
                        />
                        <label 
                        className="form-check-label" 
                        htmlFor="secondCheckbox">
                        <span className="text-dark">{data.title}</span></label>
     </li>
  )
}
