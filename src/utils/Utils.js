import React from 'react'

function Utils(props) {
    const res = props.map((items) => items)
    const a = `https://yts.mx/torrent/download/`
    return res ? <div style={{ display: 'flex' }}>
        {res.map((item, index) => <div key={index}><h3 >{item.quality}</h3>
            <div style={{ marginLeft: '0.2rem' }} ><a href={`${a}${item.hash}`} className="btn btn-primary" >download</a></div>
        </div>)}

    </div> : null;
}
export default Utils

