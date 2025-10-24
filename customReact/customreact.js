
function M(){
    const domelement=document.createElement(reactElement.type);
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domelement.setAttribute(prop,reactElement.props[prop]);
        
        
    }
    container.appendChilddomelement
}



const maincontainer=document.querySelector('root')
(customRender(reactElement),maincontainer);
/*
function customRender(reactElement,container){
    const domElement=createDomElement(reactElement);
    domElement.innerhtml=reactElement.props.children;
    document.setquerySelector('body').appendChild(domElement);
}   document.appendChilddomelement
    container.appendChild(domElement);
*/


