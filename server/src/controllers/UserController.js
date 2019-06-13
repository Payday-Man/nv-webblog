module.exports ={
  //get all user
    index (req,res) {
        res.send('call all user');
    },
    // create user
    create (req,res) {
        res.send('Create user : ' + JSON.stringify(req.body));
    },
    
    // edit user, suspend, active
    put (req,res){
        res.send('Edit User : '+ req.params.userId + ' : ' +JSON.stringify(req.body));
    },

    //delete user
    remove (req,res){
        res.send('Delete User : ' + req.params.userId + JSON.stringify(req.body));
    },
    
    //get user by id
    show (req,res) {
        res.send('Watch user data : ' + req.params.userID); 
    }
};
