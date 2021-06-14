import React, { useEffect, useState } from 'react';
import corsLogo from './CORS.png';
import axios from 'axios';
import './App.css';

const url = ''; // your url
const bearerToken = undefined; // your bearer token, if needed

interface ResponseStatus {
  status?: number,
  statusText?: string
}

const App = () => {
  const [responseStatus, setResponseStatus] = useState<ResponseStatus>({});
  useEffect(() => {
    const getRequest = async () => {
      console.warn('Making request')
      const headers = bearerToken ? {
              'Authorization': `Bearer ${bearerToken}`,
              'Accept': 'application/pdf',
      } : {};

      try {
        const {
          status,
          statusText
        } = await axios.get(
          url,
          {
            headers
          }
        )
        const respStatus = {
          status,
          statusText
        };
        console.warn('Response', respStatus);
        setResponseStatus(respStatus);
      } catch (e) {
        console.error(e)
      }
    }
    if (!responseStatus.status) {
      getRequest();
    }
  }, [responseStatus, setResponseStatus]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={corsLogo} className="App-logo" alt="logo" />
        <p>
          CORS Tester.  Do it light.
        </p>
      </header>
    </div>
  );
}

export default App;
