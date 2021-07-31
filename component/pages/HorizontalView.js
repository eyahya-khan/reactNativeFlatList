import React from 'react'
import { Alert, FlatList, Image, Text, View } from 'react-native';

function HorizontalView() {

     const myData = [
        {title:"Bangladesh", subtitle: "This is my country", img:'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'},
        {title:"Sweden", subtitle: "This is my country",img:'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg'},
        {title:"Austria", subtitle: "This is my country",img:'https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_960_720.jpg'},
        {title:"Finland", subtitle: "This is my country",img:'https://cdn.pixabay.com/photo/2021/07/20/11/50/poppies-6480490__340.jpg'},
        {title:"Denmark", subtitle: "This is my country",img:'https://cdn.pixabay.com/photo/2019/06/22/18/31/love-4292211_960_720.jpg'},
        {title:"Norway", subtitle:"This is my country",img:'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg'},
        {title:"Germany", subtitle:"This is my country",img:'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg'},
        {title:"Hungary", subtitle:"This is my country",img:'https://cdn.pixabay.com/photo/2016/10/26/10/05/book-1771073_960_720.jpg'},
        {title:"Belgium", subtitle:"This is my country",img:'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg'},
        {title:"Bulgeria", subtitle:"This is my country",img:'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg'},
    ];

    const handleChange=()=>{
        Alert.alert('Welcome to my world')
    }

   const ChildView = ({ Childtitle,Childsubtitle,Childimg})=>{
       return(
           <View style={{ backgroundColor:"grey",width:180, height:150, margin:5}}>
                   
            <View>
                <Image style={{height:90,width:"100%"}} source={{uri: Childimg}}/>
            </View>
            <View style={{marginLeft:15}}>
                    <Text onPress={handleChange} style={{color:'black',fontSize:18}}>{Childtitle}</Text>
                    <Text style={{color:'black',fontSize:12}}>{Childsubtitle}</Text>
            </View>
            </View>
        )
    }
    return (
        <FlatList 
        //horizontal view
        horizontal={true}
        data={myData} 
        renderItem={({item})=><ChildView Childtitle={item.title} Childsubtitle={item.subtitle} Childimg={item.img}/>}/> 
    )
}

export default HorizontalView
