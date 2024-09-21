import React, { useEffect, useState } from 'react';

function App() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        // Extract unique album IDs
        const uniqueAlbums = [...new Set(data.map((photo) => photo.albumId))];
        setAlbums(uniqueAlbums);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Fetch thumbnails when an album button is clicked
  const handleAlbumClick = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedAlbum(albumId);
        setThumbnails(data); // Set thumbnails for the selected album
      })
      .catch((error) => console.error('Error fetching thumbnails:', error));
  };

  return (
    <div className="App">
      <h1>Albums</h1>
      <div>
        {albums.map((albumId) => (
          <button key={albumId} onClick={() => handleAlbumClick(albumId)}>
            Album {albumId}
          </button>
        ))}
      </div>

      {selectedAlbum && (
        <div>
          <h2>Thumbnails for Album {selectedAlbum}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {thumbnails.map((thumbnail) => (
              <img
                key={thumbnail.id}
                src={thumbnail.thumbnailUrl}
                alt={thumbnail.title}
                style={{ margin: '10px', width: '150px', height: '150px' }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
