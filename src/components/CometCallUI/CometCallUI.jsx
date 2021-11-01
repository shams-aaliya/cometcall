import React from 'react'

const CometCallUI = () => {
    

    return (
        <div>
            <p>Welcome to CometCall</p>
            <div className="sidebar">
            <button>New Group</button>
            <button>Group List</button>
            <button>User List</button>
            </div>
            <div className="messagebox">
                <button>Start Call</button>
                <button>End Call</button>
            </div>
        </div>
    )
}

export default CometCallUI