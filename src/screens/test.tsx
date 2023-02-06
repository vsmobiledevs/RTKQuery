import {View, Text, Button, ActivityIndicator, ScrollView} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {login, logout} from '../redux/features/authSlice';
import {useCreatePostMutation, useDeletePostMutation, useGetAllPostsQuery, useUpdatePostMutation} from '../redux/api/postApi';



const TestScreen: FC = () => {

  const {user} = useAppSelector(state => state.authSlice);
  const {isLoading, isError, error, data} = useGetAllPostsQuery();
  const [createPost,res] = useCreatePostMutation()
  const [updatePost,response] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation()


  useEffect(() => {
    if (isError) {
      console.log('error: =>', error);
    }
  }, [isLoading]);

  const CreatePost=()=>{
    let obj={
      title:'testing Post',
      body:'This is the testing post',
      userId:26
    }
    createPost(obj)
  }



  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:'center'}}>
    <ActivityIndicator color={'white'} size="large"/>
    </View>
  )}
  return (
    <View style={{justifyContent:'center'}}>
      <Text>App</Text>
      <Button
        title="Create a Post"
        onPress={CreatePost}
      />
 <Text style={{color:'white',marginTop:'5%'}}>
          length of the posts:->  {data?.length}
        </Text>

         <Text style={{color:'white',marginTop:'5%'}}>
          All Posts Data:
        </Text>
      <View style={{width:'100%',height:'35%',marginTop:'5%'}}>
        <ScrollView>
        <Text style={{color:'white'}}>
          {JSON.stringify(data)}
        </Text>
        </ScrollView>

      </View>
      <Text style={{color:'white',marginTop:'5%'}}>
          Create Post Response:
        </Text>
      <View style={{width:'100%',height:'35%',marginTop:'5%'}}>
        <ScrollView>
        <Text style={{color:'white'}}>
          {JSON.stringify(res)}
        </Text>
        </ScrollView>

      </View>
    
    </View>
  );
};

export default TestScreen;
