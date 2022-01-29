import {atom} from 'recoil';


const userState = atom({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default is null but we will fetch it later
});

export default userState