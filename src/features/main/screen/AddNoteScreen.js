import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import {Input, Button} from '../../../components';
import { sizes, colors } from "../../../theme";
import { useState } from "react";
import { useDispatch } from "react-redux"; 
import {addNote} from '../../../store/actions/noteActions';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import {Ionicons} from '@expo/vector-icons';


const AddNoteScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const saveHandler = () => {
        dispatch(addNote({
            id: Date.now(),
            title,
            description
        }));
        navigation.goBack();
    }

    const addImageFromCamera = async() => {
        try {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                quality: 1,
              });
          
              if (!result.canceled) {
                setImages([...images, result.assets[0]]);
                console.log(result.assets[0])
              } else {
                console.log('You did not capture any image.');
              }
        } catch (error) {
            console.error(error);
        }
    }

    const addImageFromGallery = async() => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
              });
          
              if (!result.canceled) {
                setImages([...images, result.assets[0]]);
              } else {
                console.log('You did not capture any image.');
              }
        } catch (error) {
            console.error(error);
        }
    }

    return (
       <ScrollView contentContainerStyle={styles.container}>
            <Input 
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <Input 
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <View style={styles.imagesContainer}>
                {images.map((image, index) => (
                    <Image 
                        key={index}
                        source={{uri: image.uri}}
                        resizeMode="cover"
                        style={styles.images}
                    />
                ))}
                <TouchableOpacity 
                    style={styles.addImageContainer} 
                    onPress={() => Alert.alert(
                        'Add images', 
                        'inserting image to your notes', 
                        [
                                {
                                    text: 'Cancel',
                                    onPress: () => {},
                                    style: 'cancel'
                                },
                                {
                                    text: 'Camera',
                                    onPress: () => addImageFromCamera(),
                                },
                                {
                                    text: 'Gallery',
                                    onPress: () => addImageFromGallery()
                                }
                        ])}>
                <Ionicons 
                            name='add-circle-sharp'
                            size={36}
                            color={colors.primary.blue}
                        />
                </TouchableOpacity>
            </View>
            <Button 
                title="Save"
                onPress={saveHandler}
            />
       </ScrollView> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: sizes.xl4
    },
    addImageContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.textColors.whiteGrey,
        borderRadius: sizes.large,
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: sizes.xl8, 
    },
    images: {
        width: 100, 
        height: 100,
        marginRight: sizes.small, 
        marginBottom: sizes.small, 
        borderRadius: sizes.large
    }
});

export default AddNoteScreen;