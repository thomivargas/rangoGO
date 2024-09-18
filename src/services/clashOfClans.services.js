import axios from 'axios';

export const getCuentaClashOfClans = async (playerId) => {

    const options = {
      method: 'GET',
      url: `https://api.clashofclans.com/v1/players/%23${playerId}`,
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM4NzBiM2JhLTEyOGItNDVkZS04ZTQ4LTE1ZmExMmEwYTRmNCIsImlhdCI6MTcyNjYwNDYzMiwic3ViIjoiZGV2ZWxvcGVyL2IwZjliZTZmLTUxMGQtMDkzZS00NTE4LTFjZGIwNzRkZTBmMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MC4xNzYuMy4yMzEiXSwidHlwZSI6ImNsaWVudCJ9XX0.H_ymGMysWtcFWnZOAy25d-kFB7W1UmgYjRAX17xZO1Gq_f7c321UOm779TyiKkUUsDmxpHszQyQENTXQ8pipyw',
      }
    };

    try {
      const response = await axios.request(options);
      return response.data; 
    } catch (error) {
      throw new Error('Error fetching cuenta de Clash of Clans');
    }
};