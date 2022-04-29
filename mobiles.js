var txt="<table><th>Company</th><th>Model</th><th>Memory (GB)</th><th>Price (Rs)</th><tr>";
    var i,j;
    const arr=[
                ['Samsung', 'Galaxy', 64, 15000],
                ['Nokia', 'S730', 128, 22000],
                ['Xiaomi', 'Note', 32, 12000],
                ['Motorola', 'G10', 32, 15000],
                ['Apple', 'S12', 64, 25000]
              ];
            
                for(i=0;i<5;i++)
                {
                    for(j=0;j<4;j++)
                    {
                        txt=txt+"<td>"+arr[i][j]+"</td>";
                    }
                    txt=txt+"</tr><tr>";
                }
                txt=txt+"</tr></table>"
                document.getElementById("msg").innerHTML=txt;
