var selectedFile;

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

$('input[name=photo]').change(function(event) {
    console.log("test222ewe");
    selectedFile= event.target.files[0];
});

function uploadFile(){
    var fileName=selectedFile.name;
    // Create a root reference
    var storageRef = firebase.storage().ref('/dogImages/'+fileName);
    var uploadTask= storageRef.put(selectedFile);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded


    }, function(error) {
        // Handle unsuccessful uploads
    }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...


        var postKey= firebase.database().ref('Posts/').push().key;
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);

            var database=firebase.database();
            var restaurantRef=database.ref('/Posts');
            var postData={
                url: downloadURL,
                caption: "test"
            };
            return restaurantRef.push(postData)
                                .then(function(){
                                        // window.location.reload();
                                })
                                .catch(function(error){
        
                                });

        });
    });
}




// $("file").val()