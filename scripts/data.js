

// let container=document.querySelector("#container")
let appenData=async (data,container)=>{
    data.forEach(element => {
        let div=document.createElement("div")
        
        let image=document.createElement("img")
        image.src=element.strMealThumb

        let h2=document.createElement("h2")
        h2.innerText=element.strMeal

        let p=document.createElement("p")
        p.innerText=element.strInstructions

        div.append(image,h2,p)
        container.append(div)


    });
}
export default appenData;


