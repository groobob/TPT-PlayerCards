import React from "react"

async function Api(param) {
    let playerData;
    let playerRecords;
  
    try {
      const dataResponse = await fetch(`https://corsproxy.io/?https://ch.tetr.io/api/users/${param}`);
      const data = await dataResponse.json();
      playerData = data;

        const recordResponse = await fetch(`https://corsproxy.io/?https://ch.tetr.io/api/users/${param}/records`);
        const record = await recordResponse.json();
      playerRecords = record;

      console.log(record)
      
      return ({
        id: playerData.data.user._id,
        name: playerData.data.user.username,
        icon: `${playerData.data.user.username}.png`,
        stats: {
            apm: playerData.data.user.league.apm,
            pps: playerData.data.user.league.pps,
            vs: playerData.data.user.league.vs,
        },
        tr: Math.round(playerData.data.user.league.rating),
        sprint: Math.round(playerRecords.data.records['40l'].record.endcontext.finalTime) / 1000,
        blitz: playerRecords.data.records.blitz.record.endcontext.score,
        zen: playerRecords.data.zen.score,
        link: playerData.data.user.username
      })
    } catch (error) {
      console.log(error);
    }
  }

  const data = [];
  Api("5e49ec93769dcb73ba5b6916").then(result => {
    data.push(result);
  });
  Api("608af396cfc83c878c26c253").then(result => {
    data.push(result);
  });
  Api("5f5b4025ea3d3a2b3abb86fb").then(result => {
    data.push(result);
  });
  Api("5ed49367e059476c019a4daf").then(result => {
    data.push(result);
  });
  Api("5eb343eea59e1e6c236f30bf").then(result => {
    data.push(result);
  });

  export default data;