import React from 'react';

const Categories = ({categories, filterItems}) => {
    return (
        <React.Fragment>
            <div className="btn-container">
                {
                    categories.map((category, index) => {
                        return <button type="button" key={index} className="filter-btn" onClick={() => filterItems(category)}>{category}</button>;
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default Categories;
