import { CloseCircle } from 'iconsax-react';
import React from 'react';
import './manageCategory.scss';

const ManageCategory = () => {
    return (
        <div className="manageCategory">
            <div className="manageCategory-Item">
                <span>Loại 20201020</span>
                <CloseCircle className="manageCategory-Icon" size={24} />
            </div>
            <div className="manageCategory-Item">
                <span>Loại 1</span>
                <CloseCircle className="manageCategory-Icon" size={24} />
            </div>
            <div className="manageCategory-Item">
                <span>Loại 1</span>
                <CloseCircle className="manageCategory-Icon" size={24} />
            </div>
        </div>
    );
};

export default ManageCategory;
