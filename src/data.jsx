const data = [];

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
      
      return ({
        id: playerData.data.user._id,
        name: playerData.data.user.username,
        stats: {
            apm: playerData.data.user.league.apm,
            pps: playerData.data.user.league.pps,
            vs: playerData.data.user.league.vs,
        },
        tr: Math.round(playerData.data.user.league.rating * 100) / 100,
        sprint: Math.round(playerRecords.data.records['40l'].record.endcontext.finalTime) / 1000,
        blitz: playerRecords.data.records.blitz.record.endcontext.score,
        zen: playerRecords.data.zen.score,
        link: playerData.data.user.username
      })
    } catch (error) {
      console.log(error);
    }
  }

function addData(param) {
    Api(`${param}`).then(result => {
        data.push(result);
      });
}
  addData("5e49ec93769dcb73ba5b6916") //inanequark
  addData("608af396cfc83c878c26c253") //lifeline
  addData("5f5b4025ea3d3a2b3abb86fb") //feli
  addData("5ed49367e059476c019a4daf") //rky1618
  addData("5eb343eea59e1e6c236f30bf") //cheezwhiz
  addData("5e4609175f7575555d81da33") //flood
  addData("5e83471f32cccb46bdaa30df") //ninj
  addData("619d0fc32d88c8b3166ffe83") //rinko
  addData("5e76dd7b5bc0c31aba228595") //itchylol742
  addData("5f7d189b1404653c00f8662f") //groober
  addData("60a3d8fa30aba81350f78c6e") //alex-xp

  export default data;