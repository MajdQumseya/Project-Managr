import {useState} from 'react'
import {FaProjectDiagram} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_PROJECT } from '../mutations/projectMutations';

export default function AddProjectModal() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const [addProject] = useMutation(ADD_PROJECT, {
        variables: {
          name, description, status
        },
      });

    const onSubmit = (e) => {
        e.preventDefault();
        addProject()
    }
    return (
        <>

            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addProjectModal">
                <div className="d-flex align-items-center">
                    <FaProjectDiagram className="icon" /> 
                    <div>Add Project</div>
                </div>
            </button>


            <div className="modal fade" id="addProjectModal" tabIndex="-1" role="dialog" aria-labelledby="addProjectModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addProjectModalLabel">Add Project</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input className='form-control' type="text"  id="name" value={name} onChange={(e) => setName(e.target.value)}/>

                                    <label className="form-label">Description</label>
                                    <input className='form-control' type="text"  id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>

                                    <label className="form-label">Status</label>
                                    <input className='form-control' type="text"  id="status" value={status} onChange={(e) => setStatus(e.target.value)}/>
                                </div>

                                <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
