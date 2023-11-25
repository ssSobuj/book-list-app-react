/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdDelete } from "react-icons/md";
export default function BookRow(props) {
    const {title,author,isbn,pubYear} = props.book
    
  return (
    <>
        <tr>
            <td>{isbn}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{pubYear}</td>
            <td className="delete-btn" onClick={()=>props.deleteBook(isbn)}>    
                <MdDelete />
            </td>       
        </tr>
    </>
  )
}
