import authReducer from '../../reducers/auth';


test('returns uid', () => {
    const action = {
        type: "LOGIN",
        uid: "123"
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('clears uid', () => {
    const action = {
        type: "LOGOUT",
    };
    const state = authReducer({ uid: "anything" }, action);
    expect(state).toEqual({});
});