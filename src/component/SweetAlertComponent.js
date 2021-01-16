import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";


export default function SwalAlert(){
    let history = useHistory();
    return Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: "Don't save"
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          history.push('/taratari-react');
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
          history.push('/form1')
        }
      })
};