const getcolor=()=>
{
    //hex code
//first convrt to random number //
    const randomnumber=Math.floor(Math.random()*16777215);
    // console.log(randomnumber);

    //convert into hex value//
    const randomcode="#" + randomnumber.toString(16);

    //print random number with hex value//
    // console.log(randomnumber,randomcode);

    document.body.style.backgroundColor=randomcode;

    document.getElementById("color-code").innerText=randomcode; //set hex value to color//

    navigator.clipboard.writeText(randomcode);  //copy the color code to clipboard//


}

//event call//
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

//initial call//
getcolor()   //when load page color will set 