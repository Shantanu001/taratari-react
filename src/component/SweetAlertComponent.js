import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";


export default function SwalAlert(props){
    console.log("props",props);
    let history = useHistory();
    return Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: "Don't save",
        dismiss :props.show
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        console.log("result",result);
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          history.push('/taratari-react');
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
          history.push('/form1')
        }else if(result.isDismissed){
          Swal.close();
        }
      })
};