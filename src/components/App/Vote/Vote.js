import React from 'react'
import './Vote.css'

const Vote = () => {
    return (
        <div className="vote-container">
            <div className="row colum-container">
                <div className="col-3"><div className="vote-container-point">1</div></div>
                <div className="col-3"><div className="vote-container-point">2</div></div>
                <div className="col-3"><div className="vote-container-point">3</div></div>
                <div className="col-3"><div className="vote-container-point">5</div></div>
            </div>
            <div className="row colum-container">
                <div className="col-3"><div className="vote-container-point">8</div></div>
                <div className="col-3"><div className="vote-container-point">10</div></div>
                <div className="col-3"><div className="vote-container-point">21</div></div>
                <div className="col-3"><div className="vote-container-point">34</div></div>
            </div>
            <div className="row colum-container">
                <div className="col-3"><div className="vote-container-point">55</div></div>
                <div className="col-3"><div className="vote-container-point">89</div></div>
                <div className="col-3"><div className="vote-container-point">134</div></div>
                <div className="col-3"><div className="vote-container-point">?</div></div>
            </div>
            <div className="vote-footer">
                Please Vote!!!
            </div>
        </div>
    );
}

export { Vote }