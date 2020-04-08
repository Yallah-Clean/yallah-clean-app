import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  // container: {
  //   flex: 1,
  //   padding: 20,
  //   backgroundColor: '#fff',
  // },
  input: {
    borderWidth: 1,
    borderColor: '#2ACF3B',
    padding: 10,
    backgroundColor:'#FFFFFF',
    fontSize: 18,
    borderRadius:25,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
    flex:1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  button: {
    paddingBottom: 50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  navigator: {
    flex: 1,
    height: 100,
  },
  map: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  containerSplach: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor:'#2ACF3B'
  },
  searchBar: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 999,
    left: 15,
    height: 40,
  },
  searchInput: {
    flex: 1,
     borderWidth: 1,
    padding: 10,
    opacity: .9,
     borderRadius: 33,
    height: 45,
     borderColor: '#2ACF3B',
    top: 15,
    color: '#2ACF3B',
     flexDirection: 'column',
  },
  setPickupButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    marginTop: 2,
  },
});

export const images = {};
