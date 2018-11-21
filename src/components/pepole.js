mongoose = require('mongoose');

    var PersonSchema = new mongoose.Schema({
        username: {type: String, unique: true},
        imgURL: String,
        children:[{type: Schema.Types.ObjectId,ref:'person'}]
    });

    var PersonSchema = mongoose.model('person', PersonSchema);
 
 export default PersonSchema;