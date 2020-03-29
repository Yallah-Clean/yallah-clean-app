import {AsyncStorage} from 'react-native';

export default class LocalStorageService {
 async setUser(user) {
    try {
      await AsyncStorage.setItem('currentUser', JSON.stringify(user));
    } catch (error) {
      // Error saving data
    }
 
  }

 async getUser() {
    try {
      return await AsyncStorage.getItem('currentUser');
   
    } catch (error) {
      // Error retrieving data
      return error;
    }  }
  clearToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('currentUser');
  }

}
