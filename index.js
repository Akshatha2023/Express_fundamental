const express= require("express");
const app=express();
app.use(express.json());

let studentData=[];
// const mypractice=[];

// app.get("/home",(req,res)=>{
//     res.send("this is a home ");
// });

// app.get("/practice",(req,res)=> {
//     res.send(mypractice);
// });

// app.post("/practice",(req,res)=> {
//     mypractice.push(req.body);
//     res.send("data added");
// });

///Update
app.get("/alldata",(req,res)=>{
    // console.log(studentData);
    res.send(studentData);
})

app.post("/alldata",(req,res)=>{
    console.log(req.body);
    studentData.push(...req.body)
    res.send("data added");
})

app.delete("/alldata/:age",(req,res)=>{
    const newAge= req.params.age;
    const data=studentData.filter((num)=>num.age!=newAge );
    if(data.length===studentData.length){
        return res.send("your age is not there")
    }
    studentData = data;
    res.send("its deleted");

}
    );


app.listen("4000",()=> {
    console.log("hello iam listening frm a server");
});