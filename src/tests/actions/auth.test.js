import { login, logout } from '../../actions/auth';

test('returns login action object', () => {
    const uid = "123";
    const result = login(uid);
    expect(result).toEqual({
        type: "LOGIN",
        uid
    });
});

test('returns logout action object', () => {
    const result = logout();
    expect(result).toEqual({
        type: "LOGOUT"
    });
});