import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../state/AuthContext';
import axios from 'axios';
const PlaylistDetails = () => {
    const [details, setDetails] = useState({});
    const [songId, setSongId] = useState([]);
    const { state } = useContext(AuthContext);

    const getData = () => {
        axios
          .get(`/api/getPlaylist/${state.id}`)
          .then((res) => {
            console.log(res.data)
            setDetails(res.data);
            setSongId(res.data.pokemons);
          })
      }

      const addSongs = (songId) => {
        axios.post('/api/addToPlaylist', {songId: songId, playlistId: state.id})
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'You did it!'
          })
          .then((res) => getData())
        })
        .catch(err => {
          console.log(err)
        })
      }
    
  return (
    <div>
      
    </div>
  )
}

export default PlaylistDetails
