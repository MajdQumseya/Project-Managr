
import { FaTrash, FaRegEdit } from "react-icons/fa"
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";
// import { GET_PROJECTS } from "../queries/projectQueries";
export default function ProjectCard( {project} ) {

    // const [deleteProject] = useMutation(DELETE_PROJECT, {
    //     variables: {
    //         id: project.id
    //     },
    // });
    // console.log(project)

    return (
        <div className="col-md-6">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{project.name}</h5>
                        <a className="btn btn-light" href={`/project/${project.id}`}>View</a>
                    </div>
                    <p className="small">Status: <strong>{project.status}</strong></p>
                </div>
            </div>
        </div>
    )
}

