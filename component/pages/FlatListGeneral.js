import React from 'react'
import { FlatList, Text, View } from 'react-native';

function FlatListGeneral() {
       //generali flatlist
    //1.First need to create a object list named myData
    const myData = [
        {title:"Bangladesh", subtitle: "This is my country"},
        {title:"Sweden", subtitle: "This is my country"},
        {title:"Finland", subtitle: "This is my country"},
        {title:"Denmark", subtitle: "This is my country"},
        {title:"Norway", subtitle:"This is my country"},
        {title:"Germany", subtitle:"This is my country"},
        {title:"Hungary", subtitle:"This is my country"},
        {title:"Belgium", subtitle:"This is my country"},
        {title:"Poland", subtitle:"This is my country"},
        {title:"Ukrane", subtitle:"This is my country"},
        {title:"Austria", subtitle:"This is my country"},
        {title:"Russia", subtitle:"This is my country"},
        {title:"Qatar", subtitle:"This is my country"},
        {title:"Iran", subtitle:"This is my country"},
    ];
    //2. Need to create childview
    const ChildView = ({ Childtitle,Childsubtitle})=>{
        return(
            <View style={{ backgroundColor:"white", padding:10, margin:5}}>
                <Text style={{color:'black',fontSize:18}}>{Childtitle}</Text>
                <Text style={{color:'black',fontSize:12}}>{Childsubtitle}</Text>
            </View>
        )
    }
    //3.Now to use flatList to display list from myData and ChildView
    return (
        <FlatList 
        data={myData} 
        renderItem={({item})=><ChildView Childtitle={item.title} Childsubtitle={item.subtitle}/>}/>  
    )
}

export default FlatListGeneral
