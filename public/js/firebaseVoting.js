function addRestaurant(){
    var database=firebase.database();
    var restaurantRef=database.ref('/restaurants');
    return restaurantRef.push({name:'Ting'})
                        .then(function(){
                                // window.location.reload();
                        })
                        .catch(function(error){

                        });
}
// https://materializecss.com/cards.html
function readRestaurants(){
    var database=firebase.database();
    var restaurantRef=database.ref('/restaurants');
    restaurantRef.on('value', function(snapshot){
        console.log(snapshot.val());
    })
}