Ti.slideTabs Widget

This is a widget for the Alloy MVC framework of Appcelerator's Titanium platform.
This widget provide a tabs with slide animation

Usage : 

.xml

<Alloy>
    <Window>
        <Widget src="com.moghazy.slideTabs" id="tabs">
            <View id="view_1">
                <Label id="label_1" />
            </View>
            <View id="view_2">
                <Label id="label_2" />
            </View>
            <View id="view_3">
                <Label id="label_3" />
            </View>
        </Widget>
    </Window>
</Alloy>

.tss

"#tabs":{ // all this prop u can change as u want
    height: 50,
    top: 50,
    slideColor: "#000", // slide color
    width: "80%"
}
"#view_1":{
    backgroundColor: "blue" // tab 1
}
"#view_2":{
    backgroundColor: "red" // tab 2
}
"#view_3":{
    backgroundColor: "orange" // tab 3
}
"#label_1":{
    touchEnabled: false, // you shoule add touchEnabled = false in all element in your tab :)
    text: "Tab 1",
    color:"#fff"
}
"#label_2":{
    touchEnabled: false,
    text: "Tab 2",
    color:"#fff"
}
"#label_3":{
    touchEnabled: false,
    text: "Tab 3",
    color:"#fff"
}