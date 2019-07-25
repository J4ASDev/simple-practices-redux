import React, { useState } from 'react';

const FormSongs = () => {
  const [ songs, setSongs ] = useState([]);
  const [ lastedSongId, setLastedSongId ] = useState(0);

  const handleAddSongs = event => {
    event.preventDefault();

    const form = document.getElementById('songs-form');
    const data = new FormData(form);
    const newSong = data.get('new-song');

    setLastedSongId(lastedSongId + 1);

    setSongs([ ...songs, { name: newSong, id: lastedSongId } ]);
  }

  const handleRemoveSongs = id => {
    let arrayWithoutSong = songs.filter(item => item.id !== id);

    setSongs(arrayWithoutSong);
  }

  return (
    <article>
      <form id='songs-form' onSubmit={handleAddSongs}>
        <input name='new-song' type='text' placeholder='Insert a new song' />
        <button>Save song</button>
        <div>
          { songs.map((item, index) => (
              <span key={item.id} id={item.id}>
                <p>{`${index}-. ${item.name} `}</p>
                <p onClick={() => handleRemoveSongs(item.id)}>X</p>
              </span>
            )
          )}
        </div>
      </form>
    </article>
  );
}

export default FormSongs;
