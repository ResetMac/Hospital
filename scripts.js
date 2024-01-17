function GetData12() {
    const uri = '/vendor/requests12.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
    let param = document.getElementById("select").value
    let param2 = document.getElementById("select1").value
    let param3 = document.getElementById("select2").value
    let param4 = document.getElementById("select3").value
    let param5 = document.getElementById("select4").value
      console.log(param);
      let myuri = uri + '?param=' + param + '&param2=' + param2 + '&param3=' + param3 + '&param4=' + param4 + '&param5=' + param5;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
            
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellA.innerHTML = "full_name";
                cellB.innerHTML = "profile";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                
                cellA.innerHTML = data[key]["full_name"];
                cellB.innerHTML = data[key]["profile"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }
  function GetData122() {
    const uri = '/vendor/request122.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
    let param = document.getElementById("select").value
    let param3 = document.getElementById("select2").value
      console.log(param);
      let myuri = uri + '?param=' + param + '&param3=' + param3;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
            
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellA.innerHTML = "full_name";
                cellB.innerHTML = "profile";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                
                cellA.innerHTML = data[key]["full_name"];
                cellB.innerHTML = data[key]["profile"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }
  function GetDataObsPers() {
    const uri = '/vendor/requestObsPers.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
  let param = document.getElementById("select").value

      console.log(param);
      let myuri = uri + '?param=' + param;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellA.innerHTML = "full_name";
                cellB.innerHTML = "profile";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                
                cellA.innerHTML = data[key]["full_name"];
                cellB.innerHTML = data[key]["profile"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }

  function GetDataZagruzka() {
    const uri = '/vendor/requestZagruzka.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
  let param = document.getElementById("select").value

      console.log(param);
      let myuri = uri + '?param=' + param;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();

                cellA.innerHTML = "Count";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();

                
                cellA.innerHTML = data[key]["cnt"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }
  function GetDataVirabotka() {
    const uri = '/vendor/requestVirabotka.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
  let param = document.getElementById("select").value
      console.log(param);
      let myuri = uri + '?param=' + param;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB, cellC, cellD, cellE;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
      

                cellA.innerHTML = "avg(cnt)";
   
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
          
                
                cellA.innerHTML = data[key]["avg(cnt)"];

              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }
  function GetDataPacSova(param) {
    const uri = '/vendor/requests3.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
      console.log(param);
      let myuri = uri + '?param=' + param;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB, cellC, cellD, cellE;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();

                cellA.innerHTML = "ФИО пациента";
                cellB.innerHTML = "temp";
                cellC.innerHTML = "condition";
                cellD.innerHTML = "time";
                cellE.innerHTML = "ФИО врача";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();
                
                cellA.innerHTML = data[key]["ФИО пациента"];
                cellB.innerHTML = data[key]["temp"];
                cellC.innerHTML = data[key]["condition"];
                cellD.innerHTML = data[key]["time"];
                cellE.innerHTML = data[key]["ФИО врача"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }
  function GetDataPacPanac(param) {
    const uri = '/vendor/requestPacPanac.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
      console.log(param);
      let myuri = uri + '?param=' + param;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB, cellC, cellD, cellE;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();

                cellA.innerHTML = "ФИО пациента";
                cellB.innerHTML = "temp";
                cellC.innerHTML = "condition";
                cellD.innerHTML = "time";
                cellE.innerHTML = "ФИО врача";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();
                
                cellA.innerHTML = data[key]["ФИО пациента"];
                cellB.innerHTML = data[key]["temp"];
                cellC.innerHTML = data[key]["condition"];
                cellD.innerHTML = data[key]["time"];
                cellE.innerHTML = data[key]["ФИО врача"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }
  function GetDataPacProf(param) {
    const uri = '/vendor/requestPacProf.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
      console.log(param);
      let myuri = uri + '?param=' + param;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB, cellC, cellD, cellE;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();

                cellA.innerHTML = "ФИО пациента";
                cellB.innerHTML = "temp";
                cellC.innerHTML = "condition";
                cellD.innerHTML = "time";
                cellE.innerHTML = "ФИО врача";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();
                
                cellA.innerHTML = data[key]["ФИО пациента"];
                cellB.innerHTML = data[key]["temp"];
                cellC.innerHTML = data[key]["condition"];
                cellD.innerHTML = data[key]["time"];
                cellE.innerHTML = data[key]["ФИО врача"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }
  function GetDataPacPoli(param) {
    const uri = '/vendor/requestPacPoli.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
      console.log(param);
      let myuri = uri + '?param=' + param;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB, cellC, cellD, cellE;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();

                cellA.innerHTML = "ФИО пациента";
                cellB.innerHTML = "temp";
                cellC.innerHTML = "condition";
                cellD.innerHTML = "time";
                cellE.innerHTML = "ФИО врача";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();
                
                cellA.innerHTML = data[key]["ФИО пациента"];
                cellB.innerHTML = data[key]["temp"];
                cellC.innerHTML = data[key]["condition"];
                cellD.innerHTML = data[key]["time"];
                cellE.innerHTML = data[key]["ФИО врача"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }
  function GetDataPacStac() {
    const uri = '/vendor/requestPacStac.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
  let param = document.getElementById("select").value
    let param2 = document.getElementById("select1").value
      console.log(param);
      let myuri = uri + '?param=' + param + '&param2=' + param2;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB, cellC, cellD, cellE;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellE = row.insertCell();

                cellA.innerHTML = "ФИО пациента";
                cellE.innerHTML = "ФИО врача";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellE = row.insertCell();
                
                cellA.innerHTML = data[key]["ФИО пациента"];
                cellE.innerHTML = data[key]["ФИО врача"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }

  function GetDataOperacii() {
    const uri = '/vendor/requestOperacii.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
  let param = document.getElementById("select").value
    let param2 = document.getElementById("select1").value
      console.log(param);
      let myuri = uri + '?param=' + param + '&param2=' + param2;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB, cellC, cellD, cellE;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellE = row.insertCell();

                cellA.innerHTML = "ФИО пациента";
                cellE.innerHTML = "Время";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellE = row.insertCell();
                
                cellA.innerHTML = data[key]["full_name"];
                cellE.innerHTML = data[key]["title"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }

  function GetData3(param) {
    const uri = '/vendor/request6.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
      console.log(param);
      let myuri = uri + '?param=' + param;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB, cellC, cellE;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();

                cellA.innerHTML = "ФИО пациента";
                cellB.innerHTML = "temp";
                cellC.innerHTML = "condition";
                cellD.innerHTML = "time";
                cellE.innerHTML = "ФИО врача";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellC = row.insertCell();
                cellD = row.insertCell();
                cellE = row.insertCell();
                
                cellA.innerHTML = data[key]["ФИО пациента"];
                cellB.innerHTML = data[key]["temp"];
                cellC.innerHTML = data[key]["condition"];
                cellD.innerHTML = data[key]["time"];
                cellE.innerHTML = data[key]["ФИО врача"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }

  function GetData4() {
    const uri = '/vendor/request4.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
  let param = document.getElementById("select").value
    let param2 = document.getElementById("select2").value
      console.log(param);
      let myuri = uri + '?param=' + param + '&param2=' + param2;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellA.innerHTML = "full_name";
                cellB.innerHTML = "profile";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                
                cellA.innerHTML = data[key]["full_name"];
                cellB.innerHTML = data[key]["profile"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }

  function GetData5() {
    const uri = '/vendor/request5.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
  let param = document.getElementById("select").value
    let param2 = document.getElementById("select2").value
      console.log(param);
      let myuri = uri + '?param=' + param + '&param2=' + param2;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellA.innerHTML = "full_name";
                cellB.innerHTML = "profile";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                
                cellA.innerHTML = data[key]["full_name"];
                cellB.innerHTML = data[key]["profile"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }

  function GetData6() {
    const uri = '/vendor/request66.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
  let param = document.getElementById("select").value
    let param2 = document.getElementById("select2").value
      console.log(param);
      let myuri = uri + '?param=' + param + '&param2=' + param2;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellA.innerHTML = "full_name";
                cellB.innerHTML = "profile";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                
                cellA.innerHTML = data[key]["full_name"];
                cellB.innerHTML = data[key]["profile"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }

  function GetData7() {
    const uri = '/vendor/request7.php';
  const initDetails = {
      method: 'get',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
  }
  let param = document.getElementById("select").value
    let param2 = document.getElementById("select2").value
      console.log(param);
      let myuri = uri + '?param=' + param + '&param2=' + param2;
      console.log(myuri);
      fetch( myuri, initDetails )
          .then( response =>
          {
              if ( response.status !== 200 )
              {
                  console.log( 'Looks like there was a problem. Status Code: ' +
                      response.status );
                  return;
              }

              console.log( response.headers.get( "Content-Type" ) );
              return response.json();
          }
          )
          .then( myJson =>
          {
              document.getElementById("tab").innerHTML = "";
              //console.log( JSON.stringify( myJson ) );
              let data = JSON.parse(JSON.stringify( myJson ));
              console.log(data);
              var table = document.createElement("table"), row, cellA, cellB;
              document.getElementById("tab").appendChild(table);
              row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                cellA.innerHTML = "full_name";
                cellB.innerHTML = "profile";
              for (let key in data) {
                // (C2) ROWS & CELLS
                row = table.insertRow();
                cellA = row.insertCell();
                cellB = row.insertCell();
                
                cellA.innerHTML = data[key]["full_name"];
                cellB.innerHTML = data[key]["profile"];
              }

          } )
          .catch( err =>
          {
              console.log( 'Fetch Error :-S', err );
          } );
  }