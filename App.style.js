import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 20,
    //fontFamily: "arial, verdana, sans-serif",
    color: '#333',
    backgroundColor: '#7579a5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navcontainer:{
    padding: 5,
    flex:1,
    //fontFamily: "arial, verdana, sans-serif",
    color: '#333',
    backgroundColor: '#414aff',
    alignItems: 'center',

  },
  container2:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#7579a5',
  },
  taverncontainer:{
    flex:1,
    backgroundColor: '#7579a5',
    padding:5
  },
  btnMarker:{
    position:'absolute',
    flexDirection:'row',
    alignSelf:'center',
    bottom:'22%',
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    padding:5
  },
  wrap:{
   alignSelf: 'center',
   width:340,
   height:HEIGHT*0.25, 
   borderRadius: 10,
   
  },
  wrapDots:{
    position: 'absolute',
    bottom:0,
    flexDirection:"row",
    alignSelf:"center",
  },
  dotActive:{
    margin:3,
    color: 'black',
  },
  dot:{
    margin:3,
    color:'white',
  },
  titleText: {
    fontSize: 26,
    paddingBottom: 15,
    color:'#35424a',
    paddingRight:140,
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  textInput: {
    height: 40,
    borderColor: '#7579a5',
    borderBottomColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 2,
    width: "90%",
    backgroundColor: '#7579a5',

    margin: 5,
    padding: 5
  },
  carousel: {
    flex: 1,
  },
  form_input: { 
    marginLeft: 23,
    width: "100%",
  },
  buttonInput: {
    height: 40,
    borderColor: '#414aff',
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    backgroundColor: '#414aff',
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    
  },
  btnEye:{
    position: 'absolute',
    right:30,
    bottom:8,
  },
  btnEye2:{
    position: 'absolute',
    right:30,
    bottom:60,
  },
  link: {
    height: 40,
    width: "90%",
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  element: {
    backgroundColor: '#ccc',
  },
  stackNavigator: {
    backgroundColor: '#ccc',
    color: '#ccc'
  },
  navigation: {
    backgroundColor: '#414aff',
    color: '#000',
    borderColor: '#414aff',
    borderBottomColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 2,
    width: '90%',
    padding: 5,
    justifyContent: "center",
    height: 40,
    //fontWeight: 'bold',
    alignItems: "center",
    fontSize: 20,
  }
});
