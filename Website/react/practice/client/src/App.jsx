import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState(null); // Start with null instead of an empty string

  async function UploadDoc() {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // Append the file to formData

    try {
      const res = await axios.post('http://localhost:5000/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to 'multipart/form-data'
        },
      });
      console.log(res.data); // Log the response data
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={UploadDoc}>Upload</button>
    </div>
  );
};

export default App;
