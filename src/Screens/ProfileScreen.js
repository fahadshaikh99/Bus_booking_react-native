import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, TextInput, ScrollView } from 'react-native';
import firebase from 'firebase'
import * as ImagePicker from 'expo-image-picker'
import LoadingModal from '../components/LoadingModal'

const ProfileScreen = (props) => {
    const DATA = props.route.params.data
    const [Name, setName] = useState({name: DATA.name, isEditable: false, col: '#999'})
    const [Contact, setContact] = useState({contact: DATA.phoneNo, isEditable: false, col: '#999'})
    const [Username, setUsername] = useState({username: DATA.uname, isEditable: false, col: '#999'})
    const [ButtonOn, setButton] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [Source, setSource] = useState(DATA.imageUrl)
    const { updateDrawer } = props.route.params
    const user = firebase.auth().currentUser
    const userRef = firebase.database().ref(`users/${user.uid}/`)
    const options={
        title: 'Upload photo',
        takePhotoButtonTitle: 'Camera',
        chooseFromLibraryTitle: 'Gallery'
    }

    const UploadImage = async (uri, name) => {
        const response = await fetch(uri)
        const blob = await response.blob()
        let ref = firebase.storage().ref(`users/${user.uid}/`).child(name)
        return ref.put(blob)
    }

    const imageRender = async () => {
            try {
              let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
              });
              if (!result.cancelled) {
                setSource({uri: result.uri})
                setLoading(true)
                UploadImage(result.uri, 'profile-pic')
                .then(snapshot => {
                    firebase.storage().ref(`users/${user.uid}/profile-pic`).getDownloadURL()
                    .then(res => userRef.update({
                        imageUrl: res
                    }))
                })
                .then(() => {
                    setLoading(false)
                })
                .catch(err => console.log(err))
              }
        
              console.log(result);
            } catch (E) {
              console.log(E);
            }
            if(Source!==null){
                
            }
    }

    const getData = async () => {
        userRef.once('value')
            .then(snapshot => {
                if(snapshot.child('imageUrl').exists()){
                    setSource({uri :snapshot.val().imageUrl})
                }
                setName({...Name, name: snapshot.val().name, isEditable: false, col: '#999'})
                setContact({...Contact, contact: snapshot.val().phoneNo, isEditable: false, col: '#999'})
                setUsername({...Username, username: snapshot.val().uname, isEditable: false, col: '#999'})
            })
            .catch(err => console.log(err))
    }

    useEffect(()=> {
        getData()
    }, [])
    // show the user name only on this page nothing else
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 3 }}>
            <LoadingModal visible={isLoading} text='Saving changes'/>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Image
                    source={Source}
                    style={{ width: '50%', height: 160, borderRadius: 100 }}
                />
                <TouchableOpacity onPress={() => {imageRender()}}>
                    <Text style={{ fontSize: 20, color: 'blue', marginTop: 10 }}>
                        Upload photo
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ flex: 2, marginTop: 10, justifyContent: 'space-evenly' }}>
                <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Name:
                        </Text>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <TextInput 
                                style={{color: Name.col, borderColor: Name.col, marginRight: 10,padding: 2, fontSize: 18 ,height: 24, flex: 1, borderBottomWidth: 1}}
                                value={Name.name}
                                editable={Name.isEditable}
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={text => {
                                    setName({...Name, name: text})
                                    setButton(false)
                                }}
                            />
                            <TouchableOpacity onPress={() => {
                                setName({...Name, isEditable: true, col: '#000'})
                                setContact({...Contact, isEditable: false, col: '#999'})
                                setUsername({...Username, isEditable: false, col: '#999'})
                            }}>
                                <Text style={{color: 'blue', fontSize: 18}}>Edit</Text>
                            </TouchableOpacity>
                        </View>               
                </View>

                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Contact:
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <TextInput 
                                style={{color: Contact.col, borderColor: Contact.col, marginRight: 10,padding: 2, fontSize: 18 ,height: 24, flex: 1, borderBottomWidth: 1}}
                                value={Contact.contact}
                                editable={Contact.isEditable}
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={text => {
                                    setContact({...Contact, contact: text})
                                    setButton(false)
                                }}
                            />
                            <TouchableOpacity onPress={() => {
                                setName({...Name, isEditable: false, col: '#999'})
                                setContact({...Contact, isEditable: true, col: '#000'})
                                setUsername({...Username, isEditable: false, col: '#999'})
                            }}>
                                <Text style={{color: 'blue', fontSize: 18}}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                </View>

                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Username:
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <TextInput 
                                style={{color: Username.col, borderColor: Username.col, marginRight: 10,padding: 2, fontSize: 18 ,height: 24, flex: 1, borderBottomWidth: 1}}
                                value={Username.username}
                                editable={Username.isEditable}
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={text => {
                                    setUsername({...Username, username: text})
                                    setButton(false)
                                }}
                            />
                            <TouchableOpacity onPress={() => {
                                setName({...Name, isEditable: false, col: '#999'})
                                setContact({...Contact, isEditable: false, col: '#999'})
                                setUsername({...Username, isEditable: true, col: '#000'})
                            }}>
                                <Text style={{color: 'blue', fontSize: 18}}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                </View>

                <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 5 }}>
                    <Button
                        disabled={ButtonOn}
                        title="Save"
                        onPress={() => {
                            setLoading(true)
                            setButton(true)
                            userRef.update({
                                name: Name.name,
                                phoneNo: Contact.contact,
                                uname: Username.username
                            })
                            .then(() => {
                                getData()
                                setLoading(false)
                            })
                            .catch(err => console.log(err))
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default ProfileScreen;