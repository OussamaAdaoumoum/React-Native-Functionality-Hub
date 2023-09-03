import { StyleSheet, Text, View, ScrollView} from 'react-native';
import ProfileView from './ProfileView';


export default function MyNetwork() {
    
    const Profiles = [

        {
            "name": "ILyas Hnini ",
            "Job": "Graphic Designer",
            "company": "IBM Technologie",
            "imageSource": "../../../../assets/pics/1648820953568.jpg"

        },
        {
            "name": "Youssef Koutari",
            "Job": "Graphic Designer",
            "company": "IBM Technologie",
            "imageSource": "../../../../assets/pics/1648820953568.jpg"

        },
        {
            "name": "Youssef Koutari",
            "Job": "Graphic Designer",
            "company": "IBM Technologie",
            "imageSource": "../../../assets/pics/1648820953568.jpg"

        },
        {
            "name": "Youssef Koutari",
            "Job": "Graphic Designer",
            "company": "IBM Technologie",
            "imageSource": "../../../assets/pics/1648820953568.jpg"

        },
        {
            "name": "Youssef Koutari",
            "Job": "Graphic Designer",
            "company": "IBM Technologie",
            "imageSource": "../../../assets/pics/1648820953568.jpg"
        },
        {
            "name": "Youssef Koutari",
            "Job": "Graphic Designer",
            "company": "IBM Technologie",
            "imageSource": "../../../assets/pics/1648820953568.jpg"
        },
        {
            "name": "Youssef Koutari",
            "Job": "Graphic Designer",
            "company": "IBM Technologie",
            "imageSource": "../../../assets/pics/1648820953568.jpg"
        },
        {
            "name": "Youssef Koutari",
            "Job": "Graphic Designer",
            "company": "IBM Technologie",
            "imageSource": "../../../assets/pics/1648820953568.jpg"
        },
        
    ]
    return (

        <ScrollView>
        <View style={styles.container}>
            {Profiles.map((profile, index) => (
                    <ProfileView 
                        key={index}
                        name={profile.name}
                        Job={profile.Job}
                        company={profile.company}
                        imageSource={require("../../../assets/linkedinImage.jpg")}
                    />
            ))}
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',   // Align items in a row
        flexWrap: 'wrap',       // Wrap items to next line
        justifyContent: 'center', // Center items horizontally
    },
    profileContainer: {
        width: '50%',  // Take up half the width of the container for 2 items in a row
        padding: 10,
    },
  });
  