var images = ["WhatsApp Image 2022-11-24 at 17.48.07.jpeg","Miguel.jpeg","WhatsApp Image 2022-12-05 at 07.59.17 (1).jpeg","WhatsApp Image 2022-12-05 at 07.59.17.jpeg",
"WhatsApp Image 2022-12-11 at 22.09.09.jpeg"];
var names = ['Esta é a minha família','Miguel (Sou Eu)','Renata (Minha Mãe)','Ricardo (Meu Pai)','Felipe (Meu Irmão)'];
var i = 0;
function uptade(){
    i++;
    var numberOfimg = 4;
    if(i > numberOfimg){
        i = 0
    }
    var uptadeImage = images[i];
    var uptadeName = names[i];
    document.getElementById("imgfamyly").src = uptadeImage;
    document.getElementById("familyMenberName").innerHTML = uptadeName;
}