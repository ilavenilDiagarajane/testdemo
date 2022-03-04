/*var request= new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function() {
    var data= JSON.parse(request.response)
    console.log(data)
       var region=data.filter((element) => element.region==="Asia")
       console.log(region)
       var population=data.filter((element) => element.population<200000)
       console.log(population)

       var totalpopulation=data.reduce((acc, element,) =>acc+element.population,0)
       console.log(totalpopulation)

    var usdollars=data.filter((element) => element.currencies[0].name==='United States dollar')
    var countryname=usdollars.map((element) => element.name)
    console.log(countryname)

    var details=Object.keys(data)
    Object.keys(data).forEach(element => {
        console.log(`Name:${data[element].name},Flag:${data[element].flag} `)
    })
    

}*/
let b = (prompt("Enter a number?"));
a=parseInt(b)
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
