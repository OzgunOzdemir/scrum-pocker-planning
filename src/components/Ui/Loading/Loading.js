import React, { Fragment } from 'react';
import './Loading.css';

const Loading = ({
    show
}) => {
    return (
        <Fragment>
            {
                show === true ?
                    <div className="loadingContainer">
                    </div>
                    : ''
            }
        </Fragment>
    );
}

export { Loading };
