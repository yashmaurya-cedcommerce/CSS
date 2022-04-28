
    
        const arr=[];
        var i=0;
        function calc()
        {
        var id=document.getElementById("p_id").value;
        var name=document.getElementById("p_name").value;
        var price=document.getElementById("p_price").value;

     
        if(id=='' || name=='' || price=='')
        {
            alert("Enter All Fields");
            exit();
        }
        var txt="<table><th>Product ID</th><th>Product Name</th><th>Product Price</th>";
        const obj={'obj_id':id,
                   'obj_name':name,
                   'obj_price':price};
                   console.log(obj);
        arr.push(obj);
        console.log(arr);
        for(i=0;i<arr.length;i++)
        {
        txt+="<tr><td>"+arr[i].obj_id+"</td><td>"+arr[i].obj_name+"</td><td>"+arr[i].obj_price+"</td></tr>";
        }
        document.getElementById("ans").innerHTML=txt;
       }  