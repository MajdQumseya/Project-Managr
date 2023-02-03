
import { FaTrash, FaRegEdit } from "react-icons/fa"
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";
// import { GET_PROJECTS } from "../queries/projectQueries";
export default function ProjectRow({project}) {

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: {
            id: project.id
        },
    });
    
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td>{project.status}</td>

            <td>
                <button onClick={deleteProject} className="btn btn-danger btn-sm">
                    <FaTrash />
                </button>
            </td>


            <td>
                <button className="btn btn-secondary btn-sm">
                    <FaRegEdit />
                </button>
            </td>
        </tr>
    )
}

