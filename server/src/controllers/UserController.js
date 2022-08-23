module.exports = {
    //get all user
    index (req, res){
        res.send('เรียกข้อมูลผุ้ใช้งานทั้งหมด')
    },

    //create user
    create (req, res) {
        res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
    },

    // edit user , suspend, active
    put (req, res){
        res.send('ทำการแก้ไขผู้งาน: ' + req.params.userId + ' : ' +
        JSON.stringify(req.body))
    },

    // delete user
    remove (req, res){
        res.send('ทำการผู้ใช้งาน: ' + req.params.userId + ' : ' +
        JSON.stringify(req, res))
    },

    // get user by id
    show (req, res0){
        res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
    }
}