import React from 'react';

const DeleteConfirmModal = ({setSureToDelete}) => {
    return (
        <div>
            <input type="checkbox" id="cofirmation-modal-to-delete-doctor" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
                    <p className="py-4">If you are sure, click on the confirm button. If not click on cancel button.</p>
                    <div className="modal-action">
                        <label onClick={() => setSureToDelete(false)} htmlFor="cofirmation-modal-to-delete-doctor" className="btn btn-accent">Cancel</label>
                        <label onClick={() => setSureToDelete(true)} htmlFor="cofirmation-modal-to-delete-doctor" className="btn btn-secondary">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;