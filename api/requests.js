import * as SecureStore from 'expo-secure-store';

const apiDomain = 'https://quiet-brook-62542.herokuapp.com/'
const hardCodeToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDAyNDY4MzEsImlhdCI6MTY0MDIwMzYzMSwidXNlcl9pZCI6Nn0.3zv8RpQJKg9OZ0E8XsK1beu65p7k2_a5bXhhhHnl79c'

function getRequest(route, value){
    return fetch(apiDomain + route + value, {
        headers: {
            'Authorization': hardCodeToken
        }
    })
        .then((response) => response.json())
        // .then((responseJson) => JSON.parse(responseJson.toString()))
        .then((responseJson) => responseJson
            // Promise.all([responseJson]).then(values => {
            //     return values[0];
            // })
        )
        .catch((error) => {
            console.error(error);
        });
}

function postRequest(route, bodyObject){
    const stringBody = JSON.stringify(bodyObject)
    console.log(stringBody)
    return fetch(apiDomain + route, {
        method: 'POST',
        headers: {
            'Authorization': hardCodeToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: stringBody

    })
        // .then((response) => response)
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => {
            console.error(error);
        });
}

export function getDishById(id) {
    const result = getRequest('api/dish/', id);
    // console.log(Object.entries(result))
    return result;
}

export function getDishesByTitle(title) {
    return getRequest('api/dish/getByTitle/', title);
}

export function saveDish(id) {
    return getRequest('api/dish/save/', id);
}

export function unsaveDish(id) {
    return getRequest('api/dish/unsave/', id);
}

export function getSavedDishes() {
    // return getRequest('api/dish/saved');
    const result = getRequest('api/dish/saved', '');
    console.log('--------')
    console.log(Object.entries(result))
    return result;
}

export function getDishesByIngredients(ingredientsNames) {
    return postRequest('api/ingredients/getDishes', ingredientsNames);
}

export function createUser(userRegistrationInfo) {
    return postRequest('user/create', userRegistrationInfo);
}

export function loginUser(userLoginInfo) {
    const responseJson = postRequest('user/login', userLoginInfo);
    Promise.all([responseJson]).then(r => {
        // console.log('------------');
        // console.log(typeof r[0]);
        // console.log(r[0].token);
        // console.log(r[0]);
        Promise.all([tryChangeToken(r[0].token)]).then(r => {
            return r[0].token
        })
    })

        // test4@gmail.com
}

export async function getToken() {
    let result = await SecureStore.getItemAsync('token');
    if (result) {
        console.log('Token exists')
    } else {
        console.log('Token doesn\'t exists')
    }
    return result;
}

export async function setToken(token) {
    return await SecureStore.setItemAsync('token', token);
}


async function tryChangeToken(newToken){
    const currentToken = await SecureStore.setItemAsync('token', newToken);
    if (currentToken !== newToken){
        await setToken(newToken)
        console.log('Token was changed');
    }else{
        console.log('Cannot save the same token');
    }
}

// async function writeToFile(token){
//     try {
//         await AsyncStorage.setItem('token', token)
//     } catch (e) {
//         console.log(e)
//     }
//
// }

