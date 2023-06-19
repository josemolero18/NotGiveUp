import { ListItem } from "./ListItem";


export const SeeData = ({data}) => {

    const ArrayOfData = data;
  
    return (
    <>
        <ul className="list-group">
            {ArrayOfData.map((data) =>(
                <ListItem data={data}/>
            ))}
        </ul>
    </>
  )
}