const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/processSA'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/processSA/index.html'));
});

app.listen(process.env.PORT || 5000);

//pruebaapp