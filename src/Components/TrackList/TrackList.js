import './TrackList.css'
import React from 'react'
import Track from '../Track/Track'
// class TrackList extends React.Component {
//     render() {
//         return (
//             <div className="TrackList">
//                 {
//                     this.props.tracks?.map(track => {
//                         return <Track track={track}
//                             key={track.id}
//                             onAdd={this.props.onAdd}
//                             isRemoval={this.props.isRemoval}
//                             onRemove={this.props.onRemove} />
//                     })
//                 }
//             </div>
//         )
//     }
// }
const TrackList = (props) => {
    return (
        <div className="TrackList">
            {
                props.tracks?.map(track => {
                    return <Track track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove} />
                })
            }
        </div>
    )
}
export default TrackList