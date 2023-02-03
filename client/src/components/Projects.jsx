import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectRow from "./ProjectRow";

export default function Projects() {

    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />;
    if (error) return `Something Went Wrong`;

    return (
        <>
        {!loading && !error && (
          <table className='table table-hover mt-3'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.projects.map(project => (
                <ProjectRow key={project.id} project={project} />
                
              ))}
            </tbody>
          </table>
        )}
    </>
    )
}
